import { describe, test, expect } from '@jest/globals'
import { Matemagica } from '../../src/atividade01/matemagica'

describe('Somatória',() => {

    test('Deve receber dois números para que retorne a somatória',() =>{
        const matemagica = new Matemagica()
        expect(matemagica.getSoma(10,10)).toBe(20)
    })
    
})