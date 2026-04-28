import { useState } from "react";
import styles from "./index.module.css";

export default function Atividade03() {
  const [acao, setAcao] = useState("Excluir");

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Atividade 3</h1>

      <p className={styles.texto}>
        Ação selecionada: <strong>{acao}</strong>
      </p>

      <div className={styles.botoes}>
        <button
          className={styles.cadastrar}
          onClick={() => setAcao("Cadastrar")}
        >
          Cadastrar
        </button>

        <button
          className={styles.editar}
          onClick={() => setAcao("Editar")}
        >
          Editar
        </button>

        <button
          className={styles.listar}
          onClick={() => setAcao("Listar")}
        >
          Listar
        </button>

        <button
          className={styles.excluir}
          onClick={() => setAcao("Excluir")}
        >
          Excluir
        </button>

        <button
          className={styles.cancelar}
          onClick={() => setAcao("Nenhuma")}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}