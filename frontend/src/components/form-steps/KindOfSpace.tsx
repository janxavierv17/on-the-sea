// Components
import { Radio } from "../Radio";

// Styles
import {
  Header,
  InputContainer,
  StickyButtons,
  PrimaryButton,
  Button,
  KindOfSpaceDiv,
} from "./form.styles";

type kindOfSpace = {
  header: string;
  place: string;
  handleNext: any;
  handleBack: any;
  handleChange: any;
};
export const KindOfSpace: React.FC<kindOfSpace> = ({
  header,
  place,
  handleNext,
  handleBack,
  handleChange,
}) => {
  return (
    <>
      <Header>{header}</Header>
      <InputContainer>
        <KindOfSpaceDiv>
          <div>
            <Radio
              id="entirePlace"
              value="entirePlace"
              place="kindOfSpace"
              currentValue={place}
              onChange={handleChange}
            >
              An entire place
            </Radio>
          </div>
          <div>
            <Radio
              id="privateRoom"
              value="privateRoom"
              place="kindOfSpace"
              currentValue={place}
              onChange={handleChange}
            >
              A private room
            </Radio>
          </div>
          <div>
            <Radio
              id="sharedRoom"
              value="sharedRoom"
              place="kindOfSpace"
              currentValue={place}
              onChange={handleChange}
            >
              A shared room
            </Radio>
          </div>
        </KindOfSpaceDiv>
        <StickyButtons>
          <PrimaryButton type="button" onClick={handleBack}>
            Back
          </PrimaryButton>
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        </StickyButtons>
      </InputContainer>
    </>
  );
};
