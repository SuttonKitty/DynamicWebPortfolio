import {useState} from 'react'
//you may come across the use of useState() in the wild
//State is an obj that keeps track of vars that will update based on user input. 
//when stae changes, the componet, no the page
// update + refresh and re-render. and the changes are reflected on the screen

const Counter = () => {
    //when we call "useState" we need to name our piece state, and the function to update it,
    // and declare an initial value for that state
    /*
    state = {
        count: 0;
    }
    */
    const [count, setCount] = useState(0)

    const handlePlusClick = () => {
        //never: count = count-1
        //use setter
        setCount(count + 1)
    }

    const handleMinusClick = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1)
    }

    // this is where we return jsx
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleMinusClick}>[-]</button>

            <button onClick={handlePlusClick}>[+]</button>
        </div>
    )
}

export default Counter
