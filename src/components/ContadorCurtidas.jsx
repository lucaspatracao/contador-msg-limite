import React, { useState, useEffect } from 'react';

function ContadorCurtidas() {
    const [curtidas, setCurtidas] = useState(0);
    const [mensagemVisible, setMensagemVisible] = useState(false);

    useEffect(() => {
        // Efeito colateral: executa sempre que o estado 'curtidas' for atualizado
        if (curtidas >= 5) {
            console.log("Curtidas em alta! Limite atingido.");
            setMensagemVisible(true);
        } else {
            setMensagemVisible(false);
        }
    }, [curtidas]); // Dependência explícita e obrigatória para este monitoramento

    const incrementar = () => {
        setCurtidas(prev => prev + 1);
    };

    return (
        <div className="contador-card">
            <h2 className="contador-titulo">PRODUÇÃO INDUSTRIAL</h2>
            <p className="contador-subtitulo">Painel de Feedback e Engajamento da Planta</p>

            <div className="contador-display">
                <span className="contador-numero">{curtidas}</span>
                <span className="contador-label">{curtidas === 1 ? 'Curtida' : 'Curtidas'}</span>
            </div>

            <button className="contador-botao" onClick={incrementar}>
                Curtir Postagem
            </button>

            {mensagemVisible && (
                <div className="alerta-limite-ativo animate-fade-in">
                    Curtidas em alta!
                </div>
            )}
        </div>
    );
}

export default ContadorCurtidas;
