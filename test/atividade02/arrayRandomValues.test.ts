import { describe, test, expect } from '@jest/globals'
import { ArrayRandomValues } from '../../src/atividade02/arrayRandomValues'
import { ProdutosTypes } from '../../src/atividade02/types/produtos.types'


describe('Valores aleatórios', () => {
    const arrayRandomValues = new ArrayRandomValues()
    const produtos: ProdutosTypes[] = [
        { nome: "Caneta", qtde: 10, preco: 7.99 },
        { nome: "Impressora", qtde: 0, preco: 649.5 },
        { nome: "Caderno", qtde: 4, preco: 27.1 },
        { nome: "Lapis", qtde: 3, preco: 5.82 },
        { nome: "Tesoura", qtde: 1, preco: 19.99 },
        { nome: "Estojo", qtde: 7, preco: 9.99 },
        { nome: "Teclado", qtde: 2, preco: 609.99 },
        { nome: "Tenis", qtde: 3, preco: 350.99 },
        { nome: "Fone", qtde: 5, preco: 198.99 },
        { nome: "Mochila", qtde: 15, preco: 150.99 },
        { nome: "Lapiseira", qtde: 28, preco: 15.90 },
        { nome: "Fichário", qtde: 14, preco: 149.90 },
    ]

    test('Deve retornar um array de dados aleatórios do tamanho que for informado', () => {

        let randomProducts = arrayRandomValues.buscaValorAleatorio(produtos, 5)

        expect(randomProducts.length).toBe(5)
        console.log(randomProducts)
    })

})