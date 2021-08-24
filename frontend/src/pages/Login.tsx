import React, { ChangeEvent, useState } from "react";
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
    <Signup
      firstName={signUpData.firstName}
      lastName={signUpData.lastName}
      email={signUpData.email}
      password={signUpData.password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
