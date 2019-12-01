import React, { Component } from 'react';
import MyButton from '../utils/Button'
import Zoom from 'react-reveal/Zoom'
class Pricing extends Component {

  state = {
    price: [100, 200, 500],
    position: ['Balcony', 'Center' , 'Star'],
    desc:[
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
      'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    linkto:['https://github.com/Cyber-Star-1','https://github.com/Cyber-Star-1','https://github.com/Cyber-Star-1'],
    delay: [500, 50 , 1000] 
  }

  showBoxes = ()=>(
    this.state.price.map((box,i)=>(
      <Zoom delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${box}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton bck="#ffa800" color="#fff" link={this.state.linkto[i]} text="Purchase tickets"/>
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;