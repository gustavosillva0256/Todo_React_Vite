import { useState } from 'react';
import './App.css'
import Todo from './components/Todo';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade Z no sistema Y",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Editar funcionalidade Z no sistema Y",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Fazer almoço no dia mundial da gambiarra",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Estudar funcionalidades do sistema Y",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=>
        <Todo
        todo={todo}
        
        
        
        
        />
        
        
        )}

      </div>
     
    </div>
  );
}

export default App;