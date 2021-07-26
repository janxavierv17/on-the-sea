// Components
import { Radio } from "../Radio";

// Styles
import { Header, Wrapper } from "./form.styles";

type kindOfSpace = {
  place: string;
  header: string;
  handleChange: any;
};
export const KindOfSpace: React.FC<kindOfSpace> = ({
  place,
  header,
  handleChange,
}) => {
  return (
    <>
      <Header>{header}</Header>
      <Wrapper>
        <div>
          <Radio
            id="entirePlace"
            value="entirePlace"
            place="kindOfSpace"
            currentValue={place}
            onChange={handleChange}
          >
            An entire place
          </Radio>
        </div>
        <div>
          <Radio
            id="privateRoom"
            value="privateRoom"
            place="kindOfSpace"
            currentValue={place}
            onChange={handleChange}
          >
            A private room
          </Radio>
        </div>
        <div>
          <Radio
            id="sharedRoom"
            value="sharedRoom"
            place="kindOfSpace"
            currentValue={place}
            onChange={handleChange}
          >
            A shared room
          </Radio>
        </div>
      </Wrapper>
    </>
  );
};
