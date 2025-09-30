import {userState} from 'react'

export const UserRating = () => {
    const [count, setCount] = useState(0)

    return (<div>
       <button onClick={}>[-]</button>
       {count}
        <button onClick={}>[+]</button>
        </div>
    )
}

export default UserRating