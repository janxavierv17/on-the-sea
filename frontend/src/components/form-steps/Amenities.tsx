// Components
import { Radio } from "../Radio";

// Styles
import { Header, FlexContainer } from "../form-steps/form.styles";

type AmenitiesTypes = {
  place: string;
  header: string;
  handleChange: any;
};
// Change these to checkboxes.
export const Amenities: React.FC<AmenitiesTypes> = ({
  header,
  handleChange,
  place,
}) => {
  return (
    <FlexContainer>
      <Header>{header}</Header>
      <div>
        <Radio
          id="isPool"
          value="isPool"
          currentValue={place}
          // name
          place="isPool"
          onChange={handleChange}
        >
          Pool
        </Radio>
      </div>

      <div>
        <Radio
          id="isHotTub"
          value="isHotTub"
          currentValue={place}
          place="isHotTub"
          onChange={handleChange}
        >
          Hot tub
        </Radio>
      </div>
      <div>
        <Radio
          id="isPatio"
          value="isPatio"
          currentValue={place}
          place="isPatio"
          onChange={handleChange}
        >
          Patio
        </Radio>
      </div>
      <div>
        <Radio
          id="isBqqGrill"
          value="isBqqGrill"
          currentValue={place}
          place="isBqqGrill"
          onChange={handleChange}
        >
          BBQ grill
        </Radio>
      </div>
      <div>
        <Radio
          id="isFirePit"
          value="isFirePit"
          currentValue={place}
          place="isFirePit"
          onChange={handleChange}
        >
          Fire pit
        </Radio>
      </div>

      <div>
        <Radio
          id="isPoolTable"
          value="isPoolTable"
          currentValue={place}
          place="isPoolTable"
          onChange={handleChange}
        >
          Pool table
        </Radio>
      </div>

      <div>
        <Radio
          id="isIndoorFirePlace"
          value="isIndoorFirePlace"
          currentValue={place}
          place="isIndoorFirePlace"
          onChange={handleChange}
        >
          Indoor fire place
        </Radio>
      </div>

      <div>
        <Radio
          id="isOutdoorDiningArea"
          value="isOutdoorDiningArea"
          currentValue={place}
          place="isOutdoorDiningArea"
          onChange={handleChange}
        >
          Outdoor dining area
        </Radio>
      </div>

      <div>
        <Radio
          id="isExerciseEquipment"
          value="isExerciseEquipment"
          currentValue={place}
          place="isExerciseEquipment"
          onChange={handleChange}
        >
          Exercise equipment
        </Radio>
      </div>
    </FlexContainer>
  );
};
