import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Footer: FC = () => {
  return (
    <div className="footer">
      <Container maxWidth={"xl"}>
        <p>$PERO Meme Coin © 2023 All Rights Reserved</p>
      </Container>
    </div>
  );
}

export default Footer;
