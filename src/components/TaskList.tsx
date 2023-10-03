import { TaskDTO } from '../types/TaskDTO'
import Task from './Task'

const TaskList = ({
  tasklist,
  setTasklist,
}: {
  tasklist: TaskDTO[]
  setTasklist: React.Dispatch<React.SetStateAction<TaskDTO[]>>
}) => {
  const onHandleDelete = (idx: number) => {
    return () => {
      setTasklist((prev) => {
        const newlist = [...prev]
        newlist.splice(idx, 1)
        return newlist
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
      {tasklist.map((task, idx) => {
        return <Task key={task.id} taskprops={task} onHandleDelete={onHandleDelete(idx)} />
      })}
    </div>
  )
}
export default TaskList
