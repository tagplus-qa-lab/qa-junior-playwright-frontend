# Documentação do Projeto de Testes Automatizados para Saucedemo

## 👥 Desenvolvedora

<table>
  <tr>
    <td align="center"><a href="https://github.com/AlineEspindola"><img src="https://avatars.githubusercontent.com/AlineEspindola" width="80px;" alt="Aline Espindola"/><br /><sub><b>Aline Espindola</b></sub></a><br /><a href="#" title="Code">💻🎨</a></td>
  </tr>
</table>

---

## 1. Tecnologias utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=.env&logoColor=black)  
![AJV](https://img.shields.io/badge/AJV-22B573?style=for-the-badge&logo=json&logoColor=white)

---

## 2. Configuração para rodar o projeto

> Antes de iniciar, **certifique-se de ter o Node instalado**.  

1. Clonar o repositório:  
```bash
git clone https://github.com/tagplus-qa-lab/qa-junior-playwright-frontend.git
cd qa-junior-playwright-frontend
```

2. Copiar o arquivo de exemplo de variáveis de ambiente:  
```bash
cp .env.example .env
```
> Esse arquivo já vem configurado com o link padrão do site Saucedemo, utilizado nos testes automatizados.
> Caso queira validar outro ambiente (como o de homologação ou produção), basta editar o valor da variável BASE_URL dentro do arquivo .env e inserir o novo endereço.

3. Instalar as dependências do projeto:  
```bash
npm i
```

4. Instalar os navegadores necessários do Playwright:  
```bash
npx playwright install
```

5. Executar todos os testes:  
```bash
npm test
```

---

## 🙏 Agradecimentos

Gostaria de agradecer a **TagPlus** pela oportunidade de participar deste processo seletivo.  
Agradeço também a todos que irão avaliar o projeto, revisar código e fornecer feedbacks valiosos.

Foi uma experiência enriquecedora aplicar boas práticas de desenvolvimento e testes automatizados neste projeto.




