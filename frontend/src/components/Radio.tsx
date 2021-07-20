import styled from "styled-components";

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
  padding: 0 7px;
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
  font-size: 18px;
`;

type RadioTypes = {
  id: string;
  image: string;
  place: string;
  value: string;
  children: string;
  currentValue: string;
  onChange: any;
};

export const Radio: React.FC<RadioTypes> = ({
  id,
  image,
  place,
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
        </div>
        <div>
          <Image src={image} alt="A kind of place" />
        </div>
      </Container>
    </>
  );
};
