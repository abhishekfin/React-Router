import React from 'react';
import propTypes from 'prop-types';

const PropTypesChild =(props)=>{
    return(
         <div>
           <div>{props.name}</div>
           <div>{props.lastName}</div>
           <div>{props.age}</div>
        </div>
    )
}

// class PropTypesChild extends React.Component{
//     render(){
//       return(
//           <div>
//              <div>{this.props.name}</div>
//              <div>{this.props.lastName}</div>
//              <div>{this.props.age}</div>
//           </div>
//       )
//   }
//   }

PropTypesChild.propTypes ={
   // name:propTypes.string,
    name:propTypes.string,
    age:propTypes.number,
    name:propTypes.oneOfType([
        propTypes.string,
        propTypes.number 
   ]),
   mother:function(props,propName,componnentName){
       if(props[propName] !=="Martha"){
         return new Error(`The Name ${props[propName]} is incorrect should be Martha`)
       }
   }
}
export default PropTypesChild;