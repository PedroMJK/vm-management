# 💻 Gestão de Máquinas Virtuais - Interface Web

Este projeto é uma **interface web desenvolvida com Angular 17** para **gestão e monitoramento de máquinas virtuais**, conectando-se a uma API REST mockada com **Java + Spring Boot**.



## 🚀 Funcionalidades propostas pelo desafio 

- 🔐 **Login com validação de credenciais**
- 📊 **Dashboard com gráficos de barra e pizza**
- 📃 **Listagem de máquinas virtuais com ações (start, pause, stop, delete)**
- 🧾 **Cadastro de novas máquinas virtuais com limite de 5 VMs**
- ✅ **Controle de status e persistência com LocalStorage**
- 🔒 **Proteção de rotas com AuthGuard**
- 🎨 **Interface moderna com SCSS**
- 📈 **Gráficos com Chart.js**

---

## 🧪 Tecnologias Utilizadas

### Frontend:
- [Angular 17](https://angular.io/)
- [SCSS](https://sass-lang.com/)
- [Chart.js + ng2-charts](https://valor-software.com/ng2-charts/)
- [Angular Router](https://angular.io/guide/router)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Backend (mock):
- [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Spring Boot 3](https://spring.io/projects/spring-boot)
- [Spring Web](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web)

---

## 📦 Estrutura do Projeto

```
📁 src
 ┣ 📁 app
 ┃ ┣ 📁 core
 ┃ ┃ ┗ 🛡️ guards
 ┃ ┃    ┗ auth.guard.ts
 ┃ ┣ 📁 pages
 ┃ ┃ ┣ 📁 login
 ┃ ┃ ┣ 📁 dashboard
 ┃ ┃ ┣ 📁 vms-list
 ┃ ┃ ┗ 📁 vms-create
 ┃ ┣ 📁 shared
 ┃ ┗ app.config.ts
 ┗ main.ts
```

---

## 🧑‍💻 Como Rodar o Projeto

### 🖥️ Backend (Spring Boot)

> Se desejar usar um backend REST real (mockado):

1. Vá até a pasta `backend`
2. Instale as dependências com Maven/Gradle
3. Execute a aplicação:

```bash
./mvnw spring-boot:run
```

A API será executada por padrão em `http://localhost:8080`.

---

### 🌐 Frontend (Angular)

1. Clone o projeto:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
ng serve
```

Acesse: `http://localhost:4200`

---

## 🧠 Usuário para Teste

Como o login ainda é mockado, simule um login no console do navegador:

```js
localStorage.setItem('authToken', '123');
```

Depois recarregue a página e acesse:  
👉 `http://localhost:4200/dashboard`

---

## 🧾 Observações

- O status das VMs é salvo e controlado via LocalStorage
- Gráficos são atualizados dinamicamente
- O limite máximo de VMs é de 5
- Todas as ações em VMs geram alertas para o usuário
- Projeto desenvolvido com foco em boas práticas de Angular

---

## 📁 .gitignore

Certifique-se de ter um `.gitignore` com os seguintes conteúdos básicos para projetos Angular:

```
node_modules/
dist/
.env
.angular/
```

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e pode ser utilizado como base para desafios e portfólio.  
Desenvolvido por **Pedro**.

---
