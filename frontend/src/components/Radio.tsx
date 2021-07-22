// import styled from "styled-components";

import {
  Description,
  Input,
  Image,
  RadioContainer,
  Label,
  TypeOfPlaceLabel,
} from "./form-steps/form.styles";
type RadioTypes = {
  id: string;
  image?: string;
  place: string;
  description?: string;
  value: string;
  children: string;
  currentValue: string;
  onChange: any;
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
    <>
      <RadioContainer>
        <div>
          <Input
            type="radio"
            id={id}
            name={place}
            value={value}
            checked={value === currentValue}
            onChange={onChange}
          />

          {place === "typeOfPlace" ? (
            <TypeOfPlaceLabel htmlFor={value}>{children}</TypeOfPlaceLabel>
          ) : (
            <Label htmlFor={value}>{children}</Label>
          )}

          {description ? (
            <Description>{description}</Description>
          ) : // <Description htmlFor={value}>{description}</Description>
          null}
        </div>
        <div>{image ? <Image src={image} alt="A kind of place" /> : null}</div>
      </RadioContainer>
    </>
  );
};
