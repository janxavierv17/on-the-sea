import { ChangeEvent, useState } from "react";

// Components
import { Place } from "../components/form-steps/Place";
import { TypeOfPlace } from "../components/form-steps/TypeOfPlace";
import { KindOfSpace } from "../components/form-steps/KindOfSpace";
import { Address } from "../components/form-steps/Address";
import { Guests } from "../components/form-steps/Guests";
import { Amenities } from "../components/form-steps/Amenities";
// Styles
import { MultiStepFormContainer } from "../components/form-steps/form.styles";
import { Form } from "../components/form-steps/Form";

export const MultiStepForm: React.FC = () => {
  const [step, setSteps] = useState(4);
  const [formData, setFormData] = useState({
    place: "",
    typeOfPlace: "",
    kindOfSpace: "",
    street: "",
    city: "",
    state: "",
    postCode: Number,
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

  const switchSteps = () => {
    switch (step) {
      case 1:
        return (
          <Form
            header="What kind of place will you host?"
            step={step}
            handleNext={handleNext}
          >
            <Place place={formData.place} handleChange={handleChange} />
          </Form>
        );
      case 2:
        return (
          <Form
            header="Which of these best describes your place?"
            step={step}
            handleNext={handleNext}
            handleBack={handleBack}
          >
            <TypeOfPlace place={formData.place} handleChange={handleChange} />
          </Form>
        );
      case 3:
        return (
          <Form
            header="What kind of space will guest have?"
            step={step}
            handleNext={handleNext}
            handleBack={handleBack}
          >
            <KindOfSpace place={formData.place} handleChange={handleChange} />
          </Form>
        );
      case 4:
        return (
          <Form
            header="Where is your place located?"
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
          >
            <>
              <Address onChange={handleChange} />
            </>
          </Form>
        );

      case 5:
        return (
          <Form
            header="How many guests would you like to welcome?"
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
          >
            <>
              <Guests onChange={handleChange} />
            </>
          </Form>
        );

      case 6:
        return (
          <Form
            header="Let guests know what your place has to offer."
            step={step}
            handleBack={handleBack}
            handleNext={handleNext}
          >
            <>
              <Amenities place={formData.place} onChange={handleChange} />
            </>
          </Form>
        );
      default:
        break;
    }
  };

  console.table(formData);
  return <MultiStepFormContainer>{switchSteps()}</MultiStepFormContainer>;
};
