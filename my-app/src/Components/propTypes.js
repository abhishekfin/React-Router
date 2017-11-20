import React,{Component} from 'react';
import PropTypesChild from './PropTypesChild';

class PropTypes extends Component{

    constructor(props){
        super(props)
       this.state ={
           name:"abhishek",
           lastName:"yadav",
           age:23,
           message(){console.log('hey')},
           car:{brand:'ford',model:'foucs'},
           mother:'Martha'
       }
    }
   render()
   { 
       return(
       <div>
           <PropTypesChild {...this.state}/>
          </div>
       )
    }
}

export default PropTypes;