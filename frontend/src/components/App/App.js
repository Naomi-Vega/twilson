import React, { useState, useRef } from 'react';
import StyledApp from './StyledApp';
import UserSelector from '../UserSelector/UserSelector';
import UserTwoots from '../UserTwoots/UserTwoots';
import ComposeTwoot from '../ComposeTwoot/ComposeTwoot';

function App() {
  const defaultValue = {
    first: "John",
    last: "Doe",
  };

  const [userName, setUserName] = useState(defaultValue);
  const [dataIsOutdated, setDataIsOutdated] = useState(true);

  const composerRef = useRef();

  const handleAnchorClick = () => {
    if (composerRef.current) {
      composerRef.current.focus();
    }
  }

  return (
    <StyledApp>
      <header>
        <h2>Twootr</h2>
        <p className="twoot-anchor" onClick={handleAnchorClick}>Write a new Twoot</p>
      </header>

      <UserSelector userName={userName} setUserName={setUserName} />
      
      <ComposeTwoot userName={userName} setDataIsOutdated={setDataIsOutdated} composerRef={composerRef} />

      <UserTwoots dataIsOutdated={dataIsOutdated} setDataIsOutdated={setDataIsOutdated} />
    </StyledApp>
  );
}

export default App;
