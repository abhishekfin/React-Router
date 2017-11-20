import React,{Component} from 'react';

class Ref extends Component{
    constructor(props){
        super(props)
        this.state ={
            color:'blue',
            data:'Change with ref'
        }
    }

    ChangeText(){
     //this.setState({color:'red'});
      this.refs.myTitle.style.color ='red';
    }
  
    render(){
    const style ={
        color:this.state.color
    }
   
       return(
       <div>
           <h4 style={style} ref="myTitle">{this.state.data}</h4>
           <div onClick={()=>this.ChangeText()}>Change Color</div>
       </div>)
    }
}

export default Ref;