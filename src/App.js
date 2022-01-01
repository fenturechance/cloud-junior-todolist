import InputArea from 'src/components/InputArea'
import TabArea from 'src/components/TabArea'
import UndoListArea from 'src/components/UndoListArea'
import FinishListArea from 'src/components/FinishListArea'
import { useState, useCallback, useEffect } from 'react'
import { generateToDoItem } from 'src/assets/js/dataFormat'
import { statusList } from "src/assets/js/dataFormat"
const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = localStorage.getItem(key)
    return stickyValue ? JSON.parse(stickyValue) : defaultValue
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}
function App() {
  const [ undoList, setUndoList ] = useStickyState([], 'undoList')
  const [ finishList, setFinishList ] = useStickyState([], 'finishList')
  const [ nowTab, setNowTab ] = useState(statusList[0].value)
  const addUndoItem = useCallback((title) => {
    const item = generateToDoItem(title)
    setUndoList(previousList => [ ...previousList, item ])
  }, [setUndoList])
  return (
    <div className="App">
      <div className="mt-4 max-w-lg mx-auto">
        <InputArea addUndoItem={addUndoItem}/>
        <div className="mt-4">
          <TabArea nowTab={nowTab} setNowTab={setNowTab} />
        </div>
        <div className="mt-4">
          {nowTab === statusList[0].value ?
            <UndoListArea undoList={undoList} finishList={finishList} setUndoList={setUndoList} setFinishList={setFinishList}/> :
            <FinishListArea finishList={finishList}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
