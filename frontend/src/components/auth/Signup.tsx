import {
  FormButton,
  Container,
  Main,
  Header,
  FormContainer,
} from "./auth.styles";
import { Sea } from "./auth.styles";

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  handleChange: any;
  handleSubmit: any;
  errors: any;
};
// TODO: Use the link sent from SendGrid.
export const Signup: React.FC<Props> = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <Container>
      <Main>
        <Header>
          <p>
            Sign up to <Sea>On The Sea</Sea>
          </p>
          <h1>Create an account.</h1>
        </Header>
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

            <FormButton type="submit">Create Account</FormButton>
          </FormContainer>
        </form>
      </Main>
    </Container>
  );
};
