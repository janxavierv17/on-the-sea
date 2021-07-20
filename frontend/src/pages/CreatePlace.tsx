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
  padding-top: 12px;
  background: white;
  border-radius: 10px;
`;

const Header = styled.h1`
  text-align: center;
  color: #e3f1ff;
  padding: 24px 0;
  margin: 0;
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
  });
  const [pages, setPages] = useState(1);

  const handleNext = () => {
    setPages((prevState) => prevState + 1);
    console.log(pages);
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
              <StickyButtons>
                <PrimaryButton type="button">Cancel</PrimaryButton>
                <Button type="button" onClick={handleNext}>
                  Next
                </Button>
              </StickyButtons>
            </InputContainer>
          </>
        ) : null}
      </form>
    </Container>
  );
};
