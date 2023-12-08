import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const About: FC = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="about">
        <Container maxWidth={"xl"}>
          <Grid container className="about-inside">
            <Grid item md={6} className="about-text">
              <h3>Meet the Captain: The $SACE Story</h3>
              {/*<p>Let me lay it down for ya 'bout the baddest rhyme-spittin' playa to ever bless the mic in Pepeland –*/}
              {/*  the one and only $SACE, AKA the Captain. This dude's flow is so damn fly, it's like a sonic storm*/}
              {/*  hittin' ya, leavin' you breathless, tryna catch that lyrical breeze, ya feel me? </p>*/}
              <video autoPlay={true} muted loop={true} playsInline>
                <source src="/images/@VideoToGifConverterBot.mp4" type="video/mp4"></source>
              </video>
            </Grid>
            <Grid item md={6} className="about-description">
              <div>
                <p>Let me lay it down for ya 'bout the baddest rhyme-spittin' playa to ever bless the mic in Pepeland –
                  the one and only $SACE, AKA the Captain. This dude's flow is so damn fly, it's like a sonic storm
                  hittin' ya, leavin' you breathless, tryna catch that lyrical breeze, ya feel me? </p>
                <p>Now peep this, y'all. We talkin' 'bout the $Sace Token, a crypto project 'bout to blaze up the
                  blockchain. It ain't just about stackin' that paper; it's a whole movement, committed to elevatin' the
                  hip-hop culture to levels unseen. The Captain ain't just droppin' bars; he's in the kitchen cookin' up
                  a whole new game.
                </p>
                <p>No doubt, straight to the money, that's the anthem. The $SACE token ain't just another crypto; it's a
                  whole vibe, a movement, a symbol of that hustle. While the blockchain heating up, $Sace laying down
                  the blueprint for a revolution, blending hip-hop and crypto in a way that's never been laid down
                  before.
                </p>
                <p>Strap in, fam, 'cause $Sace rollin' with the whole crew on a journey – straight into this bull run,
                  where the streets collide with the blockchain, and the Captain's takin' the lead. It's more than just
                  makin' moves; it's about igniting the game and leaving a legacy that'll resonate through time. The
                  $Sace Token ain't just a project – it's a vibe, a culture, and the Captain's at the wheel, steering it
                  to the highest heights. Step into tomorrow – We gonna spark one on the moon with $SACE.</p>
              </div>
            </Grid>
            {/*<Grid xs={12} style={{display: "flex", justifyContent: 'center'}}>*/}
            {/*  <video autoPlay={true} muted loop={true} playsInline>*/}
            {/*    <source src="/images/@VideoToGifConverterBot.mp4" type="video/mp4"></source>*/}
            {/*  </video>*/}
            {/*</Grid>*/}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default About;
