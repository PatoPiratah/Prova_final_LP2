import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const List = () => {

    const { data: pecas, httpConfig } = useFetch("http://localhost:4000/pecas/");
    console.log(pecas);

    const handleDelete = (id) =>{
        httpConfig(id, "DELETE");
    }

    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate("/form");
    }

  return (
    <div>
        <button onClick={() => handleNavigate()}>
            Voltar ao formulario</button>

      <table>
        <thead>
            <tr>
                <th>
                    Codigo
                </th>

                <th>
                    Nome
                </th>

                <th>
                    Modelo
                </th>

                <th>
                    Categoria
                </th>

                <th>
                    Descricao
                </th>
                
            </tr>
        </thead>
        <tbody>
                {pecas && pecas.map((peca) =>
                    <tr key={peca.id}> 
                        <td>{peca.id}</td>
                        <td>{peca.nome}</td>
                        <td>{peca.modelo}</td>
                        <td>{peca.categoria}</td>
                        <td>{peca.descricao}</td>

                        <td><button onClick={() => handleDelete(peca.id)}>DELETE</button></td>
                    </tr>
                    )} 
        </tbody>
      </table>
    </div>
  );
};

export default List;
