import { useRef } from 'react'
import { TaskDTO } from '../types/TaskDTO'

const TaskForm = ({ setTasklist }: { setTasklist: React.Dispatch<React.SetStateAction<TaskDTO[]>> }) => {
  const taskInput = useRef<HTMLInputElement>(null)
  const onHandleAdd = (newTasktitle: string) => {
    const newTask: TaskDTO = {
      id: Math.random(),
      isDone: false,
      todo: newTasktitle,
    }
    setTasklist((prev) => {
      return [...prev, newTask]
    })
  }
  return (
    <div className="flex flex-col items-center justify-center h-40 bg-red-600">
      <div className="text-5xl text-slate-50">Add ToDo Task</div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!taskInput.current?.value) return
          onHandleAdd(taskInput.current?.value)
          taskInput.current.value = ''
        }}
      >
        <input ref={taskInput} type="text" name="title" placeholder="title" />
        <button>Add</button>
      </form>
    </div>
  )
}
export default TaskForm
