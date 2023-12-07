import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Footer: FC = () => {
  return (
    <div className="footer">
      <Container maxWidth={"xl"}>
        <p>$Sace Meme Coin © {(new Date().getFullYear())} All Rights Reserved</p>
      </Container>
    </div>
  );
}

export default Footer;
