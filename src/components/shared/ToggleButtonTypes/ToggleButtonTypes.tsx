import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { MemTypeEnum } from "../../../data/enums/MemContentType";

interface ToggleButtonTypesProps {
  value: boolean;
  setValue: (value: string) => void;
}

export const ToggleButtonTypes: React.FC<ToggleButtonTypesProps> = ({
  value,
  setValue,
}) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: MemTypeEnum
  ) => {
    setValue(newValue);
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleChange}>
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value={MemTypeEnum.IMAGE}>IMAGES</ToggleButton>
      <ToggleButton value={MemTypeEnum.VIDEO}>VIDEOS</ToggleButton>
    </ToggleButtonGroup>
  );
};
