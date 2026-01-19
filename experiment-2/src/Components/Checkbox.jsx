import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function BasicCheckbox() {
  return (
    <FormControlLabel control={<Checkbox defaultChecked />} label="Accept Terms" />
  );
}