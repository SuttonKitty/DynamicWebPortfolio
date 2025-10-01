import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index)
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    )

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between items-center p-3 bg-gray-100 border-b cursor-pointer"
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })

  return <div>{renderedItems}</div>
}

export default Accordion
