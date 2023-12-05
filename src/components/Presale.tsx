import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Presale: FC = () => {
  return (
    <div className="presale" id="presale">
      <Container maxWidth={"xl"}>
        <h3>PRESALE</h3>
        <Grid container className="info">
          <Grid md={6}>
            <h5>VIPs Presale</h5>
            <p>To secure a place in this exclusive event, the VIPs can purchase one slot per verified wallet</p>
          </Grid>
          <Grid md={6}>
            <h5>Public Presale</h5>
            <p>The presale round will operate on a first-come, first-served
              basis, ensuring that once all the slots are sold, the sale
              concludes.</p>
          </Grid>
        </Grid>

        <div className="details">
          <h5>Important details:</h5>
          <ul>
            <li>The cost of a slot in VIPs Presale is set at 0.1 ETH</li>
            <li>VIPs can purchase only one slot per verified wallet</li>
            <li>VIPs get 0% commission fees on both buying and selling within the first 100 trading blocks</li>
            <li>Public Presale is open to everyone with two hundred and fifty slots available, each costing 0.05 ETH</li>
            <li>Participants in Public Presale will enjoy a 0% commission on
              purchases and a 25% commission on sales for the first 100
              blocks of trading
            </li>
            <li>For all participants excluding Public Presale and VIPs Presale there are commissions for the first one
              hundred trading blocks of 25%
              for buying and 69% for selling the token
            </li>
            <li>For more info, please refer to the Lightpaper.</li>
          </ul>
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
