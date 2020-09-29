import React ,{Component} from 'react';
import './App.css';
import Todo from './todo'

class App extends Component{
  state={
    task:"",
    flag:false,
  }
  addHandler=()=>{
    console.log(this.state.flag)
    this.setState({
      flag:!this.state.flag
    })
    console.log(this.state.flag)
  }

  taskHandler=(e)=>{
    this.setState({
      task:e.target.value
    })
  }

  render(){
    console.log(this.state.flag)
    return(
      <div className="main-box">
        <div className="todo-main-box">
          <div className="text">
            <input  onBlur={this.taskHandler} className="task-box" type="test" placeholder="Enter Task"/>
            <button onClick={this.addHandler} className="add-btn">add</button>
            {this.state.flag?<Todo name={this.state.task} deteleTask={this.addHandler}/>:null}
            </div>
        </div>
      </div>
    )
  }
}
export default App;
