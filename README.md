# 🧩 Angular Microfront-ends PoC

Este repositório contém uma **Prova de Conceito (PoC)** dedicada ao estudo e implementação de uma arquitetura de **Microfront-ends** utilizando **Angular** e **Webpack Module Federation**.

O objetivo principal deste projeto é demonstrar a descentralização de aplicações web, onde diferentes domínios de negócio (Vendas, Produtos e Gráficos) operam de forma independente, mas são integrados em uma única *Single Page Application* (SPA) através de um Shell.

![Visão Geral da Arquitetura]<img width="1900" height="887" alt="{5DC73768-55B8-47D7-B8CC-D69B22E12BBC}" src="https://github.com/user-attachments/assets/9d4477b9-1381-43b4-87ff-ad88c910ba6e" />
> *Visão geral da aplicação Shell integrando os módulos remotos.*

---

## 🏗️ Estrutura da Solução

O projeto foi dividido em três aplicações distintas para simular um ambiente corporativo real com times distribuídos:

| Aplicação | Tipo | Porta | Descrição |
| :--- | :--- | :--- | :--- |
| **🛍️ Vendas** | `Shell (Host)` | `4200` | Aplicação principal que orquestra e carrega os microfront-ends dinamicamente. Contém a Navbar e a estrutura base. |
| **📦 Produtos** | `Remote` | `4201` | Microfront-end responsável pela listagem de itens e lógica de carrinho. Expõe componentes para o Shell. |
| **📊 Gráfico** | `Remote` | `4202` | Microfront-end focado em analytics e visualização de dados (Chart.js). |

---

## 🛠️ Tecnologias Utilizadas

* **Angular 20+** (Framework Core)
* **Webpack 5 Module Federation** (Orquestração de módulos)
* **@angular-architects/module-federation** (Plugin de integração)
* **Chart.js** (Visualização de dados)
* **TypeScript**

---

## 🚧 Status do Projeto

⚠️ **Nota:** Este é um projeto focado estritamente na **arquitetura de software** e na comunicação entre micro-aplicações.
Atualmente, a interface visual é minimalista (MVP), focada na funcionalidade da **Navbar** e no carregamento correto dos módulos remotos, sem estilização avançada ou regras de negócio complexas.

![Exemplo de Navegação]<img width="1911" height="480" alt="{23C1A9EE-AD2E-421F-8EF1-1C7A359F82B0}" src="https://github.com/user-attachments/assets/276e763f-6485-4aba-a1f1-ba0228e40195" />

> *Navegação entre os módulos Produtos e Gráfico.*

---

## 🚀 Como Executar

Como se trata de uma arquitetura distribuída, é necessário executar as aplicações simultaneamente.

### Pré-requisitos
* Node.js (Versão LTS recomendada)
* Angular CLI

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Welberrr/seu-repositorio.git](https://github.com/Welberrr/seu-repositorio.git)
Instale as dependências e rode cada projeto (em terminais separados):

Terminal 1 (Produtos - Remote):

Bash

cd produtos
npm install
npm start
# Rodando em http://localhost:4201
Terminal 2 (Gráfico - Remote):

Bash

cd grafico
npm install
npm start
# Rodando em http://localhost:4202
Terminal 3 (Vendas - Shell):

Bash

cd vendas
npm install
npm start
# Acesse a aplicação final em http://localhost:4200
