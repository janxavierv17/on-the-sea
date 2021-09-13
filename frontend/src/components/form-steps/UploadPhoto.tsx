import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import {
  InputContainer,
  Header,
  Flex,
  FlexRow,
  StickyButtons,
  PrimaryButton,
  Button,
  PhotoInput,
  PhotoContainer,
} from "./form.styles";

type IProps = {
  header: string;
  previewImage: any;
  setPreviewImage: any;
  setUploadedPhoto: any;
  setFormData: any;
  formData: any;
  handleBack: () => void;
  handleNext: () => void;
};

export const UploadPhoto: React.FC<IProps> = ({
  header,
  previewImage,
  setPreviewImage,
  setUploadedPhoto,
  formData,
  setFormData,
  handleBack,
  handleNext,
}) => {
  const [fileInputState] = useState("");
  const [uploadedFile, setUploadedFile] = useState();
  useEffect(() => {}, [uploadedFile]);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const data = new FormData() as any;
    if (event.target.files !== null) {
      data.append("file", event!.target!.files[0]!);
    }
    setUploadedFile(data);
  };

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("Sending files to backend.");
    axios
      .post("http://localhost:5000/api/v1/upload", uploadedFile, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("Response to frontend:", response);
      })
      .catch((error) => {
        console.log("Axios error uploading photo:", error);
      });
  };
  console.log("Chosen files -", uploadedFile);
  return (
    <Flex>
      <Header>{header}</Header>
      <FlexRow>
        <InputContainer>
          <PhotoContainer>
            <PhotoInput htmlFor="photos">
              Choose and add at least 1 photograph.
              <input
                id="photos"
                type="file"
                name="photos"
                value={fileInputState}
                onChange={handleUpload}
                multiple
              />
            </PhotoInput>
          </PhotoContainer>
        </InputContainer>
        <div>
          <StickyButtons>
            <PrimaryButton type="button" onClick={handleBack}>
              Back
            </PrimaryButton>
            <Button onClick={handleNext}>Next</Button>
          </StickyButtons>
        </div>
      </FlexRow>
    </Flex>
  );
};
