import React, { useState, useEffect } from 'react';

export default function ContadorCurtidas() {
    const [curtidas, setCurtidas] = useState(0);
    const [mensagemVisible, setMensagemVisible] = useState(false);

    useEffect(() => {
        if (curtidas >= 5) {
            console.log("Curtidas em alta! Limite atingido.");
            setMensagemVisible(true);
        } else {
            setMensagemVisible(false);
        }
    }, [curtidas]);

    const incrementar = () => {
        setCurtidas(prev => prev + 1);
    };

    return (
        <div className="like-card-light">
            <div className="like-header-light">
                <span className="like-category-light">Contador</span>
                <span className="live-badge-light">Ao Vivo</span>
            </div>

            <div className="like-display-light">
                <span className="like-count-light">{curtidas}</span>
                <span className="like-subtext-light">{curtidas === 1 ? 'interação registrada' : 'interações registradas'}</span>
            </div>

            <button className="like-button-light" onClick={incrementar}>
                <svg className="like-icon-light" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                Curtir Postagem
            </button>

            {mensagemVisible && (
                <div className="trending-alert-light">
                    <span className="alert-dot-light"></span>
                    <span className="alert-text-light">Em Alta!</span>
                </div>
            )}
        </div>
    );
}