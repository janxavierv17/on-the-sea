import React, { ChangeEvent, useState } from "react";
import italy from "../imgs/italy.png";
import { Flex } from "../pages/pages.styes";
import { Signup } from "../components/auth/Signup";

export const Login = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
  };

  return (
    <Flex>
      <img src={italy} alt="Italy" />
      <Signup
        firstName={signUpData.firstName}
        lastName={signUpData.lastName}
        email={signUpData.email}
        password={signUpData.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Flex>
  );
};
