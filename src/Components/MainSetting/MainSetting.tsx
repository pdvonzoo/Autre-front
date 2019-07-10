import React from "react";
import useInput from "../../Hooks/useInput";
import moment from "moment";
import "react-dropzone-uploader/dist/styles.css";
import DropZone from "react-dropzone-uploader";
import { useMutation } from "react-apollo-hooks";
import REGISTER_MAIN_INFO from "./MainSettingQuery";
import axios from "axios";

const MainSetting = () => {
  const logo = useInput("");
  const file = useInput("");

  const formatFilename = (filename: any) => {
    const date = moment().format("YYYYMMDD");
    const randomeString = Math.random()
      .toString(36)
      .substring(2, 7);
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
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
    // console.log(signedRequest, file, options);
    await axios.put(signedRequest, file, options);
  };

  const submit = async () => {
    const {
      data: {
        UploadMainInfo: { signedRequest, url }
      }
    } = await setMainInfo();
    await uploadToS3(file.value, signedRequest);
  };
  return (
    <>
      <div>Logo</div>
      <DropZone canCancel={false} multiple={false} onChangeStatus={onDrop} />
      <div>Main image</div>
      <DropZone canCancel={false} multiple={false} onChangeStatus={onDrop} />
      <div>Main Text</div>
      <button type="button" onClick={submit}>
        submit
      </button>
    </>
  );
};

export default MainSetting;
