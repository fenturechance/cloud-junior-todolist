import { useCallback } from "react"
import dayjs from "dayjs"
const UndoListArea = ({
  undoList,
  finishList,
  setUndoList,
  setFinishList,
}) => {
  const removeItem = useCallback((key) => {
    const arr = undoList.filter(item => item.key !== key)
    setUndoList(arr)
  }, [setUndoList, undoList])
  const finishItem = useCallback((item) => {
    const obj = {
      ...item,
      finishTime: dayjs().valueOf()
    }
    const arr = [obj, ...finishList]
    setFinishList(arr)
    const newUndoList = undoList.filter(unDoItem => unDoItem.key !== item.key)
    setUndoList(newUndoList)
  }, [finishList, setFinishList, undoList, setUndoList])
  return (
    <ul className="fadeIn">
      { undoList.map(item => (
        <li key={item.key} className="flex justify-between border-b py-2">
          <span>{ item.title }</span>
          <div className="flex gap-2 items-center">
            <button className="config-btn" onClick={() => removeItem(item.key)}>移除</button>
            <button className="config-btn" onClick={() => finishItem(item)}>完成</button>
          </div>
        </li>
      )) }
    </ul>
  )
}

export default UndoListArea