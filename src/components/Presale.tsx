import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Presale: FC = () => {
  return (
    <div className="presale" id="presale">
      <Container maxWidth={"xl"}>
        <h3>Crypto’s First Tokenless Presale</h3>
        <Grid container className="info">
          <Grid item xs={12}>
            <p>The <i>$SACE</i> token's presale ensures initial liquidity, funds marketing, and establishes a foundation
              for
              long-term growth. Unlike traditional pre-sales, participants gain special trading privileges for the first
              100 blocks, promoting competitive advantages and protecting against market manipulation. This approach
              supports early project stages, creates a fair market, and includes VIP and Public (Open to All) Presale
              components for a successful token launch and stability.</p>
          </Grid>
          {/*<Grid md={6}>*/}
          {/*  <h5>VIPs Presale</h5>*/}
          {/*  <p>To secure a place in this exclusive event, the VIPs can purchase one slot per verified wallet</p>*/}
          {/*</Grid>*/}
          {/*<Grid md={6}>*/}
          {/*  <h5>Public Presale</h5>*/}
          {/*  <p>The presale round will operate on a first-come, first-served*/}
          {/*    basis, ensuring that once all the slots are sold, the sale*/}
          {/*    concludes.</p>*/}
          {/*</Grid>*/}
        </Grid>

        <div className="details">
          <h5>Important details:</h5>
          <p>Public Presale</p>
          <ul>
            <li>Participants in the Public Presale will enjoy a 0% buy tax and a 25% sell tax within the first 100
              blocks of trading.
            </li>
            <li>Public Presale is open to everyone.</li>
            <li>The cost of a slot in the Public Presale is set at 0.05 ETH.</li>
          </ul>
          <p>VIP Presale</p>
          <ul>
            <li>VIPs get 0% commission fees on both buying and selling within the first 100 trading blocks of trading.
            </li>
            <li>To secure a place in this exclusive event, the VIPs can purchase one slot per verified wallet.</li>
            <li>Limited to 40 slots.</li>
            <li>The cost of a slot in the VIP Presale is set at 0.1 ETH.</li>
          </ul>
          <br/> <br/>
          <div><small>*At launch, trading will commence with a substantial 25% buy tax and a 69% sell tax to the all
            participants, excluding those that purchased slots on Public and VIP presales. These percentages will
            gradually decrease, reaching a final 2/5 tax. Once the market cap reaches 5 million, the contract logic will
            automatically set the final tax to a complete community 0/0 tax token.</small></div>
          {/*<div><small>* Fees for All (after the first 100 blocks): 1.9% Buy & 4.9% Sell Tax</small></div>*/}
        </div>
        <div className="bottom-area">
          <a href="https://vip.pepsace.com/" target="_blank"
             className="dark-btn">Buy VIP Slot</a>
        </div>
      </Container>
    </div>
  );
}

export default Presale;
