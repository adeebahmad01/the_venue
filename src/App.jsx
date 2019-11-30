import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo'
import './resources/styles.css'
function App() {
  return (
    <div className="App" style={{backgroundColor: `green`}}>
      <Header/>
      <Featured/>
      <VenueInfo/>
    </div>
  );
}
export default App;