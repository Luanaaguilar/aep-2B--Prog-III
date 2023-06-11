import { describe, test, expect } from '@jest/globals' 
import { Matemagica } from "../../src/atividade01/matemagica"

describe('Subtração', () => {

    test('Deve receber dois números para que retorne a subtração', () => {
        const matemagica = new Matemagica
        expect(matemagica.getSubtracao(75,50)).toBe(25)
    })

})