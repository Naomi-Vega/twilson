import React from 'react';
import StyledApp from './StyledApp';

function App() {
  return (
    <StyledApp>
      <header>
        <h2>Twootr</h2>
        <p>Write a new Twoot</p>
      </header>

      <section className="user-selector">
        <div>
          <div>
            <img src="logo192.png" alt="User avatar" />
          </div>
          <h2>John Doe</h2>
          <h3>@john-doe</h3>
        </div>
      </section>
      
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
