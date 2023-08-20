import React  ,{useState} from "react";
import Child from "./Child"

const Parent = () => {

    const[todos , setTodos] = useState(["Learn React" , "Build a React app" , "Deploy the React app"])
    return(

        <div>
            <h1>Parent Component</h1>
            
            <Child setTodos = {setTodos}
                  todos = {todos}
            />
        </div>
    )
}

export default Parent