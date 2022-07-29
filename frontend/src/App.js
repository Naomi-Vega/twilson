import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <header>
        <h2>Twootr</h2>
        <p>Write a new Twoot</p>
      </header>

      <section>
        <div>
          <div>
            <div>
              <img></img>
            </div>
            <h2>John Doe</h2>
            <h3>@john-doe</h3>
          </div>
        </div>
      </section>
      
      <section>
        <h2> Compose Twoot </h2>
        <textarea> What are humming about? </textarea>
        <button> Twoot </button>
        <span> Counter </span>
      </section>

      <section>
        <article>
          <div>
            <img></img>
            <p>Henry David Thoreau</p>
            <p>@henry-david-thoreau</p>
          </div>
          <div>
            <p>Many men go fishing....</p>
          </div>
          <div>
            <p>twooted 22 hours ago</p>
            <div>
              <button>Flag button</button>
              <button>Share Button</button>
              <button>Like Button</button>
            </div>
          </div>
        </article>
      </section>


    </>
  );
}

export default App;
