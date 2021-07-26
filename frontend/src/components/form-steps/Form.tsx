import { MultiStepFormContainer } from "../form-steps/form.styles";

type FormTypes = {
  children: any;
};

export const Form: React.FC<FormTypes> = ({ children }) => {
  return (
    <MultiStepFormContainer>
      <form>{children}</form>
    </MultiStepFormContainer>
  );
};
