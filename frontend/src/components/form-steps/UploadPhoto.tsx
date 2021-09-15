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
  place: any;
  header: string;
  setFormData: any;
  handleBack: () => void;
  handleNext: () => void;
};

export const UploadPhoto: React.FC<IProps> = ({
  place,
  header,
  setFormData,
  handleBack,
  handleNext,
}) => {
  const [fileInputState] = useState("");
  useEffect(() => {}, [place.images]);
  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as unknown as string;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }
    try {
      const data = await axios.post(
        "http://localhost:5000/api/v1/upload",
        formData
      );
      setFormData((prevState: any) => {
        return { ...prevState, images: data.data.url };
      });
    } catch (error) {
      console.log("Something went wrong with handleUpload function", error);
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
            <Button
              onClick={handleNext}
              disabled={place.images.length > 0 ? false : true}
            >
              Next
            </Button>
          </StickyButtons>
        </div>
      </FlexRow>
    </Flex>
  );
};
