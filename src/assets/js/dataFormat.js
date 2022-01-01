import uuid from 'react-uuid'
export const generateToDoItem = (title) => ({ title, key: uuid() })
export const statusList = [
  { text: '待完成', value: 'undo' },
  { text: '已完成', value: 'finished' }
]