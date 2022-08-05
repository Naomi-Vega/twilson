import axios from "axios";
import React, { useEffect, useState } from "react";
import StyledComposeTwoot from './StyleComposeTwoot';

const ComposeTwoot = () => {
    const [charsCount, setCharsCount] = useState(140);
    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const user = {
        firstName: 'John',
        lastName: 'Doe',
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTwoot = {
            author: user.firstName + " " + user.lastName,
            content: text,
            authorSlug: user.firstName.toLowerCase() + "-" + user.lastName.toLowerCase(),
            dateAdded: new Date().toISOString(),
        };

        axios
            .post("http://localhost:8080/twoot", { newTwoot })
            .then((res) => {
                setCharsCount(140);
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
                    />

                    <div class="composer-button-container">
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
