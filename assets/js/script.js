function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');
    
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

//Promise

esperaAi('conexão com BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('frase 1', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('frase 3', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Você chegou, congratulations <3 !!', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta)
  })
  .catch(e => {
    console.log('ERRO:', e);
  })


const pessoas = [
  { nome: 'Bruno', idade: 20, gênero: 'homem' },
  { nome: 'Daniel', idade: 35, gênero: 'homem' },
  { nome: 'Maria', idade: 30, gênero: 'mulher' }
];

//filter,map

const quemMulher = pessoas
  .filter(obj => obj.gênero === 'mulher')
  .map(obj => obj.nome);
  

class controleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  //(1)método de instancia

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //(2)método estático

  static trocaPilha() {
    console.log('Ok, vou trocar.');
  }
}
//1
const controle1 = new controleRemoto
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1, quemMulher);
//2
controleRemoto.trocaPilha();

