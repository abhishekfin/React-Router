import React,{Component} from 'react';
//controlled component and uncontrolled component
class Posts extends Component{
   constructor(props){
       super(props);
   this.state ={
       name:"",
       lastName:''
   }
   this.handlePasswordChange = this.handlePasswordChange.bind(this);
   }
   handleNameChange(event){
      this.setState({name:event.target.value});
    }
     handlePasswordChange(event){
        this.setState({lastName:event.target.value});
     }
     componentWillUpdate(nextProps,nextState){
         console.log(nextState);
     }

     handleSubmitClick =  ()=>{
         const value ={
             name:this.address.value,
             lastName : this.city.value
         }
         console.log(value)
     }
    render()
   { 
       return<div>
           <div>
               <label>Enter Password</label><br/>
               <input value={this.state.name} type="text" onChange ={this.handleNameChange.bind(this)}/>
           </div>
           <br/><br/>
           <div>
               <label>Enter Password</label><br/>
               <input value={this.state.lastName}  type="text" onChange ={this.handlePasswordChange}/>
           </div>
           <br/><br/>
           <div>
               <label>Enter Name address</label><br/>
               <input   ref={input =>this.address=input} type="text" />
           </div>
           <br/><br/>
           <div>
               <label>Your city</label><br/>
               <input   ref={input =>this.city=input} type="text" />
           </div>
           <button onClick={this.handleSubmitClick}>Submit</button>
       </div>
    }
}

export default Posts;