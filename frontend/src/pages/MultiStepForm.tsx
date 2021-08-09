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
import { UploadPhoto } from "../components/form-steps/UploadPhoto";
// Styles
import { Form } from "../components/form-steps/Form";

type StateTypes = {
  place: string;
  typeOfPlace: string;
  kindOfSpace: string;
  street: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  guests: number;
  beds: number;
  bedRooms: number;
  bathRooms: number;
  amenities: string[];
  title: string;
  description: string;
  costs: number;
};

export const MultiStepForm: React.FC = () => {
  const [step, setSteps] = useState(1);
  const [formData, setFormData] = useState<StateTypes>({
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
    amenities: [],
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
    const { name, value } = event.target;
    if (name === "amenities") {
      let hasVal = formData.amenities.includes(value);
      const newValues = hasVal
        ? {
            ...formData,
            amenities: formData.amenities.filter((item) => item !== value),
          }
        : { ...formData, amenities: [...formData.amenities, value] };
      setFormData(newValues);
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          [event.target.name]: event.target.value,
        };
      });
    }
  };

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/places", formData)
      .then((response) => console.log("Submitted data: ", response))
      .then((error) => console.log(error));
  };

  const switchSteps = () => {
    switch (step) {
      case 1:
        return (
          <Place
            place={formData.place}
            header="What kind of place will you host?"
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <TypeOfPlace
            place={formData.typeOfPlace}
            header="Which of these best describes your place?"
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <KindOfSpace
            place={formData.kindOfSpace}
            header="What kind of space will guest have?"
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 4:
        return (
          <Address
            header="Where is your place located?"
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );

      case 5:
        return (
          <Guests
            header="How many guests would you like to welcome?"
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );

      case 6:
        return (
          <Amenities
            header="Let guests know what your place has to offer."
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 7:
        return (
          <UploadPhoto handleChange={handleChange} handleBack={handleBack} />
        );

      case 8:
        return (
          <PlaceDescription
            formData={formData}
            header="A little more details for your place."
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        );
      default:
        break;
    }
  };
  console.log(formData);
  return <Form>{switchSteps()}</Form>;
};
