import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, "não há arquivo no diretório"));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const enconding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
    console.log(texto);
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow("operação concluída"));
  }
}

// function pegaArquivo(caminhoDoArquivo) {
//   const enconding = "utf-8";
//   fs.promises
//     .readFile(caminhoDoArquivo, enconding)
//     .then((texto) => console.log(chalk.bold(texto)))
//     .catch((erro) => trataErro(erro));
// }

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf8";
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }

pegaArquivo("./arquivos/texto.md");
