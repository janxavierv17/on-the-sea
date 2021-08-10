import React, { ChangeEvent, useState } from "react";
// import axios from "axios";
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
  const [file, setFile] = useState<File>();
  const handleChange = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setFile(files);
    }
    console.log("Files: ", file);
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
                multiple
                onChange={handleChange}
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
