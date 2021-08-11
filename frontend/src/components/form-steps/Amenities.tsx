// Styles
import {
  InputContainer,
  Header,
  Flex,
  FlexRow,
  StickyButtons,
  PrimaryButton,
  Button,
  Input,
  AmenitiesContainer,
  Checkbox,
} from "../form-steps/form.styles";

type AmenitiesTypes = {
  header: string;
  handleChange: any;
  handleNext: any;
  handleBack: any;
};

export const Amenities: React.FC<AmenitiesTypes> = ({
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
          <AmenitiesContainer>
            <Checkbox>
              <label htmlFor="pool">Pool</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="pool"
                value="pool"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="patio">Patio</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="patio"
                value="patio"
              />
            </Checkbox>
            <Checkbox>
              <label htmlFor="bbq-grill">Bbq grill</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="hot-tub"
                value="bbq-grill"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="fire-pit">Fire pit</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="fire-pit"
                value="fire-pit"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="pool-table">Pool table</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="pool-table"
                value="pool-table"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="indoor-fieplace">Indoor fireplace</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="indoor-fireplace"
                value="indoor-fireplace"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="dining-area">Outdoor dining area</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="dining-area"
                value="dining-area"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="exercise-equipment">Exercise equipment</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="exercise-equipment"
                value="exercise-equipment"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="wifi">Wi-Fi</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="wifi"
                value="wifi"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="tv">TV</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="tv"
                value="tv"
              />
            </Checkbox>

            <Checkbox>
              <label htmlFor="kitchen">Kitchen</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="kitchen"
                value="kitchen"
              />
            </Checkbox>
            <Checkbox>
              <label htmlFor="washing-machine">Washing machine</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="washing-machine"
                value="washing-machine"
              />
            </Checkbox>
            <Checkbox>
              <label htmlFor="air-conditioning">Air Conditioning</label>
              <Input
                onChange={handleChange}
                type="checkbox"
                name="amenities"
                id="air-conditioning"
                value="air-conditioning"
              />
            </Checkbox>
          </AmenitiesContainer>
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
