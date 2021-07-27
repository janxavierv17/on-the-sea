import {
  InputContainer,
  Header,
  Flex,
  PlaceDescriptionSpacing,
  CostStyling,
  StickyButtons,
  PrimaryButton,
  Button,
} from "./form.styles";

type PlaceDescriptionTypes = {
  header: string;
  formData: any;
  handleChange: any;
  handleBack: any;
  handleSubmit: any;
};

export const PlaceDescription: React.FC<PlaceDescriptionTypes> = ({
  header,
  formData,
  handleChange,
  handleBack,
  handleSubmit,
}) => {
  return (
    <Flex>
      <Header>{header}</Header>
      <InputContainer>
        <PlaceDescriptionSpacing>
          <label htmlFor="title">Create your title</label>
          <input type="text" id="title" onChange={handleChange} name="title" />
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
          <label htmlFor="cost"> Cost per night</label>
          <span>$</span>
          <input
            type="number"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
          />
        </CostStyling>

        <StickyButtons>
          <PrimaryButton type="button" onClick={handleBack}>
            Back
          </PrimaryButton>
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </StickyButtons>
      </InputContainer>
    </Flex>
  );
};
