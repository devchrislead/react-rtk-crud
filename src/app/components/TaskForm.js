import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"

function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)
    const handleChange = e => {
        //console.log(e.target.name, e.target.value)
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (params.id) {
            dispatch(editTask(task))

        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
            }))
        }
        navigate('/')

    }
    useEffect(() => {
        if (params.id) {
            setTask(tasks.find(task => task.id === params.id))

        }
    }, [params.id, tasks])



    return (
        <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
            <label htmlFor="title"
                className="block text-xs font-bold mb-2">Task:</label>
            <input name='title'
                className="w-full p-2 rounded-md bg-zinc-600 mb-2"
                value={task.title}
                type="text" placeholder="title" onChange={handleChange} />
            <label htmlFor="description"
                className="block text-xs font-bold mb-2">description:</label>
            <textarea name='description'
                className="w-full p-2 rounded-md bg-zinc-600 mb-2"
                value={task.description}
                placeholder="description" onChange={handleChange}></textarea>
            <button type="" className="bg-indigo-600 px-2 py-1">Save</button>
        </form>
    )
}

export default TaskForm