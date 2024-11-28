
import './App.css'
import JsxWithCurly from './components/JsxWithCurly'
import Props from './components/Props'

function App() {

  return (
    <>
      <JsxWithCurly/>
      <Props name="This is props method's" value={22}/>
    </>
  )
}

export default App
