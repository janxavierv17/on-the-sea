type RadioInput = {
  id: string;
  place: string;
  value: string;
  children: string;
  currentValue: string;
  onChange: any;
};

export const Radio: React.FC<RadioInput> = ({
  place,
  value,
  id,
  onChange,
  currentValue,
  children,
}) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={place}
        value={value}
        checked={value === "apartment"}
        onChange={onChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
