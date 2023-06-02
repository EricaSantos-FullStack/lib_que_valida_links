# Biblioteca validadora de links

Imagina que você está lendo uma matéria muito interessante e logo no final, o autor disponibilizou alguns links com ajuda e outras matérias que poderiam complementar o assunto.
Infelizmente alguns desses links não estão funcionando. Poxa, que frustração.
Agora imagina que o autor em questão é você. Seu publico está frustrado e você também está, porque descobriu que outros links também estão com o mesmo problema.

Ao invés de caçar cada link quebrado, que tal automatizar esse processo?
Você sabia que com a ajuda do Node.js podemos desenvolver um sistema que pode validar todos os links de um blog ou website? E melhor ainda, esse sistema já está pronto, basta instalar essa biblioteca no seu projeto e pronto, seus links serão checados!

#### 📌 Com essa lib você pode:

- ver todos os nomes e acessar os links
- ver o nome, link e status code

#### 🛠️ Ferramentas usadas:

- biblioteca Chalk: para ver os links e textos do terminal em outras cores. Facilitando a leitura.
- Node.js v18

#### 🤓 O que aprendi durante o projeto?

- Escrita em [Regex](https://www.mundojs.com.br/2018/06/14/como-usar-o-regex-no-javascript/) - utilizando [regex101](https://regex101.com/)
- CLI (Interface de Linha de Comando)
- [Flags](https://docs.npmjs.com/cli/v7/commands/npm-run-script#description)
- [Shebang](https://meleu.sh/shebang/)
- Tratar erros no terminal
- Como publicar uma lib no [npm](https://www.npmjs.com/)

#### 🖥 Exemplo de output:
![terminal1](https://github.com/EricaSantos-FullStack/lib_validade_links/assets/71906862/e045d348-05af-4814-9aa6-503239bb5a44)

#### Para validar um link use os comandos CLI

1. Comando para instalar a lib:
```
   npm install -g <nome-lib>
```

2. Comando para rodar o projeto:
```
npm run cli ./arquivos/ valida
```

✅ Na lib tem o exemplo de 2 arquivos em Markdown para teste.
