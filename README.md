# ELO TRACKER

> Acompanhe suas metas de ranking em múltiplos jogos competitivos — tudo no navegador, sem cadastro, sem servidor.

---

## Sobre o Projeto

**ELO TRACKER** é uma Single Page Application (SPA) que permite registrar seu rank atual e definir metas de elo em 21 títulos competitivos. A aplicação funciona 100% no lado do cliente: nenhum dado é enviado para servidores externos.

A interface exibe o progresso global de metas atingidas, permite filtrar jogos por categoria e oferece um painel expandível com a distribuição estatística de jogadores por rank em cada título.

---

## Funcionalidades

- **Rastreamento de rank** — selecione seu elo atual e defina uma meta para cada jogo
- **Indicador de meta atingida** — o card muda visualmente (borda verde + badge) quando o rank atual alcança ou supera a meta
- **Progresso global** — barra no cabeçalho mostra quantas metas foram atingidas sobre o total
- **Distribuição de players** — painel expansível com barras animadas mostrando o percentual de jogadores em cada rank
- **Filtro por categoria** — filtre os cards por MOBAs, FPS, Hero Shooters, Battle Royale, Luta, etc.
- **Persistência automática** — o estado é salvo no `localStorage` do navegador sem qualquer ação do usuário

---

## Jogos Suportados

| Categoria | Títulos |
|---|---|
| MOBAs | League of Legends, Dota 2, Smite 2, Deadlock |
| FPS Competitivo | Valorant, CS2, Rainbow Six Siege, The Finals |
| Hero Shooters | Overwatch 2, Marvel Rivals |
| Battle Royale | Apex Legends, PUBG, Fortnite |
| Esporte | Rocket League |
| Jogos de Luta | Street Fighter 6, Guilty Gear Strive, Tekken 8, Mortal Kombat 1 |
| Corrida / Simulação | Assetto Corsa Competizione, iRacing |
| Outros | TFT, Osu! |

---

## Como Usar

### Opção 1 — Abrir direto no navegador

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd "Metas Jogos"

# Abra o arquivo no navegador
open index.html
# ou arraste o arquivo index.html para o navegador
```

> **Atenção:** Alguns navegadores bloqueiam o `localStorage` em arquivos abertos via `file://`. Recomenda-se usar um servidor local (ver opção abaixo).

### Opção 2 — Servidor local com VS Code

1. Instale a extensão **Live Server** no VS Code
2. Abra a pasta do projeto
3. Clique com o botão direito em `index.html` → **Open with Live Server**

### Opção 3 — Servidor local com Python

```bash
cd "Metas Jogos"
python3 -m http.server 8080
# Acesse http://localhost:8080
```

### Opção 4 — Servidor local com Node.js

```bash
npx serve .
# Acesse o endereço exibido no terminal
```

---

## Estrutura do Projeto

```
Metas Jogos/
├── index.html              # Ponto de entrada da aplicação
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos e design tokens
│   └── js/
│       └── script.js       # Lógica, dados e renderização
└── .gitignore
```

---

## Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — design tokens com Custom Properties, Grid, Flexbox
- **JavaScript ES6+** — vanilla JS, sem frameworks externos
- **localStorage API** — persistência de dados no navegador
- **Google Fonts** — Rajdhani (display) + DM Sans (texto)

---

## Personalização

### Adicionar um novo jogo

Abra `assets/js/script.js` e insira um objeto no array `GAMES`:

```javascript
{
  id: 'meu_jogo',           // identificador único (sem espaços)
  name: 'Nome do Jogo',     // exibido no card
  genre: 'Gênero',          // exibido abaixo do nome
  cat: 'fps',               // categoria para o filtro
  meta: 'Ouro',             // meta padrão ao criar o card
  ranks: [
    { n: 'Bronze',   p: 30 },  // n = nome do rank, p = % de jogadores
    { n: 'Prata',    p: 40 },
    { n: 'Ouro',     p: 20 },
    { n: 'Platina',  p: 10 },
  ],
  note: 'Texto de aviso opcional'  // aparece no rodapé do card
}
```

### Alterar a meta padrão de um jogo

Edite o campo `meta` do jogo desejado no array `GAMES`. O valor deve ser exatamente igual a um dos nomes (`n`) presentes em `ranks`.

### Trocar a chave do localStorage

Altere a constante `SK` no início de `script.js`. Isso reinicia o estado para todos os usuários da aplicação naquele navegador.

```javascript
const SK = 'elotracker_v3'; // incrementar ao quebrar compatibilidade de estado
```

---

## Compatibilidade

| Navegador | Versão Mínima |
|---|---|
| Chrome / Edge | 80+ |
| Firefox | 75+ |
| Safari | 13.1+ |

---

## Limitações Conhecidas

- Os dados de distribuição percentual de jogadores são estáticos e inseridos manualmente; não refletem a distribuição em tempo real dos servidores dos jogos.
- O sistema de rank do Deadlock é provisório, pois o jogo ainda não possui ranked oficial no momento da última atualização dos dados.
- O Osu! utiliza Performance Points (PP) em vez de elos tradicionais; a representação em ranks é uma aproximação por faixas de PP.
- Em navegadores com modo privado restritivo, o `localStorage` pode estar indisponível; o estado não será persistido entre sessões.

---