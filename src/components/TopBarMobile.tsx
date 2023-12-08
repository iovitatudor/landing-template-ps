import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'left';

const TopBarMobile = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({...state, [anchor]: open});
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{width: 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="menu-drawer"
    >

      <div className="logo">
        <a href="#">
          <img src="/images/logo-new.png" alt=""/>
        </a>
      </div>
      <div className="menu">
        <ul>
          <li><a className="effect-underline" href="#">Home</a></li>
          <li><a className="effect-underline" href="#about">About</a></li>
          <li><a className="effect-underline" href="#how-to-buy">How to Buy</a></li>
          <li><a className="effect-underline" href="#tokenomics">Tokenomics</a></li>
          <li><a className="effect-underline" href="#presale">Presale</a></li>
          <li><a className="effect-underline" href="#roadmap">Roadmap</a></li>
        </ul>
      </div>

      <div className="buttons">
        <a href="https://drive.proton.me/urls/ABBBQHJPTM#JRZKa3Z1LhQL" target="_blank"
           className="light-btn">LightPaper</a>
        <a href="https://vip.pepsace.com/" target="_blank" className="dark-btn">Buy <i>$SACE</i></a>
      </div>
    </Box>
  );

  return (
    <div className="top-bar-mobile">
      <div className="burgher-area">
        <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon className="burgher-menu"/>
        </Button>
        <Drawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </div>
      <a href="#">
        <img src="/images/logo-new.png" alt=""/>
      </a>
    </div>
  );
}

export default TopBarMobile;