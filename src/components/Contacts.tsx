import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <Container maxWidth={"xl"}>
        <h4>Contact</h4>
        <div>
          <a href="https://t.me/IntregraLaunch" target="_blank" className="contacts-link">
            <img src="/images/telegram-link.svg" alt=""/>
          </a>
          {/*<a href="#" className="contacts-link">*/}
          {/*  <img src="/images/twitte-link.svg" alt=""/>*/}
          {/*</a>*/}
        </div>
      </Container>
    </div>
  );
}

export default Contacts;
