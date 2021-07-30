// Styles
import {
  InputContainer,
  Header,
  Flex,
  FlexRow,
  GuestWidth,
  StickyButtons,
  PrimaryButton,
  Button,
} from "./form.styles";

type GuestTypes = {
  header: string;
  handleChange: any;
  handleNext: any;
  handleBack: any;
};

export const Guests: React.FC<GuestTypes> = ({
  header,
  handleChange,
  handleBack,
  handleNext,
}) => {
  return (
    <Flex>
      <Header>{header}</Header>
      <FlexRow>
        <InputContainer>
          <GuestWidth>
            <label htmlFor="guest">Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              required
              onChange={handleChange}
            />
          </GuestWidth>

          <GuestWidth>
            <label htmlFor="beds">Beds</label>
            <input
              type="number"
              id="beds"
              name="beds"
              required
              onChange={handleChange}
            />
          </GuestWidth>
          <GuestWidth>
            <label htmlFor="bedrooms">Bedrooms</label>
            <input
              type="number"
              id="bedRooms"
              name="bedRooms"
              required
              onChange={handleChange}
            />
          </GuestWidth>
          <GuestWidth>
            <label htmlFor="Bathrooms">Bathrooms</label>
            <input
              type="number"
              id="bathRooms"
              name="bathRooms"
              required
              onChange={handleChange}
            />
          </GuestWidth>
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
