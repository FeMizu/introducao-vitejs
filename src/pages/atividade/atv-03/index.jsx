import { useState } from 'react';
import Botao from './botao';
import styles from './index.module.css';

function Exemplo04() {
    const [acao, setAcao] = useState('Nenhuma');

    return (
        <div className={styles.container}>
            <h1>Atividade 3 - Uso de componentes</h1>

            <h2 className={styles.texto}>
                Ação selecionada: {acao}
            </h2>

            {/* Botões */}
            <Botao texto="Cadastrar" aoClicar={() => setAcao('Cadastrar')} acao="cadastrar" />
            <Botao texto="Editar" aoClicar={() => setAcao('Editar')} acao="editar" />
            <Botao texto="Listar" aoClicar={() => setAcao('Listar')} acao="listar" />
            <Botao texto="Excluir" aoClicar={() => setAcao('Excluir')} acao="excluir" />
            <Botao texto="Cancelar" aoClicar={() => setAcao('Nenhuma')} acao="cancelar" />
        </div>
    );
}

export default Exemplo04;