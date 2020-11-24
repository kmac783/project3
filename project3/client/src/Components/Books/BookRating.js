import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function BookRating({ rating, count }) {
  const [value, setValue] = React.useState(rating);

  return (
    <div>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <div class='ratings'>
          <Rating name='read-only' value={value} readOnly />
          <Typography>{count} Ratings</Typography>
        </div>
      </Box>
    </div>
  );
}
