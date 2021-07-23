import {
  Header,
  InputContainer,
  StickyButtons,
  PrimaryButton,
  Button,
} from "../form-steps/form.styles";

type FormTypes = {
  step: number;
  children: any;
  header?: string;
  handleCancel?: any;
  handleNext?: any;
  handleBack?: any;
};
export const Form: React.FC<FormTypes> = ({
  children,
  header,
  step,
  handleBack,
  handleNext,
}) => {
  return (
    <>
      <form>
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
          ) : (
            <StickyButtons>
              <PrimaryButton type="button" onClick={handleBack}>
                Back
              </PrimaryButton>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </StickyButtons>
          )}
        </InputContainer>
      </form>
    </>
  );
};
