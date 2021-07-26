// styles
import {
  Header,
  FlexContainer,
  StatePostcode,
  Placeholder,
} from "./form.styles";

type Props = {
  header: string;
  onChange: any;
};

export const Address: React.FC<Props> = ({ header, onChange }) => {
  return (
    <FlexContainer>
      <Header>{header}</Header>
      <Placeholder>
        <input
          type="text"
          id="street"
          name="street"
          onChange={onChange}
          required
        />
        <label htmlFor="street">Street</label>
      </Placeholder>

      <Placeholder>
        <input type="text" id="city" name="city" onChange={onChange} required />
        <label htmlFor="city">City</label>
      </Placeholder>

      <StatePostcode>
        <Placeholder>
          <input
            type="text"
            id="state"
            name="state"
            onChange={onChange}
            required
          />
          <label htmlFor="state">State</label>
        </Placeholder>
        <Placeholder>
          <input
            type="text"
            id="postCode"
            name="postCode"
            onChange={onChange}
            required
          />
          <label htmlFor="postCode">Postcode</label>
        </Placeholder>
      </StatePostcode>

      <Placeholder>
        <input
          type="text"
          id="country"
          name="country"
          onChange={onChange}
          required
        />
        <label htmlFor="country">Country</label>
      </Placeholder>
    </FlexContainer>
  );
};
