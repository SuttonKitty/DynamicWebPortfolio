import Card from './components/card'
import RecipeInfo from './components'
import './components/RecipeCard.css'
import { RECIPE } from './components/recipe-data'
import './components/RecipeCard.css'
import RecipeImg from './components/RecipeImg'
import './'

const App = () => {
    return (
        <div>
            <Card>

                <div className="card_text">
                    <RecipeInfo
                    title={RECIPE.title}
                    description={RECIPE.description}
                    />

                    <div className="card_lists">
                        <IngredientsList data={RECIPE.ingredients}/>
                        <InstructionsList data={RECIPE.instructions}/>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default App