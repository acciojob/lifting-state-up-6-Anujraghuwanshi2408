import React , {useState} from "react";


const Child = ({setTodos , todos}) => {


    function removeBtn(e){
       e.target.style.display = "none"
    }
    return  (
        <div>
           <ul>
            <h1>Child Component</h1>
            {
                todos.map(Element => {
                    return(
                        <li>
                            {Element}
                          <button onClick={removeBtn}>Complete</button>
                        </li>
                    )
                })
            }
           </ul>
        </div>
    )
}

export default Child