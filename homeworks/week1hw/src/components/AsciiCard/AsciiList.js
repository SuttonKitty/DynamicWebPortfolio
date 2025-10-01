const AsciiList = (props) => {
  const {ascii, title} = props

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {ascii.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  )
}

export default AsciiList
