import React from 'react';
import StyledApp from './StyledApp';
import UserSelector from '../UserSelector/UserSelector';
import UserTwoots from '../UserTwoots/UserTwoots';
import ComposeTwoot from '../ComposeTwoot/ComposeTwoot';

function App() {
  return (
    <StyledApp>
      <header>
        <h2>Twootr</h2>
        <p>Write a new Twoot</p>
      </header>

      <UserSelector />
      
      <ComposeTwoot />

     <UserTwoots />
     
    </StyledApp>
  );
}

export default App;
