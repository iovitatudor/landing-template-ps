import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Footer: FC = () => {
  return (
    <div className="footer">
      <Container maxWidth={"xl"}>
        <p><i>$SACE</i> Meme Coin © {(new Date().getFullYear())} All Rights Reserved</p>
      </Container>
    </div>
  );
}

export default Footer;
