import {
  FormButton,
  Container,
  Main,
  Header,
  FormContainer,
  Errors,
} from "./auth.styles";
import { Sea } from "./auth.styles";
import { Link } from "react-router-dom";
type Props = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  errors: any;
  loading: boolean;
  handleChange: any;
  handleSubmit: any;
};

export const SignUp: React.FC<Props> = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
  handleSubmit,
  errors,
  loading,
}) => {
  const signUpErrors = errors.map((error: string[], index: number) => {
    return <li key={index}>{error}</li>;
  });

  return (
    <Container>
      <Main>
        <Header>
          <p>
            Sign up to <Sea>On The Sea</Sea>
          </p>
          <h1>Create an account.</h1>
        </Header>

        <Errors>{signUpErrors}</Errors>
        <form method="POST" onSubmit={handleSubmit}>
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

            <FormButton type="submit" disabled={loading ? true : false}>
              Register
            </FormButton>
            <p>
              Already a member? <Link to="/signin">Sign In</Link>
            </p>
          </FormContainer>
        </form>
      </Main>
    </Container>
  );
};
