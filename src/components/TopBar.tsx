import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";
import {Content} from "../content";

const TopBar: FC = () => {
  return (
    <div className="top-bar">
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={1} className="logo">
            <a href="#">
              <img src="/images/logo-new.png" alt=""/>
            </a>
          </Grid>
          <Grid item xs={7} className="menu">
            <ul>
              <li><a className="effect-underline" href="#">{Content.home}</a></li>
              <li><a className="effect-underline" href="#about">{Content.about}</a></li>
              <li><a className="effect-underline" href="#tokenomics">{Content.tokenomics}</a></li>
            </ul>
          </Grid>
          <Grid item xs={4} className="buttons">
            <a href={Content.topButtonLink} target="_blank" className="dark-btn"><i>{Content.topButtonText}</i></a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TopBar;
