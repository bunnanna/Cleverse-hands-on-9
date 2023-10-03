import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { initialTasks } from '../data/initTaskData'
import { TaskDTO } from '../types/TaskDTO'

const TaskContainer = () => {
  const [Tasklist, setTasklist] = useState<TaskDTO[]>(initialTasks)

  return (
    <>
      <TaskForm setTasklist={setTasklist} />
      <TaskList tasklist={Tasklist} setTasklist={setTasklist} />
    </>
  )
}
export default TaskContainer
