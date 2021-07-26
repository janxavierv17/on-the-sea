import {
  Header
  FlexContainer,
  PlaceDescriptionSpacing,
  CostStyling,
} from "./form.styles";

type PlaceDescriptionTypes = {
  header: string;
  onChange: any;
  formData: any;
};
export const PlaceDescription: React.FC<PlaceDescriptionTypes> = ({
  header,
  onChange,
  formData,
}) => {
  return (
    <FlexContainer>
      <Header>{header}</Header>
      <PlaceDescriptionSpacing>
        <label htmlFor="title">Create your title</label>
        <textarea
          id="title"
          onChange={onChange}
          name="title"
          cols={32}
          rows={6}
        />
      </PlaceDescriptionSpacing>

      <PlaceDescriptionSpacing>
        <label htmlFor="description">Create your description</label>
        <textarea
          id="description"
          onChange={onChange}
          name="description"
          cols={35}
          rows={6}
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
          onChange={onChange}
        />
      </CostStyling>
    </FlexContainer>
  );
};
