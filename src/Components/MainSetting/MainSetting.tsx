import React from "react";
import useInput from "../../Hooks/useInput";
import moment from "moment";
import "react-dropzone-uploader/dist/styles.css";
// import DropZone, {
//   IDropzoneProps,
//   IFileWithMeta
// } from "react-dropzone-uploader";
import { useDropzone } from "react-dropzone";
import { useMutation } from "react-apollo-hooks";
import REGISTER_MAIN_INFO from "./MainSettingQuery";
import axios from "axios";

const MainSetting = () => {
  const logo = useInput("");
  const file = useInput("");

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    rootRef, // Ref to the `<div>`
    inputRef // Ref to the `<input>`
  } = useDropzone({
    getFilesFromEvent: event => myCustomFileGetter(event)
  });
  const formatFilename = (filename: any) => {
    const date = moment().format("YYYYMMDD");
    const randomeString = Math.random()
      .toString(36)
      .substring(2, 7);
    console.log(filename);
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9.]/g, "-");
    console.log(cleanFileName);
    const newFileName = `images/${date}-${randomeString}-${cleanFileName}`;
    return newFileName.substring(0, 60);
  };

  const setMainInfo = useMutation(REGISTER_MAIN_INFO, {
    variables: {
      filename: formatFilename(file.value ? file.value.name : ""),
      filetype: file.value.type
    }
  });
  const onDrop: any = async ({ meta, remove }: any, status: any) => {
    file.setValue(meta);
  };

  const uploadToS3 = async (file: any, signedRequest: any) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    };
    const awsfile = await axios.put(signedRequest, file, options);
  };

  const submit = async () => {
    const {
      data: {
        UploadMainInfo: { signedRequest, url }
      }
    } = await setMainInfo();
    console.log(acceptedFiles[0]);
    await uploadToS3(acceptedFiles[0], signedRequest);
  };

  const handleSubmit = async (files: any, allFiles: any) => {
    const {
      data: {
        UploadMainInfo: { signedRequest, url }
      }
    } = await setMainInfo();
    await uploadToS3(files[0], signedRequest);
    // console.log(files.map(f => f.meta));
    // allFiles.forEach(f => f.remove());
  };

  return (
    <>
      <div>Logo</div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {/* <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }: any) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone> */}
      {/* <DropZone
        multiple={false}
        onChangeStatus={onDrop}
        onSubmit={handleSubmit}
      /> */}
      <div>Main image</div>
      {/* <DropZone canCancel={false} multiple={false} onChangeStatus={onDrop} /> */}
      <div>Main Text</div>
      <button type="button" onClick={submit}>
        submit
      </button>
    </>
  );
};

async function myCustomFileGetter(event: any) {
  const files = [];
  const fileList = event.dataTransfer
    ? event.dataTransfer.files
    : event.target.files;

  for (var i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);

    Object.defineProperty(file, "myProp", {
      value: true
    });

    files.push(file);
  }

  return files;
}

export default MainSetting;
