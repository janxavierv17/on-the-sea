import { Button } from "../form-steps/form.styles";
import styled from "styled-components";

export const Sea = styled.span`
  color: #5fa8d3;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f7b146;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  form {
    display: flex;
    flex-direction: row;

    div {
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    input {
      color: #595f6e;
      margin-top: 30px;
      padding-top: 30px;
      width: 100%;
      border: none;
      outline: none;
      background-color: #f7b146;
      &:focus + label span,
      &:not(:placeholder-shown) + label span {
        transform: translateY(-100%);
        color: #fff;
      }

      &:focus + label:after,
      :not(:placeholder-shown) + label:after {
        transform: translate(0%);
      }
    }

    label {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 100%;
      color: #fff;
      font-weight: 700;
      border-bottom: 0.5px solid #d3d3d3;
      &:after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0px;
        bottom: -4px;
        border-bottom: 5px solid white;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }

      span {
        position: absolute;
        bottom: 0px;
        left: 0px;
        transition: all 0.3s ease;
      }
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const Header = styled.header`
  text-align: center;

  p {
    font-size: 36px;
  }

  h1 {
    font-size: 48px;
  }

  p,
  h1 {
    color: white;
  }

  @media (max-width: 768px) {
    p {
      font-size: 16px;
    }
    h1 {
      font-size: 20px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    padding: 12px;

    button {
      font-size: 12px;
      width: 35%;
    }
  }
`;

export const FormButton = styled(Button)`
  width: 50%;
  height: 40px;
  margin-top: 30px;
  background-color: #5fa8d3;
`;
