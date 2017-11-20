import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,Route,Link,Switch,NavLink} from 'react-router-dom';

//Components
import Posts from './Components/post';
import Profile from './Components/profile';
import Header from './Components/Header';
import NotFound from './Components/notFound';
import Post_Item from './Components/post_item';


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
               <hr/>
            </header>
       <div>Header</div>
       <Switch>
       <Route exact path="/" component={App} ></Route>
       <Route exact path="/post" component={Posts}></Route>
       <Route path="/profile" component={Profile}></Route>
       <Route path="/Post/:id" component={Post_Item}></Route>
       <Route path="*" component={NotFound}></Route>
       </Switch>
       </div>
       </BrowserRouter>
     
    ,document.getElementById("root"));