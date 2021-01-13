import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const Favorite = (props) => {
    return (
        <div>
            <StarIcon style={props.style} onClick={()=>{props.onChecked(props.id)}} />
        </div>
    );
};

export default Favorite;