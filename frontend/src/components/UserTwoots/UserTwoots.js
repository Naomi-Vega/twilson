import StyledUserTwoots from './StyledUserTwoots';
import axios from "axios";
import React from "react";




function UserTwoots() {
    return (
        <StyledUserTwoots className="user-selector">
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
        </StyledUserTwoots>
    );
}

export default UserTwoots;