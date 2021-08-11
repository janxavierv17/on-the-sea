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
  handleBack: () => void;
  handleNext: () => void;
};

export const UploadPhoto: React.FC<IProps> = ({
  header,
  handleBack,
  handleNext,
}) => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target.files) {
      const file = target.files[0];
      previewFile(file);
      uploadImage(previewSource);
      if (!previewSource) return;
    } else {
      return;
    }
  };

  const previewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreviewSource(result);
    };
  };

  const uploadImage = (base64EncodedImage: string) => {
    try {
      axios
        .post(
          "http://localhost:5000/api/v1/places",
          JSON.stringify({ data: base64EncodedImage })
        )
        .then((response) => console.log("Submitted data: ", response))
        .then((error) => console.log(error));
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
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
                multiple
                onChange={handleUpload}
              />
            </PhotoInput>
          </PhotoContainer>
          {previewSource && (
            <img
              src={previewSource}
              alt="Your chosen place."
              style={{ height: "300px" }}
            />
          )}
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
