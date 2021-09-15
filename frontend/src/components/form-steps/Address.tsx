// styles
import {
  InputContainer,
  Header,
  Flex,
  FlexRow,
  StatePostcode,
  Placeholder,
  StickyButtons,
  PrimaryButton,
  Button,
} from "./form.styles";

type Props = {
  place: any;
  header: string;
  handleChange: any;
  handleNext: () => void;
  handleBack: () => void;
};

export const Address: React.FC<Props> = ({
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
          <Placeholder>
            <input
              type="text"
              id="street"
              name="street"
              onChange={handleChange}
              required
            />
            <label htmlFor="street">Street</label>
          </Placeholder>

          <Placeholder>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
              required
            />
            <label htmlFor="city">City</label>
          </Placeholder>

          <StatePostcode>
            <Placeholder>
              <input
                type="text"
                id="state"
                name="state"
                onChange={handleChange}
                required
              />
              <label htmlFor="state">State</label>
            </Placeholder>
            <Placeholder>
              <input
                type="text"
                id="postCode"
                name="postCode"
                onChange={handleChange}
                required
              />
              <label htmlFor="postCode">Postcode</label>
            </Placeholder>
          </StatePostcode>

          <Placeholder>
            <input
              type="text"
              id="country"
              name="country"
              onChange={handleChange}
              required
            />
            <label htmlFor="country">Country</label>
          </Placeholder>
        </InputContainer>
        <div>
          <StickyButtons>
            <PrimaryButton type="button" onClick={handleBack}>
              Back
            </PrimaryButton>
            <Button
              type="button"
              onClick={handleNext}
              disabled={
                place.street &&
                place.city &&
                place.state &&
                place.postCode &&
                place.country
                  ? false
                  : true
              }
            >
              Next
            </Button>
          </StickyButtons>
        </div>
      </FlexRow>
    </Flex>
  );
};
