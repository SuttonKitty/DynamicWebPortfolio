import {useState} from 'react'
import Dropdown from '../components/Dropdown'
// import {Panel} from '../components/Dropdown'
const OPTIONS = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
]

// keys can be wrped in strin gif it is more than one word
const COLOR_MAP = {
  red: 'bg-red-500',
  green: 'bg-green-400',
  blue: 'bg-blue-500',
}

// template linterals
const DATA_TO_FILTER = [
  {id: 1, name: 'sutton', team: 'red'},
  {id: 1, name: 'kitty', team: 'green'},
  {id: 1, name: 'ascii', team: 'blue'},
  {id: 1, name: 'bela', team: 'red'},
  {id: 1, name: 'cat', team: 'green'},
]

// const colorClass = `bg-${value?.value}-500`

const DropdownPage = () => {
  // this piece of state is where we recieve our dropdown selected value
  // we keep track of it in the parent component so that it, and all children of the parent
  // have access to this piece of states value and can update and rerender when it changes
  const [value, setValue] = useState(null)

  let filteredData = DATA_TO_FILTER

  if (value?.value) {
    filteredData = DATA_TO_FILTER.filter(
      (student) => student.team === value.value
    )
  }

  const handleChange = (option) => {
    setValue(option)
  }

  return (
    <div>
      <h1 className={COLOR_MAP[value?.value]}>
        Dropdown page w/ user selcted value of: {value?.label}
      </h1>
      <Dropdown options={OPTIONS} onChange={handleChange} value={value} />
    <h2 className={COLOR_MAP[value?.value]}>Sutudents from {value?.lable}:</h2>
    {
      filteredData.map((student)=>{
        return <p key={student.id}>{student.name}</p>
      })
    }

    </div>
  )
}

export default DropdownPage
