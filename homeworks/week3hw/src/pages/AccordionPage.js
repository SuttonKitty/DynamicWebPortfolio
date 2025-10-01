import React from 'react'
import Accordion from '../components/Accordion'

const ITEMS = [
  {
    id: '123',
    label: 'A mixed breed cat is always a happier and healthier pet than a pedigreed cat.',
    content:
      'False',
  },
  {
    id: '456',
    label: 'There are no authentic records of the domestication of cats before 1500 BCE.',
    content:
      'True',
  },
  {
    id: 'l1kj2i0g',
    label: 'Cats were considered a sacred animal in ancient Egypt because they were domesticated.',
    content:
      'False',
  },
]

const AccordionPage = () => {
  return (
    <div>
      <h1>True or False?</h1>
      <Accordion items={ITEMS} />
    </div>
    
  )
}



export default AccordionPage
