import { ChangeEvent, useState } from "react";
import { Radio } from "../components/Radio";

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
    <form>
      <pre>{JSON.stringify(formData)}</pre>
      {pages === 1 ? (
        <>
          <h1>What kind of place will you host?</h1>
          <div>
            <Radio
              id="apartment"
              value="apartment"
              place="place"
              currentValue={formData.place}
              onChange={handleChange}
            >
              Apartment
            </Radio>
          </div>
          <div>
            <Radio
              id="rental-unit"
              value="rental-unit"
              place="place"
              currentValue={formData.place}
              onChange={handleChange}
            >
              Rental Unit
            </Radio>
          </div>
          <div>
            <Radio
              id="house"
              value="house"
              place="place"
              currentValue={formData.place}
              onChange={handleChange}
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
            >
              Boutique hotel
            </Radio>
          </div>
          <button type="button">Cancel</button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </>
      ) : null}
      <p>Page {pages}</p>
    </form>
  );
};
