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
} from "../form-steps/form.styles";

type typeOfPlace = {
  place: string;
  header: string;
  handleChange: any;
  handleNext: any;
  handleBack: any;
};

export const TypeOfPlace: React.FC<typeOfPlace> = ({
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
            id="rental-unit"
            value="rental-unit"
            place="typeOfPlace"
            description="A rented palce within a multi-unit residential building or complex"
            currentValue={place}
            onChange={handleChange}
          >
            Rental Unit
          </Radio>

          <Radio
            id="condominium"
            value="condominium"
            place="typeOfPlace"
            description="A place within a multi-unit or complex owned by the residents."
            currentValue={place}
            onChange={handleChange}
          >
            Condominium (Condo)
          </Radio>

          <Radio
            id="loft"
            value="loft"
            place="typeOfPlace"
            description="An open layout apartment or condo, which may have short interior walls."
            currentValue={place}
            onChange={handleChange}
          >
            Loft
          </Radio>

          <Radio
            id="service-apartment"
            value="service-apartment"
            place="typeOfPlace"
            description="An apartment with hotel-link amenities serviced by a professional management company."
            currentValue={place}
            onChange={handleChange}
          >
            Service apartment
          </Radio>

          <Radio
            id="casa-particular"
            value="casa-particular"
            place="typeOfPlace"
            description="A private room in a home that feels like a bed and breakfast in Cuba."
            currentValue={place}
            onChange={handleChange}
          >
            Casa particular
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
