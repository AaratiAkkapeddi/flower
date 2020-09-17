import React, { Component } from 'react';
// import {RoseWall} from '../';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// TODO convert this class to a pure function, w/o local state, its not necessary to be a class
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roses: [],
    };
    this.renderFlowers = this.renderFlowers.bind(this);
   }

   renderFlowers(){

   	const records = [];
   	console.log(this.props)
   	var elements = document.getElementsByClassName("station");
   	while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
   	for (var i = this.props.records.length - 1; i >= 0; i--) {
   		if(!this.props.records[i].fields.Private){
   		records.push(
   		<div id={this.props.records[i].id} key={this.props.records[i].id} className="station">
   		   <div className="inner">
               <img src={this.props.records[i].fields.RoseSVG[0].url}/>
           </div>
           <h1>{this.props.records[i].fields.Dedication}</h1>
        </div>
        )}
   	}

   	for (let i=0; i<records.length; i++) { 
	   task(records[i], i, records.length); 
	} 
	  
	function task(i, x, length) { 
	  setTimeout(function() { 
	  	[].forEach.call(document.querySelectorAll('.station'), function (el) {
		  el.classList.remove('on');
		});
		console.log('mew')
	     document.getElementById(i.props.id).classList.add('on'); 
	     if(x == length - 1){
	     	setTimeout(function(){
	     		window.location.href = '/'
	     	}, 10000)
	     }
	  }, 10000 * x); 

	} 
   	console.log(records)
    
   	return <div>{records}</div>


   }

   render() {
   	// const { roses } = this.state;
    // console.log(this.props)

    return (
     
      <div>
      <div className='shine'></div>
      <div className='shine2'></div>
      <div className='shine1'></div>
       <div>{this.renderFlowers()}</div>
         <nav className='medium-text-link hidden'>

          </nav>
      </div>





    );
  }
}

export default Home
