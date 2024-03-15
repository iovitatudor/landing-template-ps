import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";
import {Content} from "../content";

const Footer: FC = () => {
  return (
    <div className="footer">
      <Container maxWidth={"xl"}>
        <p>{Content.copyRight} © {(new Date().getFullYear())} All Rights Reserved</p>
      </Container>
    </div>
  );
}

export default Footer;
