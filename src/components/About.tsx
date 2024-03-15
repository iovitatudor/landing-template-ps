import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";
import {Content} from "../content";

const About: FC = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="about">
        <Container maxWidth={"xl"}>
          <Grid container className="about-inside">
            <Grid item md={6} className="about-text">
              <h3>{Content.aboutTitle}</h3>
              <video autoPlay={true} muted loop={true} playsInline>
                <source src="/images/@VideoToGifConverterBot.mp4" type="video/mp4"></source>
              </video>
            </Grid>
            <Grid item md={6} className="about-description">
              <div>
                <p>{Content.aboutParagraph1}</p>
                <p>{Content.aboutParagraph2}</p>
                <p>{Content.aboutParagraph3}</p>
                <p>{Content.aboutParagraph4}</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default About;
