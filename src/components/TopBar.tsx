import React, {FC} from 'react';
import {Box, Container, Grid} from "@mui/material";

const TopBar: FC = () => {
  return (
    <div className="top-bar">
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={2} className="logo">
            <a href="#">
              <img src="/images/logo.svg" alt=""/>
            </a>
          </Grid>
          <Grid item xs={7} className="menu">
            <ul>
              <li><a className="effect-underline" href="#">Home</a></li>
              <li><a className="effect-underline" href="#">About</a></li>
              <li><a className="effect-underline" href="#">How to Buy</a></li>
              <li><a className="effect-underline" href="#">Tokenomics</a></li>
              <li><a className="effect-underline" href="#">Presale</a></li>
              <li><a className="effect-underline" href="#">Roadmap</a></li>
            </ul>
          </Grid>
          <Grid item xs={3} className="buttons">
            <a href="#" className="light-btn">LightPaper</a>
            <a href="#" className="dark-btn">Buy a Pero</a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TopBar;
