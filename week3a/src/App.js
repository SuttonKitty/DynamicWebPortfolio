import Button from './components/Button'
const App = ()=>{
  return (
    <>
      <div>
        <Button
          primary
            onClick={() => {
              console.log('CLICK')
            }}
          >
            buy now
        </Button>
      </div>
      <div>
        <Button secondary rounded className="fixed right-0 bottom-0">hello</Button>
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
