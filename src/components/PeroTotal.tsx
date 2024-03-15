import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";
import {Content} from "../content";

const PeroTotal: FC = () => {
  return (
    <div className="pero-total" id="tokenomics">
      <Container maxWidth={"xl"}>
        <h3>{Content.totalSupply}</h3>
        <h4>{Content.tokenSupply} <i>{Content.token}</i></h4>
        <Grid container className="info">
          <Grid md={4}>
            <div className="info-inside">
              <p>{Content.tokenAdvantage1}</p>
              <p>{Content.tokenAdvantage2}</p>
              <p>{Content.tokenAdvantage3}</p>
              <p>{Content.tokenAdvantage4}</p>
              <a href={Content.topButtonLink}><i>{Content.topButtonText}</i></a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PeroTotal;
