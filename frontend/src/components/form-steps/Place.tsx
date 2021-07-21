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

// Images
import apartment from "../../imgs/apartment.jpeg";
import bedAndBreakfast from "../../imgs/bed-and-breakfast.jpeg";
import boutiqueHotel from "../../imgs/boutique-hotel.jpeg";
import house from "../../imgs/house.jpeg";
import uniqueSpace from "../../imgs/unique-space.jpeg";

type placeType = {
  header: string;
  place: string;
  handleNext: any;
  handleChange: any;
};

export const Place: React.FC<placeType> = ({
  header,
  place,
  handleChange,
  handleNext,
}) => {
  return (
    <>
      <Header>{header}</Header>
      <InputContainer>
        <div>
          <Radio
            id="apartment"
            value="apartment"
            place="place"
            currentValue={place}
            onChange={handleChange}
            image={apartment}
          >
            Apartment
          </Radio>
        </div>
        <div>
          <Radio
            id="unique-space"
            value="unique-space"
            place="place"
            currentValue={place}
            onChange={handleChange}
            image={uniqueSpace}
          >
            Unique Space
          </Radio>
        </div>
        <div>
          <Radio
            id="house"
            value="house"
            place="place"
            currentValue={place}
            onChange={handleChange}
            image={house}
          >
            House
          </Radio>
        </div>
        <div>
          <Radio
            id="bed-and-breakfast"
            value="bed-and-breakfast"
            place="place"
            currentValue={place}
            onChange={handleChange}
            image={bedAndBreakfast}
          >
            Bed and Breakfast
          </Radio>
        </div>
        <div>
          <Radio
            id="boutique-hotel"
            value="boutique-hotel"
            place="place"
            currentValue={place}
            onChange={handleChange}
            image={boutiqueHotel}
          >
            Boutique hotel
          </Radio>
        </div>
        <StickyButtons>
          <PrimaryButton type="button">Cancel</PrimaryButton>
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        </StickyButtons>
      </InputContainer>
    </>
  );
};
