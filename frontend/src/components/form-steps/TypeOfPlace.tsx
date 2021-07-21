// Components
import { Radio } from "../Radio";

// Styles
import {
  Header,
  InputContainer,
  StickyButtons,
  PrimaryButton,
  Button,
} from "./form.styles";

type typeOfPlace = {
  header: string;
  place: string;
  handleNext: any;
  handleBack: any;
  handleChange: any;
};

export const TypeOfPlace: React.FC<typeOfPlace> = ({
  header,
  place,
  handleChange,
  handleNext,
  handleBack,
}) => {
  return (
    <>
      <Header>{header}</Header>
      <InputContainer>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
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
