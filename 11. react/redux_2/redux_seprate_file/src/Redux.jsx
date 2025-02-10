import { useDispatch, useSelector } from "react-redux"
import { Choco, Cake } from "./Actions"

const Redux = () => {

    const data = useSelector((state) => state)
    const dispatch = useDispatch();

    console.log(data)


  return (
    <div>
        <button onClick={()=> dispatch(Cake())}>Cake</button>
        <button onClick={()=> dispatch(Choco())}>Choco</button>
    </div>
  )
}

export default Redux