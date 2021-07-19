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
          <h1>Page {pages}</h1>
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

      {pages === 2 ? (
        <>
          <h1>Page {pages}</h1>
          <div>
            <input
              type="radio"
              id="apartment"
              name="typeOfPlace"
              onChange={handleChange}
            />
            <label htmlFor="apartment">Apartment</label>
          </div>
          <div>
            <input
              type="radio"
              id="rental-unit"
              name="typeOfPlace"
              onChange={handleChange}
            />
            <label htmlFor="rental-unit">Rental Unit</label>
          </div>
          <div>
            <input
              type="radio"
              id="house"
              name="typeOfPlace"
              onChange={handleChange}
            />
            <label htmlFor="house">House</label>
          </div>
          <div>
            <input
              type="radio"
              id="bed-and-breakfast"
              name="typeOfPlace"
              onChange={handleChange}
            />
            <label htmlFor="bed-and-breakfast">Bed and Breakfast</label>
          </div>
          <div>
            <input
              type="radio"
              id="boutique-hotel"
              name="typeOfPlace"
              onChange={handleChange}
            />
            <label htmlFor="boutique-hotel">Boutique Hotel</label>
          </div>
          <button type="button">Cancel</button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </>
      ) : null}
    </form>
  );
};
