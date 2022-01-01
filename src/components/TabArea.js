import { statusList } from "src/assets/js/dataFormat"
import { useCallback } from "react"
const basicLiStyle = `w-1/2 text-center ring-1 ring-gray-200 py-3 text-sm cursor-pointer transition duration-500`
const TabArea = ({ nowTab, setNowTab }) => {
  const clickTab = useCallback((tabValue) => {
    setNowTab(tabValue)
  }, [setNowTab])
  return (
    <ul className="flex">
      { statusList.map(item => (
        <li className={`${basicLiStyle} ${nowTab === item.value && 'bg-gray-200'}`} key={item.value} onClick={() => clickTab(item.value)}>{ item.text }</li>
      )) }
    </ul>
  )
}

export default TabArea