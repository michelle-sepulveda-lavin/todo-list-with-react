import React, { useState, useEffect } from 'react';
import Tasks from './tasks';
import AddTask from './addTask';
import Buttons from './buttons';

const TodoList = () => {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        getList()
    }, [])

    const addTask = (e) => {
        if (e.keyCode === 13 && e.target.value !== "") {
            let aux = [...taskList, { label: e.target.value, done: false }];
            putTask(aux)
            e.target.value = ""
        }
    }
    const deleteTask = index => {
        let auxiliar = [...taskList];
        auxiliar.splice(index, 1);
        putTask(auxiliar)
    }

    const getList = async () => {
        try {
            const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/michelle-sepulveda-lavin')
            const data = await response.json()
            if (response.ok) {
                setTaskList(data)
            } else {
                alert("Error")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const putTask = async (task) => {
        try {
            const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/michelle-sepulveda-lavin', {
                method: 'PUT',
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            if (response.ok) {
                setTaskList(task)
            } else {
                alert(data.msg)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const createList = async () => {
        try {
            const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/michelle-sepulveda-lavin', {
                method: 'POST',
                body: JSON.stringify([]),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            if (data.msg) {
                alert(data.msg)
            } else {
                setTaskList([])
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteList = async () => {
        try {
            const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/michelle-sepulveda-lavin', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            if (response.ok) {
                createList()
            } else {
                alert(data.msg)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container text-center  col-10 col-md-4 mt-5">
            <div className="row">
                <div className="col-12 text-center m-auto">
                    <h1 className="pt-3">ToDo List</h1>
                </div>
            </div>
            <AddTask addTask={addTask} />
            <Buttons deleteList={deleteList}/>
            <Tasks taskList={taskList} deleteTask={deleteTask} />
            <div className="text-start" id="cantidad">{taskList.length + " tasks"}</div>
        </div>
    )
};

export default TodoList;