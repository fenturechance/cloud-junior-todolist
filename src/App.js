import InputArea from 'src/components/InputArea'
import TabArea from 'src/components/TabArea'
import UndoListArea from 'src/components/UndoListArea'
import FinishListArea from 'src/components/FinishListArea'
import { useState, useCallback } from 'react'
import { generateToDoItem } from 'src/assets/js/dataFormat'
import { statusList } from "src/assets/js/dataFormat"
function App() {
  const [ undoList, setUndoList ] = useState([])
  const [ finishList, setFinishList ] = useState([])
  const [ nowTab, setNowTab ] = useState(statusList[0].value)
  const addUndoItem = useCallback((title) => {
    const item = generateToDoItem(title)
    setUndoList(previousList => [ ...previousList, item ])
  }, [])
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
            <FinishListArea undoList={undoList} finishList={finishList} setUndoList={setUndoList} setFinishList={setFinishList}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
