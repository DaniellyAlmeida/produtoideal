import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const acessarFerramenta = () => {
    if (senha === "2025") {
      router.push("/dashboard");
    } else {
      setErro("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">ProdutoIdeal.ai</h1>
        <p className="mb-4 text-gray-700">Digite a senha de acesso:</p>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={acessarFerramenta}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Entrar
        </button>
        {erro && <p className="text-red-500 mt-3">{erro}</p>}
      </div>
    </div>
  );
}

