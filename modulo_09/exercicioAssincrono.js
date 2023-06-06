// exercício 1 callback simples
const imprimirMensagem = (mensagem, callback) => {
    console.log(mensagem);
    callback();
}

imprimirMensagem('Teste01', ()=>{
    console.log('Teste02');
});

const { rejects } = require('assert');
const { error } = require('console');
const { promises } = require('dns');
// exercício 2 leitura de Arquivo com callback

const fs = require('fs');
const { resolve } = require('path');

function lerArquivo(arquivo, callback){
    fs.readFile(arquivo, 'utf8', function(error, data){
        if (error) {
            console.error('erro ao tentar acessar arquivo', error.message);
            return;
        }
        callback(data);
    });
}

lerArquivo ('textoExercicio2.txt', (conteudo)=>console.log(conteudo));

// exercício 3 conceito basico de Promises

const p1 = new Promise(resolve => {
    setTimeout(()=>{
        resolve('PROMISE RESOLVIDA');
    }, 1000)
});

p1.then(console.log);

//exercício 4 Encadeamento de Promises

const promessa = new Promise (resolve => {
    setTimeout (()=>resolve('Olá'), 1000);
});

const promessa2 = new Promise (resolve => {
    setTimeout (()=>resolve('Mundo'), 2000);
});

promessa.then((result1)=>
    promessa2.then((result2)=> console.log(`${result1}, ${result2}`))
);

// exercício 5 tratamento de erros

const pErro = new Promise ((resolve, reject)=> {
    setTimeout(()=>{
        reject('Teste de erro');
    }, 2000);
});

 pErro.then(console.log)
 .catch(error=> console.error(error));

 // exercício 6 Promises All

const pUm = new Promise (resolve =>{
    setTimeout(()=>{
        resolve(1);
    }, 1000);
});
const pDois = new Promise (resolve =>{
    setTimeout(()=>{
        resolve(2);
    }, 2000);
});
const pTres = new Promise (resolve =>{
    setTimeout(()=>{
        resolve(3);
    }, 3000);
});

Promise.all([pUm,pDois,pTres]).then(console.log);

// exercício 7 async /await básico

// function pegarDadosNaApi (nomeDoUsuario) {
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve ({
//                 name: nomeDoUsuario,
//                 age: Math.floor(80* Math.random()),
//                 favorite_programming_languege: 'Javascript',
//             });
//         },2000);
//     });
// }

// async function buscarDados(nomeDoUsuario){
//     const resposta = await pegarDadosNaApi(nomeDoUsuario);
//     console.log(resposta);
// }

// buscarDados('Jhonathan');

// exercício 8 Tratamento de erros com async /await 

function buscarDados() {
    return new Promise ((resolve, reject) => {
        const numeroAleatorioEntre0e1 = Math.random();
        if (numeroAleatorioEntre0e1 > 0.5){
            resolve({
                color: '#51f',
                shape: 'rectangle',
            });
        }
        reject (new Error ("Error obtaining data"));
    });
}
async function obterDados () {
    try{
        const data = await buscarDados();
        console.log(data);
    }catch (error){
        console.error(error.mensagem);
    }
}
obterDados();

// exercicio numer 9 Async / await com promise.all()

async function buscarMultiplosDados() {
    const result = await Promise.all([
        new Promise((resolve) => {
        setTimeout(() => {
            resolve('dados1');
        }, 1000);
    }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('dados2');
        }, 1500);
    }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('dados3');
        }, 2000);
    }),
]);
    console.log(result);
}
buscarMultiplosDados();

// exercicio 10 async / await com tratamentos de erros

const times = ['Flamengo','Fluminense','Vasco','Botafogo','Corinthians','Santos','Internacional','Grêmio','São Paulo','Palmeiras','Cruzeiro','Grêmio','Atlético MG',];

function descobrirCampeaoBrasileiro2023() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroAleatorioEntre0e1 = Math.random();
            if (numeroAleatorioEntre0e1 < 0.2) {
                resolve(
                    Math.floor(times.length * Math.random())
                );  
            }
            reject(new Error('erro buscando o time campeão'));
        }, 1500); 
    });
}

async function obterDadosComFallback() {
    try {
        const indice = await descobrirCampeaoBrasileiro2023();
        console.log(
            `O time campeão do Campeonato Brasileiro de 2023 será o ${times[indice]}`
        );
    } catch (error) {
    console.error(error.message);
    console.log(
            'Já que não conseguimos adivinhar o time, vamos fazer a aposta mais lógica.O campeão será o Flamengo!!!'
        );
    }
}
obterDadosComFallback(0.3);