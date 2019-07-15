import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props: any) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

const ThumbsContainer = styled.aside`
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
`;

const Thumb = styled.div`
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
`;

const ThumbInner = styled.div`
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
`;

const Img = styled.img`
  display: 'block',
  width: 'auto',
  height: '100%'
`;


const Upload = () => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: any) => {
      setFiles(acceptedFiles.map((file:any) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map((file: any) => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Img
          src={file.preview}
        />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(() => () => {
    files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Container>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <ThumbsContainer>
        {thumbs}
      </ThumbsContainer>
    </Container>
  );
}

export default Upload;