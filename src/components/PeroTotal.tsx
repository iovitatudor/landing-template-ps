import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const PeroTotal: FC = () => {
  return (
    <div className="pero-total" id="tokenomics">
      <Container maxWidth={"xl"}>
        <h3>PEPSACE TOTAL SUPPLY</h3>
        <h4>10 000 000 000</h4>
        <Grid container className="info">
          <Grid md={4}>
            <div className="info-inside">
              <p>85% of the tokens were sent to the liquidity pool, LPtokens were burnt.</p>
              <p>Supply locked for 100 years</p>
              <a href="#">Buy $Sace</a>
            </div>
          </Grid>
          <Grid md={8}>
            <img src="/images/pero-graph.png" alt="" width="100%"/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PeroTotal;
