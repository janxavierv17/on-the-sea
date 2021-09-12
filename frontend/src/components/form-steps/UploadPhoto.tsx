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

  useEffect(() => {
    const uploadImage = (base64EncodedImage: string) => {
      try {
        axios
          .post("http://localhost:5000/api/v1/upload", {
            data: base64EncodedImage,
          })
          .then((response) => {
            console.log(response);
            // let uploadedImages = response.data.url;
            // setFormData({ ...formData, images: uploadedImages });
          });
      } catch (error) {
        console.log("Something went wrong: ", error);
      }
    };
    uploadImage(previewImage);
  }, [previewImage]);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target.files) {
      const file = target.files[0];
      previewFile(file);
      if (!previewImage) return;
    } else {
      return;
    }
  };

  const previewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result as string;
      console.log("filereader result:", result);
      setPreviewImage(result);
    };
  };

  return (
    <Flex>
      <Header>{header}</Header>
      <FlexRow>
        <InputContainer>
          <PhotoContainer>
            <PhotoInput htmlFor="photograph">
              Choose and add at least 1 photograph.
              <input
                id="photograph"
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
