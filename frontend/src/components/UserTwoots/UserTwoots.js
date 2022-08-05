import StyledUserTwoots from './StyledUserTwoots';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Twoot from './Twoot';


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
                        return <Twoot twilson={twilson} />

                })}
            </section>
        </StyledUserTwoots>
    );
}

export default UserTwoots;