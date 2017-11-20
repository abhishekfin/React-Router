import React,{Component} from 'react';

class LifeCycle extends Component{
  // 1 Get Defauls State
    constructor(props){
        super(props);
       
        //2  set initial state
        this.state= {
            title:"hi",
            body :"body"
        }

    }
    // 3 BEFORE GET CREATED 
    componentWillMount(){
        console.log("Before component created");
       
    }

    //4 RENDER JSX
   render()
   { 
       return(
           <div>
           <h1>{this.state.title}</h1>
           <div>{this.state.body}</div>
           <div onClick={()=>this.setState({title:'someThing else'})}>Click To change</div>
           </div>
       )
    }
  

    componentWillReceiveProps(){
        console.log("Before RECEIVING PROPS");
    }

    componentWillUpdate(){
        console.log("Before Update");
    }

    componentDidUpdate(){
        console.log("after Update");
    }
    // 5 After Componend  mounted
    componentDidMount(){
        console.log("Component did mount");
        
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.title);
        console.log(nextState.title)
        return true;
    }

    componentWillUnmount(){
        console.log("Component Will unmount");
    }

}

export default LifeCycle;