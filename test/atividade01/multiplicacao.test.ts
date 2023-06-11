import { describe, test, expect } from '@jest/globals'
import { Matemagica } from '../../src/atividade01/matemagica'

describe('Multiplicação', () => {

    test ('Deve receber dois números para que retorne a multiplicação', () => {
        const matemagica = new Matemagica
        expect(matemagica.getMultiplicacao(9,8)).toBe(72)
    })

})