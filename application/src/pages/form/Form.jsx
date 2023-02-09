import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Form = () => {

    const [nome, setNome] = useState("");
    const [modelo, setModelo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");

    const { data: pecas, httpConfig } = useFetch("http://localhost:4000/pecas/");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            nome: nome, 
            modelo: modelo, 
            categoria: categoria,
            descricao: descricao}

            httpConfig(data, "POST");
            console.log(data);
    }

    const handleNavigate = () => {
        navigate("/list");
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            <span>nome</span>
            <input type="text" value={nome} 
            onChange={(e)=>setNome(e.target.value)}/>
        </label>

        <label>
        <span>Modelo</span>
        <select name="" id="" value={modelo} 
        onChange={(e)=>setModelo(e.target.value)}>
            <option value="Palio">Palio</option>
            <option value="Uno">Uno</option>
            <option value="Fusca">Fusca</option>
            <option value="Chevete">Chevete</option>
            <option value="Corsa">Corsa</option>
        </select>
        </label>

        <label>
            <span>Categoria</span>
        <select name="" id="" value={categoria}
         onChange={(e)=>setCategoria(e.target.value)}>
            <option value="Acessorios">Acessorio</option>
            <option value="Acessorios">Acessorio</option>
            <option value="Acessorios">Acessorio</option>
            <option value="Acessorios">Acessorio</option>
            <option value="Acessorios">Acessorio</option>
        </select>
        </label>

        <label>
            <span>Descrição</span>
            <input 
            type="textarea" 
            value={descricao} 
            onChange={(e)=>setDescricao(e.target.value)}
            />
        </label>

        <input type="submit" />
      </form>
    </div>
  )
}

export default Form;
