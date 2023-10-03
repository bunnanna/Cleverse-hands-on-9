import { TaskDTO } from '../types/TaskDTO'
import './Task.css'
import { useState } from 'react'
type voidFunc = () => void
const Task = ({ taskprops, onHandleDelete }: { taskprops: TaskDTO; onHandleDelete: voidFunc }) => {
  const [task, setTask] = useState(taskprops)
  const onHandleClick = () => {
    setTask((prev) => {
      const { isDone } = prev
      return { ...prev, isDone: !isDone }
    })
  }

  return (
    <div
      className={`flex justify-between mx-2 my-4 p-6 rounded-2xl w-60 border-collapse cursor-pointer select-none ${
        task.isDone ? 'done' : 'notdone'
      }`}
      onClick={onHandleClick}
    >
      <div>{task.todo}</div>
      <div className=" cursor-default" onClick={onHandleDelete}>
        X
      </div>
    </div>
  )
}
export default Task
