import React  ,{useState} from "react";
import Child from "./Child"

const Parent = () => {

    const[todos , setTodos] = useState([ {id: 1, text: "Learn React", state: false}, 
                                         {id: 2, text: "Build a React app" , state: false},
                                         {id: 3, text: "Deploy the React app" , state: false},
                                        ])
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