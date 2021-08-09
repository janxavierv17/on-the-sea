// import styled from "styled-components";

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
    <>
      <RadioContainer>
        <div>
          <Input
            id={id}
            type="radio"
            name={place}
            value={value}
            checked={value === currentValue}
            onChange={onChange}
          />

          {place === "typeOfPlace" ? (
            <Label htmlFor={value} pageTwo>
              {children}
            </Label>
          ) : (
            <Label htmlFor={value}>{children}</Label>
          )}

          {description ? <Description>{description}</Description> : null}
        </div>
        <div>{image ? <Image src={image} alt="A kind of place" /> : null}</div>
      </RadioContainer>
    </>
  );
};
