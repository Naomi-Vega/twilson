import React from 'react';
import StyledApp from './StyledApp';
import UserSelector from '../UserSelector/UserSelector';
import ComposeTwoot from '../ComposeTwoot/ComposeTwoot'

function App() {
  return (
    <StyledApp>
      <header>
        <h2>Twootr</h2>
        <p>Write a new Twoot</p>
      </header>

      <UserSelector />
      
      <ComposeTwoot />

      <section>
        <article>
          <div class="twoot-user">
            <img src="logo192.png" alt="User avatar"></img>
            <p>Henry David Thoreau</p>
            <div class="user-address">
              <p>@henry-david-thoreau</p>
            </div>
          </div>
          <div class="twoot">
            <p>Many men go fishing....</p>
          </div>
          <div class="twoot-timeframe">
            <p>twooted 22 hours ago</p>
            <div class="twoot-button">
              <button>Flag button</button>
              <button>Share Button</button>
              <button>Like Button</button>
            </div>
          </div>
        </article>
      </section>
    </StyledApp>
  );
}

export default App;
