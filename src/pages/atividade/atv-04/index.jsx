import { useState } from "react";
import styles from "./index.module.css";

function Atividade04() {
    const [qtd, setQtd] = useState("");
    const [produto, setProduto] = useState("");
    const [lista, setLista] = useState([
    ]);

    function adicionarItem() {
        if (!qtd || !produto) return;

        const novoItem = `${qtd}x ${produto}`;
        setLista([...lista, novoItem]);

        setQtd("");
        setProduto("");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Atividade 4 - Lista de compra</h1>

            <div className={styles.inputs}>
                <input
                    type="number"
                    placeholder="Qtd"
                    value={qtd}
                    onChange={(e) => setQtd(e.target.value)}
                    className={styles.inputQtd}
                />

                <input
                    type="text"
                    placeholder="Produto..."
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    className={styles.inputProduto}
                />

                <button onClick={adicionarItem} className={styles.botao}>
                    Adicionar
                </button>
            </div>

            <div className={styles.lista}>
                {lista.map((item, index) => (
                    <div key={index} className={styles.item}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Atividade04;