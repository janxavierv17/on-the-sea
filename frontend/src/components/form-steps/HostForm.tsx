import { ChangeEvent, useState } from "react";

// Components
import { Place } from "./Place";
import { TypeOfPlace } from "./TypeOfPlace";
import { KindOfSpace } from "./KindOfSpace";
// Styles
import { MultiStepFormContainer } from "../form-steps/form.styles";

const HostForm: React.FC = () => {
  const [formData, setFormData] = useState({
    place: "",
    typeOfPlace: "",
    kindOfSpace: "",
  });
  const [step, setSteps] = useState(1);

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
          <Place
            header="What kind of place will you host?"
            place={formData.place}
            handleNext={handleNext}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <TypeOfPlace
            header="Which of these best describes your place?"
            place={formData.place}
            handleNext={handleNext}
            handleChange={handleChange}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <KindOfSpace
            header="What kind of space will guest have?"
            place={formData.place}
            handleNext={handleNext}
            handleChange={handleChange}
            handleBack={handleBack}
          />
        );
      default:
        break;
    }
  };
  return (
    <MultiStepFormContainer>
      <form>{switchSteps()}</form>
    </MultiStepFormContainer>
  );
};

export default HostForm;
