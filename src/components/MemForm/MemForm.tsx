import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import "./styles.scss";
import { Button } from "../../ui/Button/Button";
import { MemTypeEnum } from "../../enums/MemContentType";
import { AddMemFormikValues } from "../../types/AddMemFormikValues";

interface MemFormProps {
  initialValues?: AddMemFormikValues;
  handelCancel: () => void;
  handleSubmit: (values: AddMemFormikValues) => void;
}

export const MemForm: React.FC<MemFormProps> = ({
  initialValues = {},
  handelCancel,
  handleSubmit,
}) => {
  const formik = useFormik({
    initialValues: {
      title: initialValues.title || "",
      author: initialValues.author || "",
      link: initialValues.link || "",
      contentType: initialValues.contentType || MemTypeEnum.IMAGE,
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className="memForm">
      <img src="images/exiting-cat.png" alt="meow" height={200} />
      <Paper className="memFormBox">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              variant="outlined"
              value={formik.values.title}
              onChange={formik.handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              id="author"
              name="author"
              label="Author"
              variant="outlined"
              value={formik.values.author}
              onChange={formik.handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              id="link"
              name="link"
              label="Link"
              variant="outlined"
              value={formik.values.link}
              onChange={formik.handleChange}
              margin="normal"
              required
            />

            <RadioGroup
              id="contentType"
              name="contentType"
              value={formik.values.contentType}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="img"
                control={<Radio />}
                label="Image"
                onChange={formik.handleChange}
                color="success"
              />
              <FormControlLabel
                value="video"
                control={<Radio />}
                label="Video"
                onChange={formik.handleChange}
              />
            </RadioGroup>
          </div>
          <div className="memFormBoxButtons">
            <Button variant="outlined" color="primary" onClick={handelCancel}>
              <Typography fontWeight="bold">Back</Typography>
            </Button>
            <Button variant="contained" color="primary" type="submit">
              <Typography fontWeight="bold">Meow!</Typography>
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
