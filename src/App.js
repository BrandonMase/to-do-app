import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [
        { name: 'Write Code',
          totalTime: 234234,
          timeRemaining: 5343,
          frequency: 'week',
          subTasks: [
            { name: 'To-do-app', totalTime: 324234234 },
            { name: 'To-do-app', totalTime: 324234234 },
            { name: 'To-do-app', totalTime: 324234234 },
            { name: 'To-do-app', totalTime: 324234234 },
            { name: 'To-do-app', totalTime: 324234234 },
          ]
        },
        { name: 'Write Code',
          totalTime: 234234,
          timeRemaining: 5343,
          frequency: 'week',
          subTasks: [
            { name: 'To-do-app', totalTime: 324234234 },
            { name: 'To-do-app', totalTime: 324234234 },
            { name: 'To-do-app', totalTime: 324234234 },
            { name: 'To-do-app', totalTime: 324234234 },
            { name: 'To-do-app', totalTime: 324234234 },
          ]
        }
      ],
      timerStarted: false,
      selectedTaskIndex: null,
    }
  }

  getTasks = () => {
    if (this.state.tasks) {

      return this.state.tasks.map(
        (e, i) => {
          let isSubTaskSelected = e.subTasks && !this.state.selectedTaskIndex ? e.subTasks.filter(e => e.selected).length === 1 ? false : true : true;
          return (
            <div className="task-container">
              <div className="top-level-task-container">
                <span>{ e.name }</span>
                <div>
                  <button disabled={ isSubTaskSelected } className="btn" onClick={ () => { this.setState({ timerStarted: !this.state.timerStarted }) }}>Start</button>
                  <span>{ e.timeRemaining }</span>
                </div>
              </div>
                {this.getSubTasks(e, i) }
            </div>
          );
        }
      )
    }
  }

  clickSubTask = (taskIndex, subTaskIndex) => {
    let tasks = this.state.tasks;
    tasks[taskIndex].subTasks.map(e => e.selected ? delete e.selected : '');
    console.log(tasks[taskIndex]);
    tasks[taskIndex].subTasks[subTaskIndex].selected = true;

    this.setState({tasks});
  }

  getSubTasks = (task, index) => {
    if (task.subTasks) {
      console.log('getSubTasks',  task.subTasks)
      let subTasks = task.subTasks.map((e,i) => <span className={e.selected ? 'selected-sub-task' : 'asd'} onClick={() => { this.clickSubTask(index, i) }}>{ e.name }</span>)
      return (
        <div className="sub-task-container">
          { subTasks }
          </div>
      )
    }
    else { 
      return ''; 
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
         { this.getTasks() }
        </div>
      </div>
    );
  }
}

export default App;
