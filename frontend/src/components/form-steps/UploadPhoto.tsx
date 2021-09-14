import React, { ChangeEvent, useState } from "react";
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

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as unknown as string;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }
    console.log("formData - ", [...formData]);
    try {
      const data = await axios.post(
        "http://localhost:5000/api/v1/upload",
        formData
      );
      console.log("Response from cloudinary:", data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Flex>
      <Header>{header}</Header>
      <FlexRow>
        <InputContainer>
          <PhotoContainer>
            <PhotoInput htmlFor="photographs">
              Choose and add at least 1 photograph.
              <input
                id="photographs"
                type="file"
                name="photos"
                accept="images/*"
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
