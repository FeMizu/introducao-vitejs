import { useState } from 'react';
import Botao from './botao';
import styles from './index.module.css';

function Exemplo04() {
    const [acao, setAcao] = useState('Nenhuma');

    return (
        <div className={styles.container}>
            <h1>Atividade 3 - Uso de componentes</h1>

            <h2 className=''>O valor atual é: {contador}</h2>

            {/* Passando funções e textos via Props para o componente Botao */}
            <Botao texto="Diminuir -" aoClicar={decrementar} acao={'-'} />
            <Botao texto="Aumentar +" aoClicar={incrementar} acao={'+'} />
        </div>
    );
}

export default Exemplo04;