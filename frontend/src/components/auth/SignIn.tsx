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
  email: string;
  password: string;
  handleChange: any;
  handleSubmit: any;
  errors: any;
  loading: boolean;
};
// TODO: Use the link sent from SendGrid.
export const SignIn: React.FC<Props> = ({
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
            Sign in to <Sea>On The Sea</Sea>
          </p>
        </Header>

        <Errors>{signUpErrors}</Errors>
        <form method="POST" onSubmit={handleSubmit}>
          <FormContainer>
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
              Sign In
            </FormButton>
            <p>
              Not a member? <Link to="/signup">Sign up now</Link>
            </p>
          </FormContainer>
        </form>
      </Main>
    </Container>
  );
};
