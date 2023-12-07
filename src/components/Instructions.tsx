import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Instructions: FC = () => {
  return (
    <div className="instructions" id="how-to-buy">
      <div style={{height: "2px", backgroundColor: "#FFF"}}></div>
      <Container maxWidth={"xl"}>
        <div className="heading heading-1">Create a Wallet</div>
        <div className="paragraph paragraph-1">
          Download MetaMask or your wallet of choice from the app store or Google Play store for free. Desktop users,
          download the Google Chrome extension by going to <a href="https://metaMask.io" target="_blank">MetaMask.io</a>
        </div>
        <div className="heading heading-2">GET SOME ETH</div>
        <div className="paragraph paragraph-2">
          You will need to have ETH in your wallet to swap it to $SACE. If you don’t have any ETH, you can buy directly
          on MetaMask, a centralized exchange or transfer it from another wallet.
        </div>
        <div className="heading heading-3">Go to Uniswap Decentralized Exchange (DEX)</div>
        <div className="paragraph paragraph-3">
          Connect to Uniswap or the exchange of your choice. Go to app.uniswap.org in Google Chrome or on the browser
          inside your MetaMask app. Connect your wallet. Paste the $SACE token address into the exchange, select $SACE,
          and hit that swap button. When Metamask prompts you for a wallet signature, sign.
        </div>
        <div className="heading heading-4">Swap ETH for $SACE</div>
        <div className="paragraph paragraph-2">
          Swap ETH for $Sace. Be sure to set slippage above the current tax rate for a trade to go smoothly. You may
          need to use a higher slippage during times of market volatility.
        </div>
      </Container>
    </div>
  );
}

export default Instructions;
