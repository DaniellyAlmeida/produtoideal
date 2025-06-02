import { useState } from "react";

export default function Dashboard() {
  const [produto, setProduto] = useState("");
  const [resultado, setResultado] = useState(null);

  const analisarProduto = () => {
    // Simulação de análise (aqui futuramente conectaremos as APIs reais)
    setResultado({
      nome: produto,
      precoMedio: "R$ 89,90",
      concorrencia: "Alta",
      tendencia: "Em alta 🔥",
      estimativaVendas: "300 vendas/mês",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">ProdutoIdeal.ai</h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            placeholder="Digite o nome do produto"
            className="flex-1 p-3 border rounded"
          />
          <button
            onClick={analisarProduto}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Analisar Produto
          </button>
        </div>

        {resultado && (
          <div className="mt-6 space-y-2">
            <p><strong>Nome:</strong> {resultado.nome}</p>
            <p><strong>Preço Médio:</strong> {resultado.precoMedio}</p>
            <p><strong>Concorrência:</strong> {resultado.concorrencia}</p>
            <p><strong>Tendência:</strong> {resultado.tendencia}</p>
            <p><strong>Estimativa de Vendas:</strong> {resultado.estimativaVendas}</p>
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://www.hotmart.com/pt-br"
            target="_blank"
            className="text-blue-500 underline"
          >
            🔗 Torne-se um afiliado
          </a>
        </div>
      </div>
    </div>
  );
}

