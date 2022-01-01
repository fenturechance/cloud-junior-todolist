import dayjs from "dayjs"
const setTimeString = (finishTime) => {
  const diff = dayjs().diff(dayjs(finishTime), 'hour', true)
  if(diff > 24) return dayjs(finishTime).format('YYYY-MM-DD')
  else if(diff > 1) return `${Math.floor(diff)}小時前`
  else if(diff > 1/60) return `${Math.floor(diff * 60)}分鐘前`
  else return `${Math.floor(diff * 60 * 60)}秒前`
}
const UndoListArea = ({
  finishList,
}) => {
  return (
    <ul className="fadeIn">
      { finishList.map(item => (
        <li key={item.key} className="flex justify-between border-b py-2 text-gray-400">
          <span>{ item.title }</span>
          <p>{ setTimeString(item.finishTime) }</p>
        </li>
      )) }
    </ul>
  )
}

export default UndoListArea