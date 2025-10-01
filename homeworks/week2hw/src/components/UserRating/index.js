import '../styles.css'
import {useState} from 'react'
// import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg'

export const UserRating = () => {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    if (count >= 5) {
      return
    }
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    if (count <= 0) {
      return
    }
    setCount(count - 1)
  }

  return (
    <div>
      {count < 5 && (
        <button onClick={handlePlusClick}>[+]</button>
      )}
      {count > 0 && (
        <button onClick={handleMinusClick}>[-]</button>
      )}
      {[...Array(count)].map((i, index) => {
        return (
            <span key={index} className='heart'>
              <div class='loves'>
                &#60;3
              </div>
            </span>
        )
      })}
      
    </div>
  )
}

export default UserRating
