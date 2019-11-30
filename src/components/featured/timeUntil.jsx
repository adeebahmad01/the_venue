import React, { Component } from 'react'

class TimeUntil extends Component {

  state = {
    deadline: `Dec, 16, 2020`,
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    if(time< 0){
      console.error('Date has passed better luck next time')
    }
    else{
      const seconds = Math.floor((time/1000)%60)
      const minutes = Math.floor((time/1000/60)%60)
      const hours = Math.floor((time/(1000*60*60))%24)
      const days = Math.floor((time/(1000*60*60*24)))
      this.setState({
        days,
        hours: hours > 9? hours: `0`+hours ,
        minutes: minutes > 9? minutes: `0`+minutes ,
        seconds: seconds > 9? seconds: `0`+seconds 
      })
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.getTimeUntil(this.state.deadline)
    }, 1000);
  }
  render () {


    return (
      <div className="countdown_wrapper">
        <div className="countdown_top">
          Event starts in
        </div>
        <div className="countdown_bottom">
          <div className="countdown_item">
          <div className="countdown_time">{this.state.days}</div>
            <div className="countdown_tag">Days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{this.state.hours}</div>
            <div className="countdown_tag">Hours</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{this.state.minutes}</div>
            <div className="countdown_tag">Mins</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{this.state.seconds}</div>
            <div className="countdown_tag">Secs</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeUntil