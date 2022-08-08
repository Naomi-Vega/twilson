import StyledUserTwoots from './StyledUserTwoots';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Twoot from './Twoot';


function UserTwoots(props) {
    const { dataIsOutdated, setDataIsOutdated } = props;
    
    const [twoots, setTwoots] = useState([]) 
 
    useEffect(() => {
        if (dataIsOutdated) {
            const url='/twoots';
            axios.get(url).then((response) => {
                setTwoots(response.data);
            })
            setDataIsOutdated(false);
        }
    }, [dataIsOutdated, setDataIsOutdated])

    return (
        <StyledUserTwoots className="user-selector">
            <section>
                {twoots.map((twilson) => {
                    return <Twoot twilson={twilson} key={twilson._id} />
                })}
            </section>
        </StyledUserTwoots>
    );
}

export default UserTwoots;