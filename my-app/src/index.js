import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,Route,Link,Switch,NavLink} from 'react-router-dom';

//Components
import Posts from './Components/post';
import Profile from './Components/profile';
import Header from './Components/Header';
import NotFound from './Components/notFound';
import Post_Item from './Components/post_item';
import LifeCycle from './Components/lifecycle';
import PropTypes from './Components/propTypes';
import Ref from './Components/ref';
import Form from './Components/Form';

class App extends  Component{
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}

ReactDOM.render(
      
       <BrowserRouter>
       <div>
           <header>
               <Link to="/">Home</Link><br/>
               <NavLink activeClassName="selected" to="/post" activeStyle={{color:'red'}}>Post</NavLink><br/>
               <NavLink to="/profile" activeStyle={{color:'green'}}>profile</NavLink><br/>
               <NavLink to="/LifeCycle" activeStyle={{color:'green'}}>LifeCycle</NavLink><br/>
               <NavLink to="/PropTypes" activeStyle={{color:'green'}}>PropTypes</NavLink><br/>
               <NavLink to="/Ref" activeStyle={{color:'green'}}>Ref</NavLink><br/>
               <NavLink to="/Form" activeStyle={{color:'green'}}>Form</NavLink><br/>
               
               <hr/>
            </header>
         
       <div><Header/></div>
       <Switch>
       <Route exact path="/" component={App} ></Route>
       
       <Route exact path="/post" component={Posts}></Route>
       <Route exact path="/Form" component={Form}></Route>
       <Route exact path="/PropTypes" component={PropTypes}></Route>
       <Route path="/profile" component={Profile}></Route>
       <Route path="/ref" component={Ref}></Route>
       <Route path="/LifeCycle" component={LifeCycle}></Route>
       <Route path="/Post/:id" component={Post_Item}></Route>
       <Route path="*" component={NotFound}></Route>
       </Switch>
  
       </div>
       </BrowserRouter>
     
    ,document.getElementById("root"));