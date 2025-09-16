import Button from './components/Button'
const App = ()=>{
  return (
    <>
      <div>
        <Button primary outline>A</Button>
      </div>
      <div>
        <Button secondary rounded>A</Button>
      </div>
      <div>
        <Button danger>A</Button>
      </div>
      <div>
        <Button warning outline rounded>A</Button>
      </div>
      <div>
        <Button success outline>A</Button>
      </div>
    </>
  )
}

export default App