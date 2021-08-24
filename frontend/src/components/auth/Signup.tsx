import { Button } from "../form-steps/form.styles";
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <label htmlFor="email">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <Button>Register</Button>
    </form>
  );
};
