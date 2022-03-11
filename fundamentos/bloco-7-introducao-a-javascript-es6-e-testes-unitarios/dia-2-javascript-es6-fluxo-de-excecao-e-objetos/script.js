const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 56,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 69,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];

// 1 - Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares

const idEven = (arr) => {
  return arr.every((elemnet) => elemnet.id % 2 === 0);
};

console.log(idEven(techProducts));

// 2 - Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
// 3 - Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total