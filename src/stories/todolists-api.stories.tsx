import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodolists().then((res) => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodolist("Title Todolist").then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'a37a9c31-a6d2-464a-a0b2-54637270b903';
        todolistApi.deleteTodolist(todolistId).then( res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd3830d46-5c24-4e4e-aabe-a8fb2642998e';
        const title = "ReactJS";
        todolistApi.updateTodolistTitle(todolistId, title).then(res => setState(res.data));
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
