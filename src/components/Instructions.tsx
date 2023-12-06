import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Instructions: FC = () => {
  return (
    <div className="instructions" id="how-to-buy">
      <div style={{height: "2px", backgroundColor: "#FFF"}}></div>
      <Container maxWidth={"xl"}>
        <div className="heading heading-1">CREATE A WALLET</div>
        <div className="paragraph paragraph-1">
          Download metamask or your wallet of choice from the app store or google play
          store forfree. desktop users, download the google chrome extension by going to metamask.io.
        </div>
        <div className="heading heading-2">GO TO UNISWAP</div>
        <div className="paragraph paragraph-2">
          Have ETH in your wallet to switch to PEPSACE If you don’t have any ETH, you can buy directlyon metamask,
          transfer
          from another wallet, or buy on another exchange and sendit to your wallet.
        </div>
        <div className="heading heading-3">GET SOME ETH</div>
        <div className="paragraph paragraph-3">
          Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser insideyour Metamask app. Connect
          your wallet. Paste the PEPSACE token address into Uniswap, select PEPSACE, and confirm. When Metamask prompts
          you
          for a wallet signature, sign.
        </div>
        <div className="heading heading-4">SWAP FOR $Sace</div>
        <div className="paragraph paragraph-2">
          Swap ETH for $Sace . In order to ensure a more efficient distribution of tokens among token holders and
          security and stability of the
          trading environment, the Swaps are subject to limits and fees. For more info, please refer to the Lightpaper.
        </div>
      </Container>
    </div>
  );
}

export default Instructions;
