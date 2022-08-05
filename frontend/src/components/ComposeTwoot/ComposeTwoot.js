import axios from "axios";
import React, { useEffect, useState } from "react";
import StyledComposeTwoot from './StyleComposeTwoot';

const ComposeTwoot = (props) => {
    const { composerRef } = props;
    const { userName, setDataIsOutdated } = props;
    const [charsCount, setCharsCount] = useState(140);
    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTwoot = {
            author: userName.first + " " + userName.last,
            content: text,
            authorSlug: userName.first.toLowerCase() + "-" + userName.last.toLowerCase(),
            dateAdded: new Date().toISOString(),
        };

        axios
            .post("http://localhost:8080/twoot", { newTwoot })
            .then((res) => {
                setCharsCount(140);
                setText('');
                setDataIsOutdated(true);
            })
    };

    useEffect(() => {
        const currentCount = 140 - text.length;
        setCharsCount(currentCount);
        setIsDisabled(currentCount < 0);
    }, [text])

    return (
        <StyledComposeTwoot id="composeTwoot">
            <section className="compose-twoot-container">
                <form onSubmit={handleSubmit}>
                    <h2>Compose Twoot</h2>
                    <textarea
                        id="twootText"
                        onChange={handleChange}
                        type="text"
                        placeholder="What are you humming about?"
                        value={text}
                        ref={composerRef}
                    />

                    <div className="composer-button-container">
                        <div className="composer-button">
                            <button disabled={isDisabled} className={(isDisabled || !text) ? 'disabled' : ''}>
                                Twoot
                            </button>
                        </div>
                        <span style={{ color: isDisabled ? 'red' : 'unset' }}>{charsCount}</span>
                    </div>
                </form>
            </section>
        </StyledComposeTwoot >
    );
};

export default ComposeTwoot;
