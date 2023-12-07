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
              {/*<video autoPlay={true} muted loop={true} playsInline>*/}
              {/*  <source src="/images/@VideoToGifConverterBot.mp4" type="video/mp4"></source>*/}
              {/*</video>*/}
              <img src="/images/Sace-main-image-compressed.png" alt=""/>
            </Grid>
          </MobileView>
          <Grid item md={6} xs={12}>
            <h1>PEPSACE <span>($Sace)</span></h1>

            <h4>Fueling the Fire, Merging Hip-Hop and Crypto</h4>
            <p>Welcome to the crypto playground, where PepSace ($SACE), the illest in the game, is droppin' mad vibes!
              $SACE bridgin' the beats of hip hop with the heartbeat of the blockchain, creating a movement that speaks
              to the soul of hip-hop itself. Straight-up changing the game.</p>
            <p>
              We mixin’ that Pepe the ‘Feels Good’ Frog flavor with the hip-hop culture, and the ‘King of the Streets’
              Mike Jones, holdin' it down with his OG rap name, Sace. Step into the limelight, where $SACE is the
              soundtrack to the revolution! You feelin' the vibe?
            </p>
            <p>2023's memecoin game got a new boss, and it's $SACE! Don't sleep on the final, dopest Pepe of the
              year!</p>
          </Grid>

          <Grid item md={6} xs={12} className="banner-image">
            <BrowserView>
              <img src="/images/Sace-main-image-compressed.png" alt=""/>
              {/*<video src="/images/@VideoToGifConverterBot.mp4" autoPlay={true} muted={true} loop={true}></video>*/}
            </BrowserView>
          </Grid>

        </Grid>

        <Grid container className="banner-bottom">
          <Grid container>
            <Grid item md={12} xs={12} className="banner-title-wrap">
              <p className="banner-title">Ready for the ride of a lifetime? Lets take $Sace to the moon!</p>
            </Grid>
            <Grid item md={12} xs={12} className="banner-links">
              <a href="https://twitter.com/SaceCoin" target="_blank" className="banner-link twiter">
                <span>Twitter</span>
                <img src="/images/twiiter.svg" alt=""/>
              </a>
              <a href="https://t.me/SaceCoin" target="_blank" className="banner-link">
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
