import React from 'react';
import ReactDom from 'react-dom';
import './Number.css';
const Numbers = (props) =>{
    // const arrayOfNumbers = [1,2,3,4,5,6,7,8,9];
    const numberClassName = (number) =>{
       // alert(props.selectedNumbers.indexOf(number));
        if(props.usedNumbers.indexOf(number) >= 0){
            return 'used';
        }
        if(props.selectedNumbers.indexOf(number) >= 0){
            return 'selected';
        }
       
    }
    return(
        <div className="card text-center">
            <div>
                {
                    Numbers.list.map((number,i) =>
                        <span key={i} className={numberClassName(number)}
                        onClick={() =>{props.selectNumber(number)}}
                        >{number}</span>
                    )   
                }
            </div>
        </div>
    )
}

Numbers.list =  [1,2,3,4,5,6,7,8,9];

export default Numbers;