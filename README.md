# Documentação do Projeto de Testes Automatizados para Saucedemo

Índice
1. [Desenvolvedora](#desenvolvedora)
2. [Tecnologias utilizadas](#1-tecnologias-utilizadas)
3. [Configuração para rodar o projeto](#2-configuração-para-rodar-o-projeto)
4. [Outras documentações](#3-outras-documentações)
5. [Versionamento, code review e padronização](#4-versionamento-code-review-e-padronização-git)
6. [Futuras Melhorias e Sugestões](#5-futuras-melhorias-e-sugestões)
7. [Agradecimentos](#agradecimentos)

## Desenvolvedora

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

6. Ver relatório de todos os testes:  
```bash
npx playwright show-report
```

---

## 3. Outras Documentações

No projeto, algumas documentações adicionais estão disponíveis para referência e melhor organização dos testes e funcionalidades.  

### Testes E2E

- Toda a documentação referente aos **testes automatizados (E2E)** está localizada na pasta `/docs`.

---

## 4. Versionamento, Code Review e Padronização Git

- Controle de versão: Git + GitHub  
- Versão inicial: 1.0.0  
  - Todos requisitos cumpridos e documentados
- Versão: 1.0.1
  - Correção da pipeline
- Todas as alterações foram commitadas e revisadas via pull request para manter a consistência do código, além de usar o Kanban para fins de organização de tarefas.

### Padrões de Desenvolvimento

#### 📂 Estrutura de Branches

Adotei o seguinte padrão:

- **frontend-[id-da-tarefa]/**

### ✅ Commits Semânticos

Utilizei o padrão **Conventional Commits** para manter o histórico limpo e informativo:

📌 **Nota:** Escrevo os verbos no **imperativo**. Isso descreve o que o commit faz, como uma instrução ou comando, por exemplo: _"Adiciona", "Corrige", "Ajusta"_.

| Tipo       | Descrição                                            | Exemplo de Mensagem                            |
| ---------- | ---------------------------------------------------- | ---------------------------------------------- |
| `feat`     | Adição de nova funcionalidade                        | `feat(frontend-12): adiciona mock do usuário`            |
| `fix`      | Correção de bugs                                     | `fix(frontend-14): corrige erro de exibição dos dados`            |
| `docs`     | Atualização ou criação de documentação               | `docs(frontend-12): atualiza README com padrões`            |
| `refactor` | Refatorações de código sem mudanças de comportamento | `refactor(frontend-11): simplifica lógica dos mocks`       |
| `test`     | Adição ou atualização de testes                      | `test(frontend-29): adiciona testes para componente Header` |
| `chore`    | Atualizações gerais (ex.: dependências, build)       | `chore(frontend-19): atualiza versão do PLaywright`       |
| `perf`     | Melhorias de performance                             | `perf(frontend-19): otimiza carregamento de dados`          |
| `revert`   | Reversão de um commit anterior                       | `revert(frontend-19): remove validação do nome de produto`            |

---

## 5. Futuras Melhorias e Sugestões

Durante o desenvolvimento deste projeto, identifiquei diversas oportunidades de evolução e aprimoramento para torná-lo ainda mais robusto, escalável e aderente a boas práticas de qualidade de software.

### 📈 Melhorias Técnicas e Estruturais
- **Adicionar novos tipos de testes:** incluir testes *smoke*, *não funcionais* (como de **acessibilidade** e **performance**) para ampliar a cobertura e garantir estabilidade.
- **Centralizar repositórios de testes:** criar um **repositório principal** que englobe os três repositórios de testes existentes (frontend e API), permitindo clonar e executar todas as suítes de testes com um único comando.  
  - Esse repositório também poderia conter:
    - Documentação unificada
    - Scripts automatizados de execução
    - Relatórios consolidados
- **Validação ortográfica e textual:** implementar testes automatizados que verifiquem **ortografia**, **gramática** e **conformidade com conteúdo pré-definido** (por exemplo, textos de interface).
- **Logging:** incluir logs estruturados para diferentes níveis de severidade:
  - **Info:** eventos importantes ou etapas concluídas com sucesso.
  - **Warning:** alertas sobre comportamentos inesperados que não quebram o teste.
  - **Error:** falhas críticas ou exceções, com rastreamento detalhado da origem do problema.

### 💡 Melhorias Funcionais
- **Testar responsividade:** desenvolver testes automatizados para validar o comportamento da aplicação em diferentes **resoluções e dispositivos** (mobile, tablet, desktop).
- **Criar validadores personalizados:** incluir validações automáticas de campos como:
  - **E-mail** (formato válido)
  - **Senha** (mínimo de caracteres, regras de negócio, complexidade)
  - **Campos obrigatórios e regras condicionais**
- **Expandir a cobertura de testes automatizados:**  
  - Testar funcionalidades adicionais, como **ordenação de produtos**, **filtros** e **fluxos alternativos de login**.
  - Garantir que as principais jornadas do usuário estejam protegidas contra regressões.
- **Notificações automáticas de falhas:** implementar envio de e-mail via **NodeMailer** na pipeline sempre que ocorrerem erros críticos nos testes, permitindo resposta rápida e acompanhamento das falhas.

### 📝 Considerações Finais
Essas sugestões representam o próximo passo natural para aprimorar a qualidade do projeto, aumentar a confiabilidade dos testes e tornar a manutenção mais eficiente e escalável.

---

## Agradecimentos

Gostaria de agradecer a **TagPlus** pela oportunidade de participar deste processo seletivo.  
Agradeço também a todos que irão avaliar o projeto, revisar código e fornecer feedbacks valiosos.

Foi uma experiência enriquecedora aplicar boas práticas de desenvolvimento e testes automatizados neste projeto.




