import { ChangeEvent, useState, useEffect } from "react";
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
  const [step, setSteps] = useState(7);
  const [userDetails, setUserDetails] = useState({} as any);
  const [previewImage, setPreviewImage] = useState("");
  const [uploadedPhoto, setUploadedPhoto] = useState("");

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
    const loggedUser = isAuth();
    setUserDetails(loggedUser);
  }, [formData.userID]);

  console.log(userDetails._id);

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

  console.log();
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
          <UploadPhoto
            header="Let's add some photos of your place."
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            setUploadedPhoto={setUploadedPhoto}
            setFormData={setFormData}
            formData={formData}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );

      case 8:
        return (
          <PlaceDescription
            header="A little more details for your place."
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );

      case 9:
        return (
          <Preview
            userDetails={userDetails}
            place={formData}
            uploadedPhoto={uploadedPhoto}
            header="Check out your listing!"
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        );
      default:
        break;
    }
  };
  console.log("Form Data", formData);
  return <Form>{switchSteps()}</Form>;
};
