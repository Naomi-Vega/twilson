import { useState } from 'react';
import { FlagFill, ArrowRepeat, HeartFill } from 'react-bootstrap-icons';

function Twoot(props){

    const [flagColor, setFlagColor] = useState('black');
    const [retwootColor, setRetwootColor] = useState('black');
    const [likeColor, setLikeColor] = useState('black');

    function daysAgo(dateAdded){
        const timeDiff = new Date().getTime() - new Date(dateAdded).getTime();
        const days = Math.round(timeDiff / 1000 / 60 / 60 / 24);
        if (days === 0) {
            return 'Posted today';
        }
        return `Posted ${days} day${days > 1 ? 's' : ''} ago`
    }

    return(
        <article>
        <div className="twoot-user">
            <img src={`https://avatars.dicebear.com/api/bottts/${props.twilson.authorSlug}.svg`} alt="User avatar" />
            <p>{props.twilson.author}</p>
            <div className="user-address">
                <p>@{props.twilson.authorSlug}</p>
            </div>
        </div>
        <div className="twoot">
            <p>{props.twilson.content}</p>
        </div>
        <div className="twoot-timeframe">
            <p>{daysAgo(props.twilson.dateAdded)}</p>
            <div className="twoot-button">
                <FlagFill onClick={() => setFlagColor('red')} color={flagColor} size={20} />
                <ArrowRepeat onClick={() => setRetwootColor('red')} color={retwootColor} size={20} />
                <HeartFill onClick={() => setLikeColor('red')} color={likeColor} size={20} />
            </div>
        </div>
    </article>
    )
}

export default Twoot

