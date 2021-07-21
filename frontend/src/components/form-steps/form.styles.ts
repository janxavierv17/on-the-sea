import styled from "styled-components";
export const Description = styled.label`
  font-size: 12px;
  color: grey;
`;
export const Input = styled.input`
  appearance: none;
  display: none;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 60px;
  width: 60px;
  border-radius: 15px;
`;

export const RadioContainer = styled.div`
  padding: 12px 7px;
  border: 1px solid #dddddd;
  border-radius: 7px;
  font-size: 16px;
  margin: 12px;
  height: 4.5em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;
export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
`;

export const MultiStepFormContainer = styled.div`
  background: rgb(34, 107, 195);
  background: linear-gradient(
    25deg,
    rgba(137, 191, 248, 1) 20%,
    rgba(45, 140, 255, 1) 66%
  );
`;

export const InputContainer = styled.div`
  padding-top: 12px;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Header = styled.h1`
  text-align: left;
  color: #e3f1ff;
  padding: 72px 24px;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

export const StickyButtons = styled.div`
  background-color: white;
  bottom: 0;
  position: sticky;
  padding: 12px;
  height: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: #2d8cff;
  width: 75px;
  height: 45px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

export const PrimaryButton = styled(Button)`
  background-color: white;
  border: 1px solid #2d8cff;
  color: #2d8cff;
`;
