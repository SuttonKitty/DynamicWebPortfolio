import './RecipeCard.css'
import styles from './RecipeCard.modules.css'



const RecipeInfo = (props) => {
    const {title, description} = props
    return (
        <div className={styles.recipe_info}>
            <h2 className="recipe_title">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default App