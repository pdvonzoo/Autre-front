import React from "react";
import useInput from "../../Hooks/useInput";
import moment from "moment";
import Dropzone from "react-dropzone";
import { useMutation } from "react-apollo-hooks";
import { REGISTER_MAIN_INFO, SET_IMAGES } from "./MainSettingQuery";
import axios from "axios";

const MainSetting = () => {
  const logo = useInput("");
  const mainImage = useInput("");

  const formatFilename = (filename: any) => {
    const date = moment().format("YYYYMMDD");
    const randomeString = Math.random()
      .toString(36)
      .substring(2, 7);
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9.]/g, "-");
    const newFileName = `images/${date}-${randomeString}-${cleanFileName}`;
    return newFileName.substring(0, 60);
  };

  const setMainInfo = useMutation(REGISTER_MAIN_INFO);
  const setImages = useMutation(SET_IMAGES);

  const onDrop: any = async (data: any, target: any) => {
    target.setValue(data[0]);
  };

  const uploadToS3 = async ({ target }: any) => {
    const {
      data: {
        UploadMainInfo: { signedRequest, url }
      }
    } = await setMainInfo({
      variables: {
        filename: formatFilename(target.value ? target.value.name : ""),
        filetype: target.value.type
      }
    });
    const options = {
      headers: {
        "Content-Type": target.value.type
      }
    };
    await axios.put(signedRequest, target.value, options);
    return url;
  };

  const submit = async () => {
    const logoUrl = await uploadToS3({ target: logo });
    const mainImageUrl = await uploadToS3({ target: mainImage });
    await setImages({
      variables: {
        title: "logo",
        url: logoUrl
      }
    });
    await setImages({
      variables: {
        title: "mainImage",
        url: mainImageUrl
      }
    });
  };

  return (
    <>
      <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles, logo)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div>Logo</div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles, mainImage)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div>MainImage</div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      <div>Main Text</div>
      <button type="button" onClick={submit}>
        submit
      </button>
    </>
  );
};

export default MainSetting;
