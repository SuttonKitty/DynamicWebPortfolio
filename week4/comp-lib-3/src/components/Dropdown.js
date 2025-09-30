import {useState} from 'react'
import cx from 'classnames'

const Dropdown = (props) => {
  const {options} = props
  // state for selected option
  const [isOpen, setIsOpen] = useState(true)

  const renderOptions = options.map((opt, index) => {
    return (
      <div key={index} className="hover;bg-sky-100 rounded cursor-pointer p-1">
        {opt.label}
      </div>
    )
  })

  return (
    <div className="w-48 relative">
      <Panel classnames="flex justify-between items-center cursor-pointer">
        {/* condition text coming soon */}
        Select...
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  )
}

const Panel = (props) => {
  const {className, children, ...rest} = props
  const finalClassName = cx(
    className,
    'border rounded p-3 shadow bg-white w-full'
  )
  return (
  <div {...rest} className={finalClassName}>
    {children}
  </div>
  )
}

// named export
export {Panel}
// default export (norm, file name gives hint for what is default)
export default Dropdown
