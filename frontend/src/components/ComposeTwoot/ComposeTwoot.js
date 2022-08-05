import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import StyledComposeTwoot from './StyleComposeTwoot';



const ComposeTwoot = (props) => {
    const { isUpdate, setIsUpdate, user, isFocus, setIsFocus } = props;
    const [wordCount, setWordCount] = useState(140);
    const [isDisabled, setIsDisabled] = useState(false);
    const textInputRef = useRef();


    const handleCount = (e) => {
        const length = e.target.value.length;
        if (length > 140) {
            alert("Exceeded the amount of characters");
            setIsDisabled(true);
            return;
        }
        isDisabled === true && setIsDisabled(false);
        setWordCount(140 - length);
    };

    const handleMouseLeave = () => {
        setIsFocus(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textInputRef.current.value === "") {
            alert("Invalid input");
            return;
        }

        const newTwoot = {
            author: user.firstName + " " + user.lastName,
            content: textInputRef.current.value,
            authorSlug:
                user.firstName.toLowerCase() + "-" + user.lastName.toLowerCase(),
        };

        axios
            .post("http://localhost:8080/twoot", { newTwoot })
            .then((res) => {
                setIsUpdate(!isUpdate);
                textInputRef.current.value = "";
                setWordCount(140);
                setTimeout(() => { }, 500);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        isFocus && textInputRef.current.focus();
    }, [isFocus]);

    return (
        <StyledComposeTwoot onSubmit={handleSubmit} id="composeTwoot">
            <section className="compose-twoot-container">
                <h2>Compose Twoot</h2>
                <textarea
                    id="twootText"
                    onChange={handleCount}
                    onBlur={handleMouseLeave}
                    ref={textInputRef}
                    type="text"
                    placeholder="What are you humming about?"
                />

                <div class="composer-button-container">
                    <div className="composer-button">
                        <button disabled={isDisabled} className={isDisabled && "disable"}>
                            Twoot
                        </button>
                    </div>
                    <span>{wordCount}</span>
                </div>
            </section>
        </StyledComposeTwoot >
    );
};









/*

function ComposeTwoot() {
    return (
        <StyledComposeTwoot className="composer">
            <h2>Compose Twoot</h2>
            <textarea class="compose-twoot" placeholder='What are you humming about?'></textarea>
            <div class="composer-button-container">
                <div className="composer-button">
                    <button type="button">Twoot</button>
                </div>
                <span class="textarea_counter">0/10</span>
            </div>
        </StyledComposeTwoot>
    );
}

*/




export default ComposeTwoot;


