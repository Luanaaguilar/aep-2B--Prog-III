import { ErrorMessage } from "./errorMessage";

export class Matemagica{

    private soma(num1,num2){
        if (typeof num1 !== 'number' || typeof num2 !== 'number'){
            return ErrorMessage.PARAM_ERROR
        } else{
            return Number(num1) + Number(num2)
        }
    }

    getSoma(num1,num2){
        return this.soma(num1,num2)
    }

    private subtracao(num1,num2){
        if (typeof num1 !== 'number' || typeof num2 !== 'number'){
            return ErrorMessage.PARAM_ERROR
        } else{
            return Number(num1) - Number(num2)
        }
    }

    getSubtracao(num1,num2){
        return this.subtracao(num1,num2)
    }

    private divisao(num1,num2){
        if (typeof num1 !== 'number' || typeof num2 !== 'number'){
            return ErrorMessage.PARAM_ERROR
        } else{
            return Number(num1) / Number(num2)
        }
    }

    getDivisao(num1,num2){
        return this.divisao(num1,num2)
    }

    private multiplicacao(num1,num2){
        if (typeof num1 !== 'number' || typeof num2 !== 'number'){
            return ErrorMessage.PARAM_ERROR
        } else{
            return Number(num1) * Number(num2)
        }
    }

    getMultiplicacao(num1,num2){
        return this.multiplicacao(num1,num2)
    }

}