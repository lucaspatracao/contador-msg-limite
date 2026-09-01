# Guia do Projeto: Contador com Mensagem de Limite (`contador-msg-limite`)

Este guia apresenta a implementação completa, passo a passo, do componente React **`ContadorCurtidas`**. O projeto utiliza Hooks modernos do React (`useState` e `useEffect`) para monitorar o estado e disparar ações secundárias (efeitos colaterais) quando limites específicos são atingidos, além de seguir as melhores práticas industriais de estilo e controle de versão.

---

## 🎯 Conceitos Chave Aplicados

1. **Estado (`useState`)**: Responsável por reter e atualizar o número de curtidas em tempo real.
2. **Efeito Colateral (`useEffect`)**: Disparado sempre que o estado do contador muda. Ele observa a variável do estado usando o array de dependências `[curtidas]` e executa uma ação de verificação (exibindo um alerta, atualizando o console e ativando a mensagem em tela).
3. **Array de Dependências**: É crucial declarar `[curtidas]` para garantir que o efeito seja reavaliado de forma eficiente **apenas** quando o valor de curtidas mudar, evitando renderizações infinitas ou processamento desnecessário.

---

## 💻 Código-Fonte do Projeto

### 1. Componente React (`src/components/ContadorCurtidas.jsx`)
Crie a pasta `src/components/` se ela ainda não existir e crie o arquivo `ContadorCurtidas.jsx` com o seguinte código funcional e limpo:

```jsx
import React, { useState, useEffect } from 'react';

function ContadorCurtidas() {
  // Inicializa o estado das curtidas em zero
  const [curtidas, setCurtidas] = useState(0);
  // Estado para controlar a exibição da mensagem de alta na tela
  const [mensagemVisible, setMensagemVisible] = useState(false);

  useEffect(() => {
    // Esse efeito roda sempre que a variável 'curtidas' for atualizada
    if (curtidas >= 5) {
      // Exibe no console conforme instrução do exercício
      console.log("Curtidas em alta! Limite de 5 atingido.");
      
      // Ativa o estado que mostra a mensagem de destaque na tela
      setMensagemVisible(true);
    } else {
      setMensagemVisible(false);
    }
  }, [curtidas]); // Dependência correta para observar as alterações do contador

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
        👍 Curtir Postagem
      </button>

      {mensagemVisible && (
        <div className="alerta-limite-ativo animate-fade-in">
          🔥 Curtidas em alta!
        </div>
      )}
    </div>
  );
}

export default ContadorCurtidas;
```

---

### 2. Estilos Customizados (`src/App.css`)
Adicione estes estilos ao seu arquivo `src/App.css` para manter a identidade visual de alta qualidade do dashboard industrial (paleta de cores elegante: Azul-escuro, Azul-claro, Cinza Metálico e Verde de Alerta):

```css
body {
  margin: 0;
  padding: 0;
  background-color: #0D1B2A; /* Azul Escuro Industrial */
  font-family: 'Segoe UI', Roboto, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #E0E1DD;
}

.app-container {
  text-align: center;
}

.contador-card {
  background-color: #1B263B; /* Azul Claro */
  border: 2px solid #778DA9; /* Cinza Metálico */
  border-radius: 12px;
  padding: 35px;
  width: 320px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: transform 0.2s ease;
}

.contador-card:hover {
  transform: translateY(-4px);
}

.contador-titulo {
  font-size: 13px;
  letter-spacing: 3px;
  color: #778DA9;
  margin: 0 0 8px 0;
}

.contador-subtitulo {
  font-size: 11px;
  color: #E0E1DD;
  opacity: 0.7;
  margin-bottom: 25px;
}

.contador-display {
  background-color: rgba(13, 27, 42, 0.9);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(119, 141, 169, 0.3);
  margin-bottom: 25px;
}

.contador-numero {
  display: block;
  font-size: 64px;
  font-weight: 700;
  color: #E0E1DD;
  line-height: 1;
}

.contador-label {
  font-size: 12px;
  letter-spacing: 1.5px;
  color: #778DA9;
  text-transform: uppercase;
  margin-top: 5px;
  display: block;
}

.contador-botao {
  background-color: #778DA9;
  color: #0D1B2A;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.contador-botao:hover {
  background-color: #E0E1DD;
  transform: scale(1.02);
}

.contador-botao:active {
  transform: scale(0.98);
}

.alerta-limite-ativo {
  background-color: #2EC4B6; /* Verde Dinâmico de Sistema */
  color: #0D1B2A;
  padding: 10px;
  border-radius: 6px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  box-shadow: 0 4px 12px rgba(46, 196, 182, 0.3);
}

/* Animação suave para entrada do alerta */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
```

---

### 3. Integração (`src/App.js`)
Substitua o conteúdo de `src/App.js` para renderizar o componente que criamos:

```jsx
import React from 'react';
import ContadorCurtidas from './components/ContadorCurtidas';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ContadorCurtidas />
    </div>
  );
}

export default App;
```

---

## 🛠️ Passos do Git (Criação e Envio ao GitHub)

Siga os comandos de terminal abaixo sequencialmente na pasta raiz do seu projeto local para inicializar o repositório `contador-msg-limite` e publicá-lo:

1. **Abra o terminal na pasta raiz do seu projeto React.**
2. **Inicialize o versionamento local do Git:**
   ```bash
   git init
   ```
3. **Adicione os arquivos de código criados ao index de preparação:**
   ```bash
   git add .
   ```
4. **Crie o primeiro commit estruturado explicando o recurso:**
   ```bash
   git commit -m "feat: criar ContadorCurtidas com monitoramento de limites por useEffect"
   ```
5. **Ajuste o nome da branch principal para `main`:**
   ```bash
   git branch -M main
   ```
6. **Conecte seu repositório local ao novo repositório criado no GitHub** *(Substitua `SEU_USUARIO` pelo seu login real do GitHub)*:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/contador-msg-limite.git
   ```
7. **Envie as alterações locais de forma definitiva para o GitHub:**
   ```bash
   git push -u origin main
   ```

Seu repositório público estará publicado com sucesso em:  
`https://github.com/SEU_USUARIO/contador-msg-limite`