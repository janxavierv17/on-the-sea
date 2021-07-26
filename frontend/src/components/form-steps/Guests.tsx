// Styles
import { Header, GuestContainer, GuestWidth } from "./form.styles";

type GuestTypes = {
  header: string;
  onChange: any;
};

export const Guests: React.FC<GuestTypes> = ({ header, onChange }) => {
  return (
    <GuestContainer>
      <Header>{header}</Header>
      <GuestWidth>
        <label htmlFor="guest">Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          required
          onChange={onChange}
        />
      </GuestWidth>

      <GuestWidth>
        <label htmlFor="beds">Beds</label>
        <input
          type="number"
          id="beds"
          name="beds"
          required
          onChange={onChange}
        />
      </GuestWidth>

      <GuestWidth>
        <label htmlFor="bedrooms">Bedrooms</label>
        <input
          type="number"
          id="bedRooms"
          name="bedRooms"
          required
          onChange={onChange}
        />
      </GuestWidth>

      <GuestWidth>
        <label htmlFor="Bathrooms">Bathrooms</label>
        <input
          type="number"
          id="bathRooms"
          name="bathRooms"
          required
          onChange={onChange}
        />
      </GuestWidth>
    </GuestContainer>
  );
};
