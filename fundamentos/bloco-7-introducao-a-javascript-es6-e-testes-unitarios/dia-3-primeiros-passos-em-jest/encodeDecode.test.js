const { encode, decode } = require('./encodeDecode');

describe('Para as funções encode e decode crie os seguintes testes em Jest', () => {

  it('Teste se encode e decode são funções', () => {
    expect(typeof encode || typeof decode).toBe('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('vamos ver a ultra iiiih')).toBe('v1m4s v2r 1 5ltr1 3333h');
    expect(decode('1qui n2st2 m5nd3nh4')).toBe('aqui neste mundinho');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('agora sim').length).toEqual(9);
    expect(decode('12345OI').length).toEqual(7);
  });
});