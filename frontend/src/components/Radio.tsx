import styled from "styled-components";

const Border = styled.div`
  border: 1px solid #dddddd;
  border-radius: 7px;
  font-size: 16px;
  margin: 12px;
  height: 4.5em;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
`;
const Input = styled.input`
  appearance: none;
`;
const Label = styled.label`
  font-size: 18px;
`;

type RadioTypes = {
  id: string;
  place: string;
  value: string;
  children: string;
  currentValue: string;
  onChange: any;
};

export const Radio: React.FC<RadioTypes> = ({
  place,
  value,
  id,
  onChange,
  currentValue,
  children,
}) => {
  return (
    <Border>
      <Input
        type="radio"
        id={id}
        name={place}
        value={value}
        checked={value === currentValue}
        onChange={onChange}
      />
      <Label htmlFor={value}>{children}</Label>
    </Border>
  );
};
