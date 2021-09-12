import { useEffect } from "react";
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

// Images
import apartment from "../../imgs/apartment.jpeg";
import bedAndBreakfast from "../../imgs/bed-and-breakfast.jpeg";
import boutiqueHotel from "../../imgs/boutique-hotel.jpeg";
import house from "../../imgs/house.jpeg";
import uniqueSpace from "../../imgs/unique-space.jpeg";

type placeType = {
  place: string;
  header: string;
  handleChange: any;
  handleNext: () => void;
};

export const Place: React.FC<placeType> = ({
  place,
  header,
  handleChange,
  handleNext,
}) => {
  return (
    <Flex>
      <Header>{header}</Header>
      <FlexRow>
        <InputContainer>
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
        </InputContainer>
        <div>
          <StickyButtons>
            <PrimaryButton type="button">Cancel</PrimaryButton>
            <Button
              type="button"
              onClick={handleNext}
              disabled={place ? false : true}
            >
              Next
            </Button>
          </StickyButtons>
        </div>
      </FlexRow>
    </Flex>
  );
};
