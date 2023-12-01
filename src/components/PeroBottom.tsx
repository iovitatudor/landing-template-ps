import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const PeroBottom: FC = () => {
  return (
    <div className="pero-bottom">
      <Container maxWidth={"xl"}>
        <Grid container className="options-list">
          <Grid xs={5}>
            <img src="/images/Pero-image%201.svg" alt="" width="98%"/>
          </Grid>
          <Grid xs={7} className="pero-bottom-info">
            <p>
              $PERO is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or
              roadmap. the coin is completely useless and for entertainment purposes only.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PeroBottom;
