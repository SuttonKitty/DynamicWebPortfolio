import { useState } from 'react'
import Button from '../components/RandomGen'

const ButtonPage = () => {
  const [cat, setCat] = useState('')

  const cats = [`=^w^=`, `(=^.^=)`, `(^・ω・^ )`, `(=①ω①=)`, `(=^‥^=)`, `(=ＴェＴ=)`]

  const generateCat = () => {
    const randomIndex = Math.floor(Math.random() * cats.length)
    setCat(cats[randomIndex])
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <Button primary onClick={generateCat}>
          Random ASCII Cat
        </Button>
        {cat && (
          <div className="text-lg font-bold">
            {cat}
          </div>
        )}
      </div>
    </>
  )
}

export default ButtonPage
