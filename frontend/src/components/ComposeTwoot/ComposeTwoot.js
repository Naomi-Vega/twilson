import StyledComposeTwoot from './StyleComposeTwoot';

function ComposeTwoot() {
    return (
        <StyledComposeTwoot className="composer">
            <h2>Compose Twoot</h2>
            <textarea class="compose-twoot" placeholder='What are you humming about?'></textarea>
            <div class="composer-button-container">
                <div className="composer-button">
                    <button type="button">Twoot</button>
                </div>
                <span class="textarea_counter">0/140</span>
            </div>
        </StyledComposeTwoot>
    );    
}

export default ComposeTwoot;
