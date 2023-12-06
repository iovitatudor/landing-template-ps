import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Options: FC = () => {
  return (
    <div className="options" id="roadmap">
      <Container maxWidth={"xl"}>
        <p>In all seriousness, let's take a glimpse at the exciting journey ahead for $Sace. We don't want to reveal all
          our secrets on day one, but rest assured, there will be unexpected twists and turns along the way. Get ready
          to be amazed!</p>
        <Grid container className="options-list">
          <Grid item md={3} xs={12}>
            <div className="item">
              <img src="/images/1.png" alt=""/>
              <h5>Stage 1</h5>
              <ul>
                <li>Dextools listing</li>
                <li>1111 + holders</li>
                <li>$Sace trending in Twitter</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="item">
              <img src="/images/2.png" alt=""/>
              <h5>Stage 2</h5>
              <ul>
                <li>VIPs $Sace mania</li>
                <li>Sticker packs & Meme stage</li>
                <li>CEX Listings</li>
                <li>1.1111+ hoders</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="item">
              <img src="/images/3.png" alt=""/>
              <h5>Stage 3</h5>
              <ul>
                <li>PEPSACE Wallet</li>
                <li>PeroSwap</li>
                <li>111.111 + holders</li>
                <li>T1 CEX Listing</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="item">
              <img src="/images/4.png" alt=""/>
              <h5>Stage 4</h5>
              <ul>
                <li>PEPSACE the Hero Merch</li>
                <li>1.111.111 + holders</li>
                <li>Beyond the Moon!</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Options;
