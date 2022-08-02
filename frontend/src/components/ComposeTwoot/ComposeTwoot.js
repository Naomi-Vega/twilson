import StyledComposeTwoot from './StyleComposeTwoot';

function ComposeTwoot() {
    return (
        <StyledComposeTwoot className="composer">
            <h2>Compose Twoot</h2>
            <textarea>What are humming about?</textarea>
            <div class="composer-button-container">
                <div className="composer-button">
                    <button type="button">Twoot</button>
                </div>
                <span>Counter</span>
            </div>
        </StyledComposeTwoot>
    );
}

export default ComposeTwoot;