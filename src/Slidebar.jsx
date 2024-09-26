import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import "./Slidebar.css"; // Importing the CSS

function Slidebar(props) {
  const [speed, setSpeed] = React.useState(3);
  return (
    <div className="slidebar-container">
      <Box className="slider-box" sx={{ width: 150 }}>
        <Typography className="slider-typography" gutterBottom>
          Speed: {speed}
        </Typography>
        <Slider
          className="slider"
          size="small"
          defaultValue={3}
          step={1}
          aria-label="Small"
          valueLabelDisplay="auto"
          min={1}
          max={20}
          onChange={(event) => {
            props.change(event.target.value);
            setSpeed(event.target.value);
          }}
        />
      </Box>
    </div>
  );
}

export default Slidebar;
