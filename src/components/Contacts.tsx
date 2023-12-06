import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <Container maxWidth={"xl"}>
        <h4>Contact</h4>
        <div>
          <a href="https://t.me/SaceCoin" target="_blank" className="contacts-link">
            <img src="/images/telegram-link.svg" alt=""/>
          </a>
          <a href="https://www.instagram.com/SaceCoin" target="_blank" className="contacts-link">
            <img src="/images/Insta-icon-sace.png" alt=""/>
          </a>
          <a href="https://twitter.com/SaceCoin" target="_blank" className="contacts-link">
            <img src="/images/twitte-link.svg" alt=""/>
          </a>
          <a href="mailto:admin@pepsace.com" target="_blank" className="contacts-link">
            <img src="/images/icon-mail-white.png" alt=""/>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Contacts;
