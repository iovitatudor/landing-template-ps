import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const About: FC = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="about">
        <Container maxWidth={"xl"}>
          <Grid container className="about-inside">
            <Grid md={6} className="about-text">
              <h3>About Us</h3>
              <p>The middle of 2023 marked the beginning of the MemeCoin Summer era, epitomized by the emergence of the
                PEPE token and many Other meme coins. </p>
            </Grid>
            <Grid md={6} className="about-description">
              <div>
                <p>These assets quickly gained popularity, creating significant trading volumes on platforms like
                  Uniswap.
                  However, with success came the shadows of fraudulent schemes and dishonest pre-sales, undermining
                  token
                  economies And investor trust. </p>
                <p>It was at this moment that PEPSACE token stepped onto the scene — A project distinguished by its
                  transparency and fairness. Our unique pre-sale mechanism not only prevents the potential dumping of
                  tokens on the market, ensuring their stability but also provides pre-sale participants with unique
                  advantages, Ensuring a fair and equal opportunity for all. </p>
                <p>In the following chapters, we will delve deeper into how this works And why pro token deserves your
                  attention.</p>
              </div>
            </Grid>
            <Grid xs={12} style={{display: "flex", justifyContent: 'center'}}>
              <video autoPlay={true} muted loop={true} playsInline>
                <source src="/images/@VideoToGifConverterBot.mp4" type="video/mp4"></source>
              </video>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default About;
