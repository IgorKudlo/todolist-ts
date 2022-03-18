import React, {useState} from "react";
import {TaskType, Todolist} from "./Todolist";
import { v1 } from "uuid";
import "./App.css";

export type FilterValuesType = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS&HTML", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let newTask = { id: v1(), title, isDone: false };
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    function changeStatus(taskID: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskID);
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks]);
        }
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");
    let tasksForTodolist = tasks;
    if (filter === "completed") tasksForTodolist = tasks.filter(t => t.isDone);
    if (filter === "active") tasksForTodolist = tasks.filter(t => !t.isDone);

    return (
        <div className="App">
            <Todolist
                title={"What to learn"}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
