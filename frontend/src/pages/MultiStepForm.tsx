import { ChangeEvent, useState, useEffect, useContext } from "react";
import { UserContext } from "../components/context";
import axios from "axios";

// Helpers Local Storage
import { isAuth } from "../components/auth/helpers";

// Components
import { Place } from "../components/form-steps/Place";
import { TypeOfPlace } from "../components/form-steps/TypeOfPlace";
import { KindOfSpace } from "../components/form-steps/KindOfSpace";
import { Address } from "../components/form-steps/Address";
import { Guests } from "../components/form-steps/Guests";
import { Amenities } from "../components/form-steps/Amenities";
import { PlaceDescription } from "../components/form-steps/PlaceDescription";
import { UploadPhoto } from "../components/form-steps/UploadPhoto";
import { Preview } from "../components/form-steps/Preview";

// Styles
import { Form } from "../components/form-steps/Form";

type StateTypes = {
  userID: string;
  place: string;
  typeOfPlace: string;
  kindOfSpace: string;
  street: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  guests: string;
  beds: string;
  images: string[];
  bedRooms: string;
  bathRooms: string;
  amenities: string[];
  title: string;
  description: string;
  costs: string;
};

export const MultiStepForm: React.FC = () => {
  const [setUserState] = useContext(UserContext);

  const [step, setSteps] = useState(1);
  const [userDetails, setUserDetails] = useState({} as any);
  const [formData, setFormData] = useState<StateTypes>({
    userID: "",
    place: "",
    typeOfPlace: "",
    kindOfSpace: "",
    street: "",
    city: "",
    state: "",
    postCode: "",
    country: "",
    guests: "",
    beds: "",
    images: [],
    bedRooms: "",
    bathRooms: "",
    amenities: [],
    title: "",
    description: "",
    costs: "",
  });

  useEffect(() => {
    // Move the code below
    // Once landing page is created.
    const loggedUser = isAuth();
    setUserDetails(loggedUser);
  }, []);

  const handleNext = () => {
    setSteps((prevState) => prevState + 1);
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
          userID: userDetails._id,
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
            place={formData}
            header="Where is your place located?"
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );

      case 5:
        return (
          <Guests
            place={formData}
            header="How many guests would you like to welcome?"
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );

      case 6:
        return (
          <Amenities
            place={formData}
            header="Let guests know what your place has to offer."
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 7:
        return (
          <UploadPhoto
            place={formData}
            header="Let's add some photos of your place."
            setFormData={setFormData}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );

      case 8:
        return (
          <PlaceDescription
            place={formData}
            header="A little more details for your place."
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );

      case 9:
        return (
          <Preview
            place={formData}
            userDetails={userDetails}
            header="Check out your listing!"
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        );
      default:
        break;
    }
  };
  return <Form>{switchSteps()}</Form>;
};
