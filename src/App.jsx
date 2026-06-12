import { X } from "lucide-react"
import { useState } from "react"

const App = () => {
    const [todos,setTodos] = useState([])
    const [input,setInput] = useState("")


    const handleTodoAdd = (e) => {
      e.preventDefault()
        setTodos((todo) => {
          return todo.concat({
            text:input,
            id:Math.random() * 10
          })
        })
    }
    const deleteTodos = (id) => setTodos(prev => prev.filter(p => p.id !== id))
  return (
    <div className="body">
        <div className="container">
           <div className="top">
             <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} placeholder="Today i will go to market"/>
            <button className="btn " onClick={handleTodoAdd}>Add</button>
           </div>
        </div>
        <div className="container">
           <div className="bottom">
             {todos.length === 0 ? <h1 className="not-found">Not Todo is Available</h1> : todos.map(({text,id}) => (
                <div key={id} className="todo-container">
                    <p className="todo-title">{text}</p>
                    <span className="close" onClick={() => deleteTodos(id)}><X/></span>
                </div>
             ))}
           </div>
        </div>
    </div>
  )
}

export default App