import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Options: FC = () => {
  return (
    <div className="options" id="roadmap">
      <Container maxWidth={"xl"}>
        <h3>ROADMAP</h3>
        <p>In all seriousness, let's take a glimpse at the exciting journey ahead for $Sace. We don't want to reveal all
          our secrets on day one, but rest assured, there will be unexpected twists and turns along the way. Get ready
          to be amazed!</p>
        <Grid container className="options <li>list">
          <Grid item md={3} xs={12}>
            <div className="item">
              <img src="/images/1.png" alt=""/>
              <h5>Phase 1</h5>
              <ul>
                <li>Website Launch</li>
                <li>Tokenless Presale Launch</li>
                <li>X Verification</li>
                <li>Strategic Partnerships</li>
                <li>Presale Marketing on TG and X</li>
                <li>Begin China Marketing</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="item">
              <img src="/images/2.png" alt=""/>
              <h5>Phase 2</h5>
              <ul>
                <li>Fair Launch on Uniswap</li>
                <li>Dextools Update</li>
                <li>IG, TikTok, X, TG, YT, 4Chan,& Reddit Marketing</li>
                <li>X/TG Shilling and Raiding</li>
                <li>1,000 + Memes</li>
                <li>Meme Contest + Giveaways</li>
                <li>CoinGecko</li>
                <li>Coinmarketcap</li>
                <li>1,000+ Holders</li>
                <li>5,000 + Community Members</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="item">
              <img src="/images/3.png" alt=""/>
              <h5>Phase 3</h5>
              <ul>
                <li>Begin Global Market Outreach</li>
                <li>Celebrity Influencer Push</li>
                <li>Twitter, Dextools, CG, Reddit, and CMC Trending</li>
                <li>FB and IG Advertising</li>
                <li>Major Partnerships</li>
                <li>Billboard Marketing</li>
                <li>Community partnerships</li>
                <li>Small CEX Listing</li>
                <li>5,000 + Holders</li>
                <li>10,000 + Community Members</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="item">
              <img src="/images/4.png" alt=""/>
              <h5>Phase 4</h5>
              <ul>
                <li>Global Presence</li>
                <li>Merchandise Store</li>
                <li>Update Roadmap</li>
                <li>NFT Platform Collaboration</li>
                <li>NFT Launch</li>
                <li>Exchange Listings</li>
                <li>25,000 + Holders</li>
                <li>50,000 + Community Members</li>
                <li>$100,000,000 Market Cap and Beyond</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Options;
