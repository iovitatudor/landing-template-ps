import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";
import {BrowserView, MobileView} from 'react-device-detect';

const Banner: FC = () => {
  return (
    <div className="banner">
      <Container className="banner-container" maxWidth={"xl"}>
        <Grid container className="banner-top">
          <MobileView>
            <Grid item md={6} xs={12} className="banner-image">
              <video src="/images/@VideoToGifConverterBot.mp4" autoPlay={true} muted={true} loop={true}></video>
            </Grid>
          </MobileView>
          <Grid item md={6} xs={12}>
            <h1>MetaPepSacElon!</h1>
            <h2>$Sace</h2>
            <h4>The Meme Token For True Degens</h4>
            <p>PEPSACE's the ultimate Degen Mascot for those who live for the Next Big Pump and aren't afraid of a
              little
              Dip- We embrace the Chaos, Laugh in the face of FUD- Toast to our Diamond Hands- Raise your Glass for the
              PEPSACE Moon Blast!</p>
          </Grid>

          <Grid item md={6} xs={12} className="banner-image">
            <BrowserView>
              <video src="/images/@VideoToGifConverterBot.mp4" autoPlay={true} muted={true} loop={true}></video>
            </BrowserView>
          </Grid>

        </Grid>

        <Grid container className="banner-bottom">
          <Grid container>
            <Grid item md={12} xs={12} className="banner-title-wrap">
              <p className="banner-title">Ready for the ride of a lifetime? Lets take $Sace to the moon!</p>
            </Grid>
            <Grid item md={12} xs={12} className="banner-links">
              {/*<a href="#" className="banner-link twiter">*/}
              {/*  <span>Twitter</span>*/}
              {/*  <img src="/images/twiiter.svg" alt=""/>*/}
              {/*</a>*/}
              <a href="https://t.me/IntregraLaunch" target="_blank" className="banner-link">
                <span>Telegram</span>
                <img src="/images/telegram.svg" alt=""/>
              </a>
              <a href="#" target="_blank" className="banner-link">
                <span>Uniswap</span>
                <img src="/images/unuswapp.svg" alt=""/>
              </a>
              <a href="#" target="_blank" className="banner-link">
                <span>Dextools</span>
                <img src="/images/dextools.svg" alt=""/>
              </a>
              <a href="#" target="_blank" className="banner-link">
                <span>Etherscan</span>
                <img src="/images/etherscan.svg" alt=""/>
              </a>
            </Grid>
            <Grid item md={12} xs={12}>
              <p className="banner-coming">CEX LISTINGS COMING SOON</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner
