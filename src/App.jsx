import { useState } from "react";
import "../src/globals.css";


export default function App() {
   const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "Hambúrguer",
            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",
            preco: "R$ 25,99"
        },
        {
            id: 2,
            item: "Coca-cola 350ml",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4S15squn95k7qtrVOpMX1MOJGe48y4B7FQ&s",
            preco: "R$ 5,99"
        },
        {
            id: 3,
            item: "Batatas fritas",
            imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg",
            preco: "R$ 8,99"
        },
        {
            id: 4,
            item: "Suco de Frutas",
            imagem: "https://helenalunardelli.com.br/wp-content/uploads/2013/02/sucos.jpg",
            preco: "R$ 8,99"
        },
    ]);
           
    const [listaPedidos, setPedidos] = useState([]);

    const adicionarProdutoPedido = (produto) => {
        setPedidos([...listaPedidos, produto]);
    }
         
    console.table(listaPedidos);
    const removerItem= (id)=> {
        let listaAux= listaPedidos.filter((pedido)=> pedido.id !== id);
        setPedidos(listaAux);
    }
    return (
       <div className="bloco-principal">
         <div className="bloco-produtos">
            {
                listaProdutos.map((produto)=>
                    <div key={produto.id}>
                        <img src={produto.imagem}/>
                        <p> {produto.item}</p>
                         <button onClick={() => adicionarProdutoPedido(produto)}>quero</button>
                    </div> )
            }
         </div>
         <table className="bloco-pedidos">
            <h1>Tabela Pedidos</h1>
            {
                listaPedidos.map((pedido)=> 
                <tr>
                    <td>{pedido.item}</td>
                    <td>{pedido.preco}</td>
                    <td><button onClick={()=> removerItem(pedido.id)}>X</button></td>
                </tr>)
            }
              

         </table>
         </div>

    );
}
