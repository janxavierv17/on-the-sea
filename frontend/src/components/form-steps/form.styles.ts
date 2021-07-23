import styled from "styled-components";

interface IProps {
  pageTwo?: boolean;
}

export const Description = styled.p`
  padding-top: 12px;
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
  position: relative;
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

export const Label = styled.label<IProps>`
  display: ${(prop) => (prop.pageTwo ? "block" : "flex")};
  padding: ${(prop) => (prop.pageTwo ? "12px 0 12px 6px" : "0 0 0 12px")};
  flex-flow: column wrap;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  z-index: 9000;
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
  z-index: 9999;
  background-color: white;
  box-shadow: 0 8px 32px 0 black;
  border: 1px solid rgba(255, 255, 255, 0.18);
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

export const KindOfSpaceDiv = styled.div`
  height: 100vh;
`;
