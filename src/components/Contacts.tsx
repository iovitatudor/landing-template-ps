import React, {FC} from 'react';
import {Container} from "@mui/material";
import {Content} from "../content";

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <Container maxWidth={"xl"}>
        <h4>Contact</h4>
        <div>
          <a href={Content.telegramLink} target="_blank" className="contacts-link">
            <img src="/images/telegram-link.svg" alt=""/>
          </a>
          <a href={Content.twitterLink} target="_blank" className="contacts-link">
            <img src="/images/twitte-link.svg" alt=""/>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Contacts;
