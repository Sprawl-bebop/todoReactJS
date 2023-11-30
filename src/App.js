import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component  {

  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }

   addItem(todoValue){
    if(todoValue!==""){
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list: list,  //updating global list with the current updated list
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list:updatedList,
      isDone:true
    });
  }

  updateInput(input){
    this.setState({
      newItem:input
    });
  }

  handleChange(keyid){
    //change the color or strike through the text
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Todo List Webapp</h1>
        </header>

        <div className="Container">
          <h2 style={{color:"aqua"}}>Add items</h2>

          <div className="add-div">
            <input 
            type="text"
            className="input-add" 
            placeholder="Enter todo item"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
            />
            <button 
            className="add-btn"
            onClick={()=>this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}  //if length is zero is false ie empty item, disabled is set true ie !false=true
            >Add</button>
          </div>

          <div className="list">
            <ul>
              {this.state.list.map(item=>{
                return(
                  <li key={item.id}>
                      <input
                        type="checkbox"
                        id={item.id}
                        // checked={!item.isDone}  //automatically checks or unchecks the checkbox
                        // onChange={()=>{}}
                        // onChange={()=>this.handleChange()}
                      />
                      {item.value}
                      <button
                      className="del-btn"
                      onClick={()=>this.deleteItem(item.id)}
                      >
                        Delete
                      </button>
                  </li>
                );
              })}
              {/* <li>
                <input type="checkbox" className="input-list"/>
                Certain Task
                <button className="del-btn">Delete</button>
              </li> */}
            </ul>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
