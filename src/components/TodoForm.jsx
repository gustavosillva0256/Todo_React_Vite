import {useState} from 'react';

function TodoForm( {addTodo}) {
    const [value,setValue]=useState("");
    const[category,setCategory]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value,category)
        setValue("");
        setCategory("");
    };
  return (
    <div className='todo-form'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder="Digite o título"
         value={value}
         onChange={(e)=>setValue(e.target.value)}         
         />
        <select value={category}
                onChange={(e)=>setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
          <option value="estudo">Estudos</option>
        </select>
        <button type='submit'>Cadastrar tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;
