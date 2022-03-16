const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (arr) => arr.reduce((acc, curr) => acc + curr.split('').reduce((acc2, curr2) => curr2 === 'a' || curr2 === 'A' ? acc2 + 1 : acc2, 0), 0);

console.log(containsA(names));
