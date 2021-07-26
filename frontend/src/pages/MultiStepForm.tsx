import { ChangeEvent, useState } from "react";
import axios from "axios";

// Components
import { Place } from "../components/form-steps/Place";
import { TypeOfPlace } from "../components/form-steps/TypeOfPlace";
import { KindOfSpace } from "../components/form-steps/KindOfSpace";
import { Address } from "../components/form-steps/Address";
import { Guests } from "../components/form-steps/Guests";
import { Amenities } from "../components/form-steps/Amenities";
import { PlaceDescription } from "../components/form-steps/PlaceDescription";

// Styles
import { MultiStepFormContainer } from "../components/form-steps/form.styles";
import { Form } from "../components/form-steps/Form";

export const MultiStepForm: React.FC = () => {
  const [step, setSteps] = useState(1);
  const [formData, setFormData] = useState({
    place: "",
    typeOfPlace: "",
    kindOfSpace: "",
    street: "",
    city: "",
    state: "",
    postCode: "",
    country: "",
    guests: 0,
    beds: 0,
    bedRooms: 0,
    bathRooms: 0,
    isPool: "",
    isHotTub: "",
    isPatio: "",
    isBbqGrill: "",
    isFirePit: "",
    isPoolTable: "",
    isIndoorFirePlace: "",
    isOutdoorDiningArea: "",
    isExerciseEquipment: "",
    title: "",
    description: "",
    costs: 0,
  });

  const handleNext = () => {
    setSteps((prevState) => prevState + 1);
    console.log(step);
  };

  const handleBack = () => {
    setSteps((prevState) => prevState - 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/places", formData)
      .then((response) => console.log(response))
      .then((error) => console.log(error));
    // console.log("Submit button was clicked ...");
    // alert(`You're about to submit the following: ${JSON.stringify(formData)}`);
  };

  const switchSteps = () => {
    switch (step) {
      case 1:
        return (
          <Place
            place={formData.place}
            handleChange={handleChange}
            header="What kind of place will you host?"
          />
        );
      case 2:
        return (
          <TypeOfPlace
            place={formData.place}
            handleChange={handleChange}
            header="Which of these best describes your place?"
          />
        );
      case 3:
        return (
          <KindOfSpace
            place={formData.place}
            handleChange={handleChange}
            header="What kind of space will guest have?"
          />
        );
      case 4:
        return (
          <Address
            onChange={handleChange}
            header="Where is your place located?"
          />
        );

      case 5:
        return (
          <Guests
            onChange={handleChange}
            header="How many guests would you like to welcome?"
          />
        );

      case 6:
        return (
          <Amenities
            place={formData.place}
            onChange={handleChange}
            header="Let guests know what your place has to offer."
          />
        );

      case 7:
        return (
          <PlaceDescription
            onChange={handleChange}
            formData={formData}
            header="A little more details for your place."
          />
        );
      default:
        break;
    }
  };

  console.log(formData);
  return (
    <MultiStepFormContainer>
      <Form
        step={step}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      >
        {switchSteps()}
      </Form>
    </MultiStepFormContainer>
  );
};
