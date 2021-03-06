import React, { useState, useEffect } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { Flex } from "./pages.styes";
type Props = {
  token: string;
};

type customJwtPayload = JwtPayload & { firstName: string };

interface MatchParams extends RouteComponentProps<Props> {
  details: object;
  token: string;
  firstName: string;
  exp: number;
  iat: number;
  lastName: string;
}

/**
 * TODO:
 * Store data from token to local storage as cookie.
 * Use the stored cookie.
 */
export const ActivateAccount: React.FC<MatchParams> = ({ match }) => {
  const [activate, setActivate] = useState({
    name: "",
    token: "",
    show: true,
  });

  const { name, token, show } = activate;

  useEffect(() => {
    let token = match.params.token;
    let userDetails = jwt_decode<customJwtPayload>(token);
    setActivate({
      name: userDetails.firstName,
      token: token,
      show: false,
    });

    function handleActivation() {
      console.log("Token from function:", token);
      axios
        .post("http://localhost:5000/api/v1/account-activation", { token })
        .then((response) => {
          console.log("Submitted data", response.data.message);
          // Save the response (user, token) to local storage as a cookie
        })
        .catch((error) => {
          if (error.response.data) {
            console.log("error", error.response.data);
          }
        });
    }
    handleActivation();
  }, [name, token, show, match.params.token]);
  const activateAccount = () => (
    <div>
      <h1>{name}, your account has been activated.</h1>
    </div>
  );

  return <Flex>{activateAccount()}</Flex>;
};
