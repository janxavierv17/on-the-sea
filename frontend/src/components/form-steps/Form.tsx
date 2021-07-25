import {
  Header,
  InputContainer,
  StickyButtons,
  PrimaryButton,
  Button,
  FormStyle,
} from "../form-steps/form.styles";

type FormTypes = {
  step: number;
  children: any;
  header?: string;
  handleCancel?: any;
  handleNext?: any;
  handleBack?: any;
  handleSubmit?: any;
};

export const Form: React.FC<FormTypes> = ({
  children,
  header,
  step,
  handleBack,
  handleNext,
  handleSubmit,
}) => {
  return (
    <>
      <FormStyle>
        <Header>{header}</Header>
        <InputContainer>
          {children}
          {step === 1 ? (
            <StickyButtons>
              <PrimaryButton type="button">Cancel</PrimaryButton>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </StickyButtons>
          ) : step !== 7 ? (
            <StickyButtons>
              <PrimaryButton type="button" onClick={handleBack}>
                Back
              </PrimaryButton>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </StickyButtons>
          ) : (
            <StickyButtons>
              <PrimaryButton type="button" onClick={handleBack}>
                Back
              </PrimaryButton>
              <Button type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </StickyButtons>
          )}
        </InputContainer>
      </FormStyle>
    </>
  );
};
