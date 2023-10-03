import { TaskDTO } from '../types/TaskDTO'

export const initialTasks: TaskDTO[] = [
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn HTML',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn React',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn Node.js',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn useState',
    isDone: false,
  },
]
