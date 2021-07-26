// Components
import { Radio } from "../Radio";

// Styles
import { Header, FlexContainer } from "../form-steps/form.styles";

type AmenitiesTypes = {
  place: string;
  header: string;
  onChange: any;
};
// Change these to checkboxes.
export const Amenities: React.FC<AmenitiesTypes> = ({
  header,
  onChange,
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
        >
          Exercise equipment
        </Radio>
      </div>
    </FlexContainer>
  );
};
