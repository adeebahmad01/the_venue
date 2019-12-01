import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll'
const SideDrawer = (props) => {
  const scrollToElement =(el)=>{
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={()=>{props.onClose(false)}}>
        <List component="nav" >
          <ListItem style={{width: `250px`,height: `60px`}} button onClick={()=> {scrollToElement('feature')}}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Event Starts in
          </ListItem>
          <ListItem style={{width: `250px`,height: `60px`}} button onClick={()=> {scrollToElement('info')}}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Venue Info
          </ListItem>
          <ListItem style={{width: `250px`,height: `60px`}} button onClick={()=> {scrollToElement('highlight')}}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Highlights
          </ListItem>
          <ListItem style={{width: `250px`,height: `60px`}} button onClick={()=> {scrollToElement('pricing')}}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Pricing
          </ListItem>
          <ListItem style={{width: `250px`,height: `60px`}} button onClick={()=> {scrollToElement('location')}}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;