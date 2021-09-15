import {
  InputContainer,
  Header,
  Flex,
  FlexRow,
  PlaceDescriptionSpacing,
  CostStyling,
  StickyButtons,
  PrimaryButton,
  Button,
} from "./form.styles";

type PlaceDescriptionTypes = {
  place: any;
  header: string;
  handleChange: any;
  handleBack: () => void;
  handleNext: () => void;
};

export const PlaceDescription: React.FC<PlaceDescriptionTypes> = ({
  place,
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
          <PlaceDescriptionSpacing>
            <label htmlFor="title">Create your title</label>
            <input
              type="text"
              id="title"
              onChange={handleChange}
              name="title"
            />
          </PlaceDescriptionSpacing>

          <PlaceDescriptionSpacing>
            <label htmlFor="description">Create your description</label>
            <input
              type="text"
              id="description"
              onChange={handleChange}
              name="description"
            />
          </PlaceDescriptionSpacing>

          <CostStyling>
            <label htmlFor="costs"> Cost per night</label>
            <span>$</span>
            <input
              type="number"
              id="costs"
              name="costs"
              onChange={handleChange}
            />
          </CostStyling>
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
                place.title && place.description && place.costs ? false : true
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
