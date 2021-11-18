//Exercicio 1
const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const functionNum = require('./num');
const functionEscreve = require('./escreve');

describe('Testa se a função num', () => {
  describe('ao receber um n > 0 retorna', () => {
    const res = functionNum(5);

    it('positivo em forma de string', () => {
      expect(res).equals('positivo');
      expect(res).to.be.a('string');
    })
  })
  describe('ao receber um n < 0 retorna', () => {
    const res = functionNum(-2);

    it('negativo em forma de string', () => {
      expect(res).equals('negativo');
      expect(res).to.be.a('string');
    })
  })
  describe('ao receber um n = 0 retorna', () => {
    const res = functionNum(0);

    it('neutro em forma de string', () => {
      expect(res).equals('neutro');
      expect(res).to.be.a('string');
    })
  })
  describe('ao receber parametro que é string retorna', () => {
   it('string e mensagem de espera numero', () => {  
     const param = functionNum('string');  
      expect(param).equals('o valor deve ser um número');
      expect(param).to.be.a('string');
    })
  })
})

describe('testa se a funão escreve', () => {
  
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => {
    fs.writeFileSync.restore();
  });

  it('se a func retorna string', () => {
    const resp = functionEscreve(nome, conteudo)
    expect(resp).to.be.a('string')
  })

  it('se a func retorna status ok', () => {
    const res = functionEscreve(nome, conteudo)
    expect(res). to.equal('ok');
  });
})

