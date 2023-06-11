export class ArrayRandomValues {

    public buscaValorAleatorio(array, tamanhoArray) {

      let resultado: typeof array = [];

      while (resultado.length < tamanhoArray) {
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomObject: any = array[randomIndex];
        if (!resultado.includes(randomObject)) {
            resultado.push(randomObject);
        }
      }

      return resultado;
    }

}