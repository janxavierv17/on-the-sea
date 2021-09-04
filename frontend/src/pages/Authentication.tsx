import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import italy from "../imgs/italy.png";
import { Flex } from "./pages.styes";
import { SignUp } from "../components/auth/SignUp";
export const Authentication = () => {
  const [signUpError, setSignUpError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {}, [signUpError, loading]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoading(false);
    setSignUpData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(false);
    axios
      .post("http://localhost:5000/api/v1/signup", signUpData)
      .then((response) => {
        console.log("Submitted data", response.data.message);
        setLoading(false);
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
  };

  return (
    <Flex>
      <img src={italy} alt="Italy" />
      <SignUp
        firstName={signUpData.firstName}
        lastName={signUpData.lastName}
        email={signUpData.email}
        password={signUpData.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={signUpError}
        loading={loading}
      />
    </Flex>
  );
};
