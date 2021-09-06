import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import italy from "../imgs/italy.png";
import { Flex } from "./pages.styes";
import { SignIn } from "../components/auth/SignIn";
export const Login = () => {
  const [signUpError, setSignUpError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [signUpData, setSignUpData] = useState({
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
      .post("http://localhost:5000/api/v1/signin", signUpData)
      .then((response) => {
        console.log("Submitted data", response.data.message);
        // Save the response (user, token) to local storage as a cookie
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.data) {
          console.log("error", error.response.data);
          setSignUpError(error.response.data.errors);
        }
      });

    setSignUpData({
      email: "",
      password: "",
    });
  };

  return (
    <Flex>
      <img src={italy} alt="Italy" />
      <SignIn
        email={signUpData.email}
        password={signUpData.password}
        errors={signUpError}
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Flex>
  );
};
