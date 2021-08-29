import styled from "styled-components";

/**
 * Breakpoints
 * DONE 320px — 480px: Mobile devices.
 * DONE 481px — 768px: iPads, Tablets.
 * 769px — 1024px: Small screens, laptops.
 * 1025px — 1200px: Desktops, large screens.
 * 1201px and more — Extra large screens, TV.
 */

interface IProps {
  pageTwo?: boolean;
  block?: boolean;
  col?: any;
}

export const FlexBoxWrapper = styled.div`
  display: flex;
  display: row wrap;
  height: 100vh;
`;

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
  margin: 12px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: 12px;
  padding: 24px 7px;
  font-size: 16px;
  height: 4.5em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  input[type="radio"]:checked + label {
    border: 3px solid #2d8cff;
    border-radius: 7px;
  }
`;

export const Label = styled.label<IProps>`
  border: 1px solid #d3d3d3;
  border-radius: 7px;
  display: ${(prop) => (prop.pageTwo ? "block" : "flex")};
  padding: ${(prop) => (prop.pageTwo ? "12px 0 0 3px" : "0 0 0 12px")};
  flex-flow: column wrap;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  font-size: 14px;
  font-weight: 6;
`;

export const MultiStepFormContainer = styled.div`
  position: relative;
  align-items: center;
  background: linear-gradient(
    25deg,
    rgba(137, 191, 248, 1) 20%,
    rgba(45, 140, 255, 1) 66%
  );
`;

export const Flex = styled.div<IProps>`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
`;

export const FlexRow = styled(Flex)`
  @media (min-width: 768px) {
    display: flex;
    width: 50%;
    flex-direction: column;
    height: 100vh;
  }
`;

export const InputContainer = styled.div`
  overflow-y: auto;
  padding-top: 12px;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;

  @media (min-width: 768px) {
    padding: 12px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 64px;
  }
`;

export const StickyButtons = styled.div`
  z-index: 2;
  padding: 12px;
  background-color: white;
  border-top: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: #2d8cff;
  width: 75px;
  height: 65px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: white;
  text-align: center;

  :disabled {
    background-color: #d3d3d3;
  }
`;

export const PrimaryButton = styled(Button)`
  text-align: center;
  background-color: white;
  border: 1px solid #2d8cff;
  color: #2d8cff;
`;

export const Header = styled.h1`
  text-align: left;
  color: #e3f1ff;
  padding: 72px 24px;
  margin: 0;
  font-weight: bold;
  line-height: 58px;
  @media (min-width: 768px) {
    margin: auto;
    font-size: 48px;
    width: 50%;
  }

  @media (min-width: 1024px) {
    font-size: 48px !important;
  }
`;

export const Wrapper = styled(InputContainer)`
  margin: 300px 0 0 0;
  width: 100%;
`;

export const FlexContainer = styled.div<IProps>`
  display: ${(prop) => (prop.block ? "block" : "flex")};
  flex-flow: column wrap;
  height: 100vh;
`;

export const StatePostcode = styled.div`
  display: flex;
  width: 100%;
`;

export const Placeholder = styled.div`
  position: relative;
  margin: 42px 24px 24px 24px;
  input {
    font-size: 16px;
    height: 25px;
    outline: none;
    border: none;
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
    box-shadow: none !important;
    :focus {
      border-color: rgba(45, 140, 255, 1);
      border-width: medium medium 2px;
    }
  }

  label {
    color: #d3d3d3;
    font-size: 16px;
    position: absolute;
    pointer-events: none;
    top: 0px;
    left: 7px;
    transition: 0.5s ease all;
  }

  input:focus ~ label,
  input:not(:focus):valid ~ label {
    color: #d3d3d3;
    top: -22px;
    left: 0px;
    font-size: 13px;
    opacity: 1;
  }
`;

export const GuestContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const GuestWidth = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: space-around;

  label {
    font-size: 18px;
  }

  input[type="number"] {
    width: 30%;
    border: none;
    border-bottom: 1px solid #d3d3d3;
    outline: none;
    text-align: center;
  }
`;

export const PlaceDescriptionSpacing = styled.div`
  width: 90%;
  padding: 12px;

  label {
    font-size: 18px;
  }
  input {
    margin-top: 12px;
    width: 100%;
    height: 100px;
    font-weight: bold;
    border: 1px solid #d3d3d3;
    resize: none;
    outline: none;
    font-size: 24px;
  }
`;

export const CostStyling = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  span {
    padding: 0 12px 0px 24px;
    font-size: 24px;
  }

  label {
    font-size: 18px;
  }
  input {
    height: 25px;
    width: 25px;
    font-size: 16px;
  }
`;

export const AmenitiesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: left;

  @media (min-width: 768px) {
    overflow: auto;
  }
`;

export const Checkbox = styled.div`
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 125px;
  height: 125px;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;

  input[type="checkbox"]:checked + div {
    height: 100px;
    width: 50px;
    border: 3px solid red;
  }
`;
export const LabelAmenities = styled.label`
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 3px solid #d3d3d3;
  border-radius: 5px;
  width: 125px;
  height: 125px;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
`;

export const PhotoInput = styled.label`
  display: flex;
  border: 3px dotted #d3d3d3;
  height: 250px;
  width: 250px;
  align-items: center;
  justify-content: center;
  text-align: center;
  input[type="file"] {
    appearance: none;
    display: none;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
