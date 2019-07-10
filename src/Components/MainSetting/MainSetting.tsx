import React from "react";
import useInput from "../../Hooks/useInput";
import moment from "moment";
import "react-dropzone-uploader/dist/styles.css";
import DropZone from "react-dropzone-uploader";
import { useMutation } from "react-apollo-hooks";
import REGISTER_MAIN_INFO from "./MainSettingQuery";

const MainSetting = () => {
  const logo = useInput("");
  const file = useInput("");
  const setMainInfo = useMutation(REGISTER_MAIN_INFO, {
    variables: {
      file
    }
  });
  const onDrop: any = async ({ meta, remove }: any, status: any) => {
    console.log(meta, remove, status);
    file.setValue(meta);
  };
  console.log(file);
  const uploadToS3: any = async (file: any, signedRequest: any) => {
    setMainInfo();
    // const options = {
    //   header: {
    //     "Content-Type": file.type
    //   }
    // };
  };

  const formatFilename = (filename: any) => {
    const date = moment().format("YYYYMMDD");
    const randomeString = Math.random()
      .toString(36)
      .substring(2, 7);
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newFileName = `images/${date}-${randomeString}-${cleanFileName}`;
    return newFileName.substring(0, 60);
  };

  const submit = async () => {
    const response = { data: { signS3: { signedRequest: 0, url: 0 } } };
    const { signedRequest, url } = response.data.signS3;
    // await uploadToS3(file, signedRequest);
  };
  return (
    <>
      <div>Logo</div>
      <DropZone canCancel={false} multiple={false} onChangeStatus={onDrop} />
      <div>Main image</div>
      <DropZone canCancel={false} multiple={false} onChangeStatus={onDrop} />
      <div>Main Text</div>
      <button onSubmit={submit} value="submit" />
    </>
  );
};

export default MainSetting;
