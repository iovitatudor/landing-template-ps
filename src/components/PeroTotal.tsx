import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const PeroTotal: FC = () => {
  return (
    <div className="pero-total" id="tokenomics">
      <Container maxWidth={"xl"}>
        <h3>PEPSACE TOTAL SUPPLY</h3>
        <h4>10,000,000,000 $SACE</h4>
        <Grid container className="info">
          <Grid md={4}>
            <div className="info-inside">
              <p>Supply Locked for 100 Years</p>
              <p>Token Name: Pepsace</p>
              <p>Token Symbol: $SACE</p>
              <p>Contract Ownership is Renounced</p>
              <a href="#">Buy $Sace</a>
            </div>
          </Grid>
          {/*<Grid md={8}>*/}
          {/*  <img src="/images/pero-graph.png" alt="" width="100%"/>*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </div>
  );
}

export default PeroTotal;
