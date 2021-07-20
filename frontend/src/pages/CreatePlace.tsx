import { ChangeEvent, useState } from "react";
import { Radio } from "../components/Radio";
import styled from "styled-components";
// Images
import apartment from "../imgs/apartment.jpeg";
import bedAndBreakfast from "../imgs/bed-and-breakfast.jpeg";
import boutiqueHotel from "../imgs/boutique-hotel.jpeg";
import house from "../imgs/house.jpeg";
import uniqueSpace from "../imgs/unique-space.jpeg";

const Container = styled.div`
  background: rgb(34, 107, 195);
  background: linear-gradient(
    25deg,
    rgba(137, 191, 248, 1) 20%,
    rgba(45, 140, 255, 1) 66%
  );
`;

const InputContainer = styled.div`
  height: 100vh;
  padding-top: 12px;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Header = styled.h1`
  text-align: left;
  color: #e3f1ff;
  padding: 72px 24px;
  margin: 0;
  font-size: 24px;
  // font-weight: bold;
`;

const StickyButtons = styled.div`
  background-color: white;
  bottom: 0;
  position: sticky;
  padding: 12px;
  height: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: #2d8cff;
  width: 75px;
  height: 45px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

const PrimaryButton = styled(Button)`
  background-color: white;
  border: 1px solid #2d8cff;
  color: #2d8cff;
`;

export const CreatePlace = () => {
  const [formData, setFormData] = useState({
    place: "",
    typeOfPlace: "",
    kindOfPlace: "",
  });
  const [pages, setPages] = useState(1);

  const handleNext = () => {
    setPages((prevState) => prevState + 1);
    console.log(pages);
  };

  const handleBack = () => {
    setPages((prevState) => prevState - 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <Container>
      <form>
        {pages === 1 ? (
          <>
            <Header>What kind of place will you host?</Header>
            <InputContainer>
              <div>
                <Radio
                  id="apartment"
                  value="apartment"
                  place="place"
                  currentValue={formData.place}
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
                  currentValue={formData.place}
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
                  currentValue={formData.place}
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
                  currentValue={formData.place}
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
                  currentValue={formData.place}
                  onChange={handleChange}
                  image={boutiqueHotel}
                >
                  Boutique hotel
                </Radio>
              </div>
            </InputContainer>
            <StickyButtons>
              <PrimaryButton type="button">Cancel</PrimaryButton>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </StickyButtons>
          </>
        ) : null}

        {pages === 2 ? (
          <>
            <Header>Which of these best describes your place?</Header>
            <InputContainer>
              <div>
                <Radio
                  id="rental-unit"
                  value="rental-unit"
                  place="typeOfPlace"
                  description="A rented palce within a multi-unit residential building or complex"
                  currentValue={formData.place}
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
                  currentValue={formData.place}
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
                  currentValue={formData.place}
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
                  currentValue={formData.place}
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
                  currentValue={formData.place}
                  onChange={handleChange}
                >
                  Casa particular
                </Radio>
              </div>
            </InputContainer>
            <StickyButtons>
              <PrimaryButton type="button" onClick={handleBack}>
                Back
              </PrimaryButton>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </StickyButtons>
          </>
        ) : null}

        {pages === 3 ? (
          <>
            <Header>What kind of space will guest have?</Header>
            <InputContainer>
              <div>
                <Radio
                  id="entirePlace"
                  value="entirePlace"
                  place="kindOfPlace"
                  currentValue={formData.place}
                  onChange={handleChange}
                >
                  An entire place
                </Radio>
              </div>
              <div>
                <Radio
                  id="privateRoom"
                  value="privateRoom"
                  place="kindOfPlace"
                  currentValue={formData.place}
                  onChange={handleChange}
                >
                  A private room
                </Radio>
              </div>
              <div>
                <Radio
                  id="sharedRoom"
                  value="sharedRoom"
                  place="kindOfPlace"
                  currentValue={formData.place}
                  onChange={handleChange}
                >
                  A shared room
                </Radio>
              </div>
            </InputContainer>
            <StickyButtons>
              <PrimaryButton type="button" onClick={handleBack}>
                Back
              </PrimaryButton>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </StickyButtons>
          </>
        ) : null}
      </form>
    </Container>
  );
};
