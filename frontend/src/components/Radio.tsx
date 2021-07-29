// import styled from "styled-components";

import { IncomingMessage } from "http";
import {
  Description,
  Input,
  Image,
  RadioContainer,
  Label,
} from "./form-steps/form.styles";
type RadioTypes = {
  id: string;
  image?: string;
  place: string;
  description?: string;
  value?: string;
  children: string;
  currentValue: string;
  onChange: any;
  pageTwo?: boolean;
};

export const Radio: React.FC<RadioTypes> = ({
  id,
  image,
  place,
  description,
  value,
  children,
  currentValue,
  onChange,
}) => {
  return (
    <RadioContainer>
      {place === "typeOfPlace" ? (
        <label htmlFor={value}>
          {children}
          <input
            type="radio"
            id={id}
            name={place}
            value={value}
            checked={value === currentValue}
            onChange={onChange}
          />
          <div>{image ? <img src={image} alt="A kind of place" /> : null}</div>
        </label>
      ) : (
        <label htmlFor={value}>
          {children}
          <input
            type="radio"
            id={id}
            name={place}
            value={value}
            checked={value === currentValue}
            onChange={onChange}
          />
          <div>{image ? <img src={image} alt="A kind of place" /> : null}</div>
        </label>
      )}

      {/* <input
          type="radio"
          id={id}
          name={place}
          value={value}
          checked={value === currentValue}
          onChange={onChange}
      />
      */}
      <div>{description ? <Description>{description}</Description> : null}</div>
    </RadioContainer>
  );
};
