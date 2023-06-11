import { describe, test, expect } from '@jest/globals'
import { Matemagica } from '../../src/atividade01/matemagica'

describe('Divisão', () => {

    test('Deve receber dois números para que retorne a divisão', () =>{
        const matemagica = new Matemagica
        expect(matemagica.getDivisao(90,9)).toBe(10)
    })

})