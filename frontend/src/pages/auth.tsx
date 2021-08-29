import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import italy from "../imgs/italy.png";
import { Flex } from "./pages.styes";
import { Signup } from "../components/auth/Signup";
// import { useHistory } from "react-router-dom";
export const Login = () => {
  // let history = useHistory();

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signUpError, setSignUpError] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/signup", signUpData)
      .then((response) => {
        console.log("Submitted data", response.data.message);
      })
      .catch((error) => {
        if (error.response.data) {
          console.log("error", error.response.data);
          setSignUpError(error.response.data.errors);
        }
      });

    setSignUpData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    // history.push("/place");
  };

  const errors = signUpError.map((error) => (
    // console.log("Loop on Errors:", error)
    <ul>
      <li>{error}</li>
    </ul>
  ));
  return (
    <Flex>
      <img src={italy} alt="Italy" />
      {errors}

      <Signup
        firstName={signUpData.firstName}
        lastName={signUpData.lastName}
        email={signUpData.email}
        password={signUpData.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={signUpError}
      />
    </Flex>
  );
};
