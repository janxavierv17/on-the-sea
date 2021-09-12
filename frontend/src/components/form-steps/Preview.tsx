import { useEffect } from "react";
import {
  InputContainer,
  Header,
  Flex,
  FlexRow,
  StickyButtons,
  PrimaryButton,
  Button,
} from "./form.styles";

type PreviewTypes = {
  userDetails: any;
  place: any;
  header: string;
  uploadedPhoto: any;
  handleSubmit: any;
  handleBack: () => void;
};

export const Preview: React.FC<PreviewTypes> = ({
  userDetails,
  place,
  header,
  uploadedPhoto,
  handleBack,
  handleSubmit,
}) => {
  useEffect(() => {}, [uploadedPhoto]);

  console.log("Preview Photo:", uploadedPhoto);
  return (
    <Flex>
      <Header>{header}</Header>
      <FlexRow>
        <InputContainer>
          <div>
            {place.images && (
              <img src={place.images} alt="The file you've uploaded." />
            )}
            <h1>
              The {place.place.charAt(0).toUpperCase()}
              {place.place.slice(1)} hosted by {userDetails.firstName}
            </h1>
            <div>
              <h3>Amenities</h3>
              <p>
                {place.guests} {place.guests > 1 ? "guests" : "guest"}
              </p>
              <p>
                {place.beds} {place.beds > 1 ? "beds" : "bed"}
              </p>
              <p>
                {place.beds} {place.bedRooms > 1 ? "bedrooms" : "bed"}
              </p>
              <p>{place.beds} bath</p>
            </div>
            <div>
              <h3>Location</h3>
              <p>
                {place.street} {place.city}, {place.postCode} {place.state}{" "}
                {place.country}
              </p>
            </div>
          </div>
        </InputContainer>
        <div>
          <StickyButtons>
            <PrimaryButton type="button" onClick={handleBack}>
              Back
            </PrimaryButton>
            <Button type="button" onClick={handleSubmit}>
              Submit
            </Button>
          </StickyButtons>
        </div>
      </FlexRow>
    </Flex>
  );
};
