import React , {useState} from "react";


const Child = ({setTodos , todos}) => {

   console.log(todos)
    function removeBtn(Id , e){
     const newArr =   todos.map(element => {
            if(element.id === Id){
                element.state = !element.state
                e.target.style.display = 'none'
            }
            return element
       })
       console.log(newArr)
    }
    return  (
        <div>
           <ul>
            <h1>Child Component</h1>
            {
                todos.map(Element => {
                    return(
                        <li>
                            {Element.text}
                          <button onClick={(e)=>removeBtn(Element.id , e)}>Complete</button>
                        </li>
                    )
                })
            }
           </ul>
        </div>
    )
}

export default Child