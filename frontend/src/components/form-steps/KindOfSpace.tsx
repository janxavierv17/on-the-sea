// Components
import { Radio } from "../Radio";

// Styles
import {
  InputContainer,
  Header,
  Flex,
  FlexRow,
  StickyButtons,
  PrimaryButton,
  Button,
} from "./form.styles";

type kindOfSpace = {
  place: string;
  header: string;
  handleChange: any;
  handleNext: any;
  handleBack: any;
};
export const KindOfSpace: React.FC<kindOfSpace> = ({
  place,
  header,
  handleChange,
  handleNext,
  handleBack,
}) => {
  return (
    <Flex>
      <Header>{header}</Header>
      <FlexRow>
        <InputContainer>
          <Radio
            id="entirePlace"
            value="entirePlace"
            place="kindOfSpace"
            currentValue={place}
            onChange={handleChange}
          >
            An entire place
          </Radio>
          <Radio
            id="privateRoom"
            value="privateRoom"
            place="kindOfSpace"
            currentValue={place}
            onChange={handleChange}
          >
            A private room
          </Radio>

          <Radio
            id="sharedRoom"
            value="sharedRoom"
            place="kindOfSpace"
            currentValue={place}
            onChange={handleChange}
          >
            A shared room
          </Radio>
        </InputContainer>

        <div>
          <StickyButtons>
            <PrimaryButton type="button" onClick={handleBack}>
              Back
            </PrimaryButton>
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          </StickyButtons>
        </div>
      </FlexRow>
    </Flex>
  );
};
