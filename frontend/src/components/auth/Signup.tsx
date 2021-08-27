import { Button } from "../form-steps/form.styles";
import { Sea } from "./auth.styles";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f7b146;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  p {
    font-size: 36px;
  }

  h1 {
    font-size: 48px;
  }

  p,
  h1 {
    color: white;
  }

  form {
    display: flex;
    flex-direction: row;
    overflow: hidden;

    div {
      width: 100%;
      position: relative;
    }
    input {
      color: #595f6e;
      padding-top: 30px;
      width: 100%;
      border: none;
      outline: none;
      background-color: #f7b146;
      &:focus + label span,
      &:not(:placeholder-shown) + label span {
        transform: translateY(-100%);
        color: #fff;
      }

      &:focus + label:after,
      :not(:placeholder-shown) + label:after {
        transform: translate(0%);
      }
    }

    label {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 100%;
      color: #fff;
      font-weight: 700;
      border-bottom: 0.5px solid #d3d3d3;

      &:after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0px;
        bottom: -4px;
        border-bottom: 5px solid white;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }

      span {
        position: absolute;
        bottom: 0px;
        left: 0px;
        transition: all 0.3s ease;
      }
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  handleChange: any;
  handleSubmit: any;
};
export const Signup: React.FC<Props> = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Container>
      <Main>
        <div>
          <p>
            Sign up to <Sea>On The Sea</Sea>
          </p>
          <h1>Create an account.</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <FormContainer>
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="firstName">
                <span>First Name</span>
              </label>
            </div>

            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="lastName">
                <span>Last name</span>
              </label>
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="email">
                <span>Email Address</span>
              </label>
            </div>

            <div>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="password">
                <span>Password</span>
              </label>
            </div>
          </FormContainer>
          {/* <Button>Register</Button> */}
        </form>
      </Main>
    </Container>
  );
};
