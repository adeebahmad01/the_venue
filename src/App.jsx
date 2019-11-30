import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo'
import Highlights from './components/highlights'
import './resources/styles.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Featured/>
      <VenueInfo/>
      <Highlights/>
    </div>
  );
}
export default App;