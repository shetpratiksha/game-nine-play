import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';
import Answer from '../Answer/Answer';
import Numbers from '../Numbers/Number';
import { access } from 'fs';
import DoneFrame from '../DoneFrame/DoneFrame';

class Game extends React.Component{
    static randomNumber = () =>
        1 + Math.floor(Math.random() * 9);
    
    state = {
        selectedNumbers: [],
        randonNumberOfStars : Game.randomNumber(),
        answerIsCorrect: null,
        usedNumbers:[],
        redraws: 5,
        doneStatus: null,
    }

    selectNumber = (clickedNumber) =>{
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){ return; }
        this.setState(prevState => ({
            selectedNumbers : prevState.selectedNumbers.concat(clickedNumber),
            answerIsCorrect:null
        }))
    }
    unselectNumber = (clickedNumber) =>{
        this.setState(prevState =>({
            selectedNumbers:prevState.selectedNumbers.filter(number => number !== clickedNumber),
            answerIsCorrect:null
        }))
    }
    checkAnswer = () =>{
        this.setState(prevState =>({
            answerIsCorrect:prevState.randonNumberOfStars === 
            prevState.selectedNumbers.reduce((acc,n) => acc + n , 0)
        }))
    }
    acceptAnswer = () =>{
        alert(this.state.redraws+' '+this.state.usedNumbers.length);
        if(this.state.usedNumbers.length >= 8){
            alert(' mhere')
            this.state.doneStatus = 'You Won!!!'
        }
        if((this.state.usedNumbers.length < 8) && (this.state.redraws <= 0)){
            this.state.doneStatus = 'You Loose!!!'

        }
      
        this.setState(prevState =>({
            usedNumbers:prevState.usedNumbers.concat(prevState.selectedNumbers),
            answerIsCorrect: null,
            selectedNumbers: [],
            randonNumberOfStars:Game.randomNumber(),
        }))
    }
    redraw = () =>{
        if(this.state.redraws === 0){ 
            return;
        }
        if((this.state.usedNumbers.length < 8) && (this.state.redraws <= 0)){
            this.state.doneStatus = 'You Loose!!!'
        }
        this.setState(prevState =>({
            randonNumberOfStars:Game.randomNumber(),
            selectedNumbers: [],
            answerIsCorrect: null,
            redraws: prevState.redraws - 1
        }))
    }
    render(){
        const {randonNumberOfStars, selectedNumbers, answerIsCorrect, usedNumbers, redraws, doneStatus } = this.state;
        return(
            <div className="container"
            style={{display:'block',width:'50%',margin:'0 auto',textAlign:'center',
            position:'relative',top:'30px'}}>
                <h3>Play Nine</h3>
                <hr/>
                <div className="row">
                    <Stars numberOfStars ={randonNumberOfStars}/>
                    <Button 
                        selectedNumbers={selectedNumbers} 
                        checkAnswer = {this.checkAnswer}
                        answerIsCorrect = {answerIsCorrect}
                        acceptAnswer = {this.acceptAnswer}
                        redraw = {this.redraw}
                        redraws = {redraws}
                        
                    />
                    <Answer 
                    unselectNumber={this.unselectNumber}
                    selectedNumbers={selectedNumbers}/>
                </div>
                <br/> 
                { 
                    doneStatus ? 
                    <DoneFrame  doneStatus ={doneStatus}/> :
                    <Numbers 
                    selectNumber={this.selectNumber}
                    selectedNumbers={selectedNumbers}
                    usedNumbers={usedNumbers}/>
                }
                
                
            </div>
        )
    }
}

export default Game;