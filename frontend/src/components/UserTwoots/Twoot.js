import { useState } from 'react';
import { FlagFill, ArrowRepeat, HeartFill } from 'react-bootstrap-icons';

function Twoot(props){

    const [flagColor, setFlagColor] = useState('black');
    const [retwootColor, setRetwootColor] = useState('black');
    const [likeColor, setLikeColor] = useState('black');

    function newDate(){
        var dateNew = new Date().getTime() - new Date('2022-07-06').getTime();
        let days = dateNew / 1000 / 60 / 60 / 24;
    }
        

    return(
        <article>
        <div class="twoot-user">
            <img src={`https://avatars.dicebear.com/api/bottts/${props.twilson.authorSlug}.svg`} alt="User avatar" />
            <p>{props.twilson.author}</p>
            <div class="user-address">
                <p>@{props.twilson.authorSlug}</p>
            </div>
        </div>
        <div class="twoot">
            <p>{props.twilson.content}</p>
        </div>
        <div class="twoot-timeframe">
            <p>{props.twilson.dateAdded}</p>
            <div class="twoot-button">
                <FlagFill onClick={() => setFlagColor('red')} color={flagColor} size={20} />
                <ArrowRepeat onClick={() => setRetwootColor('red')} color={retwootColor} size={20} />
                <HeartFill onClick={() => setLikeColor('red')} color={likeColor} size={20} />
            </div>
        </div>
    </article>
    )
}

export default Twoot

