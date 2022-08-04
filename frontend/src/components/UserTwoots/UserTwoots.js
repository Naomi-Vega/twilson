import StyledUserTwoots from './StyledUserTwoots';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlagFill, ArrowRepeat, HeartFill } from 'react-bootstrap-icons';


function UserTwoots() {
    
    const [twoots, setTwoots] = useState([]) 
 
    useEffect(() => {
        const url='http://localhost:8080/twoots';
        axios.get(url).then((response) => {
            setTwoots(response.data)
            console.log(response)
        })
    },[])

    return (
        <StyledUserTwoots className="user-selector">
            <section>
                {twoots.map((twilson) => {
                        return(
                    <article>
                        <div class="twoot-user">
                            <img src={`https://avatars.dicebear.com/api/bottts/${twilson.authorSlug}.svg`} alt="User avatar" />
                            <p>{twilson.author}</p>
                            <div class="user-address">
                                <p>@{twilson.authorSlug}</p>
                            </div>
                        </div>
                        <div class="twoot">
                            <p>{twilson.content}</p>
                        </div>
                        <div class="twoot-timeframe">
                            <p>{twilson.dateAdded}</p>
                            <div class="twoot-button">
                                <FlagFill color="black" size={20} />
                                <ArrowRepeat color="black" size={20} />
                                <HeartFill color="black" size={20} />
                            </div>
                        </div>
                    </article>
                    )
                })}
            </section>
        </StyledUserTwoots>
    );
}

export default UserTwoots;