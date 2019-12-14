import React, { Component } from "react";
import Navbar from "./_components/Navbar";
import Restaurants from './_components/Restaurants';
import { Provider } from "react-redux";
import store from './store';

class App extends Component{
  

  render(){
    return (
      <Provider store={store}>
          <div>
           <Navbar />
            <Restaurants />
      </div>
      </Provider>
      
     
    )
  }
}
export default App;