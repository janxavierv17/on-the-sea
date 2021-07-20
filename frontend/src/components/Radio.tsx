import styled from "styled-components";

const Description = styled.label`
  font-size: 12px;
  color: grey;
`;
const Input = styled.input`
  appearance: none;
  display: none;
`;

const Image = styled.img`
  object-fit: cover;
  height: 60px;
  width: 60px;
  border-radius: 15px;
`;

const Container = styled.div`
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
const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
`;

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
      <Container>
        <div>
          <Input
            type="radio"
            id={id}
            name={place}
            value={value}
            checked={value === currentValue}
            onChange={onChange}
          />
          <Label htmlFor={value}>{children}</Label>
          {description ? (
            <Description htmlFor={value}>{description}</Description>
          ) : null}
        </div>
        <div>{image ? <Image src={image} alt="A kind of place" /> : null}</div>
      </Container>
    </>
  );
};
