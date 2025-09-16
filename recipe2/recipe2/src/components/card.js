import './RecipeCard.css'

const Card = (props) => {
    //children is a prop we get for free. children can be text or any other tags that need to become the innerhtml of this componet tag
    const children = props.children
    return <div className='card'>
        {props.children}
    </div>
}

export default Card