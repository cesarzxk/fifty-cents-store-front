<h1 align="center">
  <img alt="Logo" src="https://res.cloudinary.com/dnqsgv3l1/image/upload/v1724305600/Logo_ofvl2y.svg" width="300px">
 
</h1>

<h3 align="center">
  Uma aplicação ReactJs.
</h3>

<p align="center">O melhor lugar para realizar suas compras!</p>

<p align="center">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/cesarzxk/fifty-cents-store-front?color=yellow">

  <a href="https://www.linkedin.com/in/cs-vargas/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-César%20Vargas-yellow">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/cesarzxk/fifty-cents-store-front?color=yellow">

  <a href="https://github.com/cesarzxk/fifty-cents-store-front/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/cesarzxk/fifty-cents-store-front?color=yellow">
  </a>

  <a href="https://github.com/cesarzxk/fifty-cents-store-front/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/cesarzxk/fifty-cents-store-front?color=yellow">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/cesarzxk/fifty-cents-store-front?color=yellow">

</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-capturas-de-tela-via-web">Capturas Web</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-capturas-de-tela-via-web-mobile">Capturas Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-testes---coverage">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-iniciar-">Iniciar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir-">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 💇🏼 Sobre o projeto

Essa aplicação visa solucionar um problema imposto via um desafio fullstack, onde foi realizado a criação de uma interface funcional de um marketplace, onde é possível realizar operações em conjunto a um back-end de filtragem, pedidos e consultas de pedidos.

## 📸 Capturas de tela via Web

Imagens do aplicativo em operação via desktop.

<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dnqsgv3l1/image/upload/v1724305030/Captura_de_tela_2024-08-22_023147_wgzdlt.png" width="300px">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dnqsgv3l1/image/upload/v1724305030/Captura_de_tela_2024-08-22_023219_u9baks.png" width="300px">
</p>
<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dnqsgv3l1/image/upload/v1724305029/Captura_de_tela_2024-08-22_023333_qxf670.png" width="300px">

</p>
## 📸 Capturas de tela via Web Mobile

Imagens do aplicativo em operação via mobile.

<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dnqsgv3l1/image/upload/v1724305030/Captura_de_tela_2024-08-22_023457_a0jkkb.png" width="170px">
<img alt="ScreenShot01" src="https://res.cloudinary.com/dnqsgv3l1/image/upload/v1724305030/Captura_de_tela_2024-08-22_023204_szvxtg.png" width="170px">
<img alt="ScreenShot01" src="https://res.cloudinary.com/da91uwz7j/image/upload/v1648641301/prints/mobile/Screenshot_2022-03-30-08-52-05-201_com.android.chrome_prlsxq.jpg" width="170px">

</p>

## 🚀 Tecnologias

As seguintes tecnologias que foram utilizadas para desenvolver esse projeto:

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [Chakra-ui](https://chakra-ui.com/)
- [Testing Library](https://testing-library.com/docs/)
- [Jest](https://jestjs.io/)
- [Bun](https://bun.sh/)
- [TanStack Query](https://tanstack.com/query/latest)

## 🧪 Testes - Coverage

<p align="justify">Nesse projeto foi implementado testes em todos componentes e containers de extensão tsx.  Adicionalmente, foi utilizado uma ferramenta de cobertura, que demonstra a cobertura dos testes realizados como demonstrado a seguir <a href="https://cesarzxk.github.io/fifty-cents-store-front/">aqui</a>.</p>

<p align="center">
<img alt="ScreenShot01" src="https://res.cloudinary.com/da91uwz7j/image/upload/v1648645074/prints/mobile/Captura_de_tela_2022-03-30_095617_sejlzb.png" width="800px">
</p>

## 💻 Como iniciar ?

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [back-end](https://github.com/cesarzxk/fifty-cents-store-back)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/cesarzxk/fifty-cents-store-front.git
```

**Por padrão o projeto não iniciará no modo desenvolvimento para isso acesse /src/Api como demonstrado a baixo:**

```ts
//index.ts

const development = true;

//todas as rotas podem ser modificadas a partir desse arquivo.
```

**Após as devidas alterações siga o passo a baixo**

```bash
# Para instalar as dependências
$ bun i

# Ao finalizar, rodar o web-app
$ bun start
```

## 🤔 Como contribuir ?

**Fazer um fork desse repositório**

```bash
# Fork via GitHub linha de comando
# Se não possui GitHub CLI, use o website para isso.

$ gh repo fork cesarzxk/fifty-cents-store-front

```

**Siga os passos a baixo**

```bash
# Clone para seu fork
$ git clone your-fork-url && cd fifty-cents-store-front

# Crie uma branch com sua feature
$ git checkout -b my-feature

# Faça um commit com suas alterações
$ git commit -m "Minha nova feature"

# Envie o codigo para sua branch remota
$ git push origin my-feature
```

Após seu o merged do seu pull request, você poderá excluir sua branch.

## 📝 Licença

Esse projeto possui licença Apache 2.0 - veja sobre [LICENSE](LICENSE) arquivo para detalhes.

---

Feito por 💜 &nbsp;César Vargas 👋 &nbsp;[Veja meu linkedin](https://www.linkedin.com/in/cs-vargas/)
