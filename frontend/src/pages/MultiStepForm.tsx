import { ChangeEvent, useState } from "react";

// Components
import { Place } from "../components/form-steps/Place";
import { TypeOfPlace } from "../components/form-steps/TypeOfPlace";
import { KindOfSpace } from "../components/form-steps/KindOfSpace";
import { Address } from "../components/form-steps/Adress";

// Styles
import { MultiStepFormContainer } from "../components/form-steps/form.styles";
import { Form } from "../components/form-steps/Form";

export const MultiStepForm: React.FC = () => {
  const [formData, setFormData] = useState({
    place: "",
    typeOfPlace: "",
    kindOfSpace: "",
    street: "",
    city: "",
    state: "",
    postCode: Number,
    country: "",
  });
  const [step, setSteps] = useState(4);

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
          >
            <>
              <Address onChange={handleChange} />
            </>
          </Form>
        );
      default:
        break;
    }
  };
  return <MultiStepFormContainer>{switchSteps()}</MultiStepFormContainer>;
};
