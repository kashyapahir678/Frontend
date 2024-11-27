
import './App.css'
import JsxWithCurly from './conponents/JsxWithCurly'
import Props from './conponents/Props'

function App() {

  return (
    <>
      <JsxWithCurly/>
      <Props name="This is props method's" value={22}/>
    </>
  )
}

export default App
