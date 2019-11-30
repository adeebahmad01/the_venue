import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const SideDrawer = (props) => {
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={()=>{props.onClose(false)}}>
        <List component="nav" >
          <ListItem style={{width: `250px`, height: `60px`}} button onClick={()=> console.log('Event Starts in')}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Event Starts in
          </ListItem>
          <ListItem style={{width: `250px`, height: `60px`}} button onClick={()=> console.log('Venue Info')}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Venue Info
          </ListItem>
          <ListItem style={{width: `250px`, height: `60px`}} button onClick={()=> console.log('Highlights')}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Highlights
          </ListItem>
          <ListItem style={{width: `250px`, height: `60px`}} button onClick={()=> console.log('Pricing')}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Pricing
          </ListItem>
          <ListItem style={{width: `250px`, height: `60px`}} button onClick={()=> console.log('Location')}>
            <span style={{width: `40px`, height: `10px`}}></span>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;