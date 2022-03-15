import React from "react";
import "./App.css";
import {TaskType, Todolist} from "./Todolist";

function App() {

    let task1: Array<TaskType> = [
        {id: 1, title: "CSS&HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ];

    let task2: Array<TaskType> = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "Jentlments of fortune", isDone: true}
    ];

    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={task1}/>
            <Todolist title={"Movies"} tasks={task2}/>
        </div>
    );
}

export default App;
