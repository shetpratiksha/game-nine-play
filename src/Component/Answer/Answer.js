import React from 'react';
import ReactDom from 'react-dom';

const Answer = (props) =>{
    return(
        <div className="col-5">
            {props.selectedNumbers.map((number,i)=>
                <span key={i} onClick={()=>{props.unselectNumber(number)}}>{number}</span>
            )}
        </div>
    )
}

export default Answer;