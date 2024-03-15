import React, {FC, useState} from 'react';
import {Container, Grid} from "@mui/material";
import {BrowserView, MobileView} from 'react-device-detect';
import {Content} from "../content";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Banner: FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(Content.caValue);
      setCopied(true)
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="banner">
      <Container className="banner-container" maxWidth={"xl"}>
        <Grid container className="banner-top">
          <MobileView>
            <Grid item md={6} xs={12} className="banner-image">
              <img src="/images/Sace-main-image.png?VideoToGifConverterBot" alt=""/>
            </Grid>
          </MobileView>
          <Grid item md={6} xs={12}>
            <h1>{Content.bannerTitle}</h1>

            <h4>{Content.bannerSubtitle}</h4>
            <p>{Content.bannerParagraph1}</p>
            <p>{Content.bannerParagraph2}</p>
            <p></p>
          </Grid>

          <Grid item md={6} xs={12} className="banner-image">
            <BrowserView>
              <video src="/actual-images/1st-gif.mp4" autoPlay={true} muted={true} loop={true}></video>
              {/*<img src="/actual-images/1st-gif.mp4" alt=""/>*/}
            </BrowserView>
          </Grid>
        </Grid>

        <Grid container className="banner-bottom">
          <Grid container>
            <Grid item md={12} xs={12} className="banner-title-wrap">
              <p className="banner-title">CA: {Content.caValue}
                <span onClick={copyToClipboard}><ContentCopyIcon/></span>
                {
                  copied && <div className="copied-message">Copied!</div>
                }
              </p>
            </Grid>
            <Grid item md={12} xs={12} className="banner-links">
              <a href={Content.twitterLink} target="_blank" className="banner-link twiter" rel="noreferrer">
                <span>Twitter</span>
                <img src="/images/twiiter.svg" alt=""/>
              </a>
              <a href={Content.telegramLink} target="_blank" className="banner-link" rel="noreferrer">
                <span>Telegram</span>
                <img src="/images/telegram.svg" alt=""/>
              </a>
              <a href={Content.raydiumLink} target="_blank" className="banner-link">
                <span>Raydium</span>
                <img src="/images/unuswapp.svg" alt=""/>
              </a>
              <a href={Content.dexScreenerLink} target="_blank" className="banner-link">
                <span>DexScreener</span>
                <img src="/images/dextools.svg" alt=""/>
              </a>
              <a href={Content.solscanLink} target="_blank" className="banner-link">
                <span>Solscan</span>
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
