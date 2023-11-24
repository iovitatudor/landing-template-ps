import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Banner: FC = () => {
  return (
    <div className="banner">
      <Container className="banner-container" maxWidth={"xl"}>
        <Grid container className="banner-top">
          <Grid xs={6}>
            <h1>Pero the Hero!</h1>
            <h2>$Pero</h2>
            <h4>The Meme Token For True Degens</h4>
            <p>PERO's the ultimate Degen Mascot for those who live for the Next Big Pump and aren't afraid of a little
              Dip- We embrace the Chaos, Laugh in the face of FUD- Toast to our Diamond Hands- Raise your Glass for the
              PERO Moon Blast!</p>
          </Grid>
          <Grid xs={6} className="banner-image">
            <img src="/images/Pero-image 1.png" alt=""/>
          </Grid>
        </Grid>

        <Grid container className="banner-bottom">
          <Grid container>
            <Grid xs={12} className="banner-title-wrap">
              <p className="banner-title">Ready for the ride of a lifetime? Lets take $PERO to the moon!</p>
            </Grid>
            <Grid xs={12} className="banner-links">
              <a href="#" className="banner-link twiter">
                <span>Twitter</span>
                <img src="/images/twiiter.svg" alt=""/>
              </a>
              <a href="#" className="banner-link twiter">
                <span>Telegram</span>
                <img src="/images/telegram.svg" alt=""/>
              </a>
              <a href="#" className="banner-link twiter">
                <span>Uniswap</span>
                <img src="/images/unuswapp.svg" alt=""/>
              </a>
              <a href="#" className="banner-link twiter">
                <span>Dextools</span>
                <img src="/images/dextools.svg" alt=""/>
              </a>
              <a href="#" className="banner-link twiter">
                <span>Etherscan</span>
                <img src="/images/etherscan.svg" alt=""/>
              </a>
            </Grid>
            <Grid xs={12}>
              <p className="banner-coming">CEX LISTINGS COMING SOON</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner
