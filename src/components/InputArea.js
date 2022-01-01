import { useCallback, useState } from 'react'
const basicInputStyle = 'ring-1 ring-gray-200 mr-2 py-1 px-2 flex-grow text-sm focus:outline-none'
const basicBtnStyle = 'bg-gray-200 px-10 py-1 text-sm border'
const InputArea = ({addUndoItem}) => {
  const [warningStatus, setWarningStatus] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const setWarningStatusFun = useCallback((value) => {
    if(value === '') {
      setWarningStatus(true)
      return false
    }else {
      setWarningStatus(false)
      return value
    }
  }, [setWarningStatus])
  const addUndoItemFun = useCallback(() => {
    if(inputValue === '') return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      addUndoItem(inputValue)
      setInputValue('')
    }, 1300)
  }, [addUndoItem, inputValue])
  const clickBtnFun = useCallback(() => {
    if(!loading) addUndoItemFun()
  }, [addUndoItemFun, loading])
  const changeInput = useCallback((e) => {
    const value = e.target.value
    setInputValue(value)
    setWarningStatusFun(value)
  }, [setWarningStatusFun, setInputValue])
  const pressKeyFun = useCallback((e) => {
    if(e.code === 'Enter') addUndoItemFun()
  }, [addUndoItemFun])
  return (
    <div className="ring-1 ring-gray-200 w-full py-4 px-4">
      <h1 className="text-3xl font-bold">待辦事項</h1>
      <div className="mt-4">
        <p className="mb-1 flex items-center">
          <span className="required mr-1">*</span>
          <span className="text-gray-600 text-sm">項目</span>
        </p>
        <div className="flex">
          <input type="text" className={`${basicInputStyle} ${warningStatus && 'ring-red-500'}`} placeholder="請輸入待辦事項" value={inputValue} onChange={changeInput} onKeyUp={pressKeyFun} disabled={loading}/>
          <button className={`${basicBtnStyle} ${loading && 'cursor-not-allowed'}`} onClick={clickBtnFun} disabled={loading}>送出</button>
        </div>
        <p className={`text-sm text-red-500 mt-2 ${warningStatus ? 'visible' : 'invisible'}`}>不得為空值</p>
      </div>
    </div>
  )
}
export default InputArea 