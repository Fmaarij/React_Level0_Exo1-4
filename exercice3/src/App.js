import React, { Component } from "react";

class App extends Component {
 
  render(){
    let dateActuel = new Date();
    return (
      <div>
        Nous somme le {dateActuel.getUTCDate()+"/"+(dateActuel.getMonth()+1)+"/"+dateActuel.getFullYear()+" et il est "+dateActuel.getHours()+"h"+ dateActuel.getMinutes()+" et "+dateActuel.getSeconds()+" seconds."}
      </div>
    );
  }
}
export default App;
