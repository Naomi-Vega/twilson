import React from 'react';
import StyledApp from './StyledApp';
import UserSelector from '../UserSelector/UserSelector';
import UserTwoots from '../UserTwoots/UserTwoots';

function App() {
  return (
    <StyledApp>
      <header>
        <h2>Twootr</h2>
        <p>Write a new Twoot</p>
      </header>

      <UserSelector />
      
      <section className="composer">
        <h2>Compose Twoot</h2>
        <textarea>What are humming about?</textarea>
        <div class="composer-button-container">
          <div className="composer-button">
            <button type="button">Twoot</button>
          </div>
          <span>Counter</span>
        </div>
      </section>

     <UserTwoots />
     
    </StyledApp>
  );
}

export default App;
