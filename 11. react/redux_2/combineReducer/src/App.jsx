
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
// import reducer from './redux/Reducer';
// import { ObjReducer } from './redux/Reducer';

function App() {

  const data = useSelector(state => state.reducer1);
  const data2 = useSelector(state => state.reducer2);
  console.log(data)
  console.log(data2)

  const dispatch = useDispatch();

  return (
    <>
      <h2>Combine Reducer </h2>

      <button onClick={() => dispatch({ type: "BUY_ITEM"})}>Click</button>
      <button onClick={() => dispatch({ type: "OBJ_ITEM"})}>Obj id change</button>
    </>
  )
}

export default App
