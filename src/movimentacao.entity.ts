export class Movimentacao {

    data: string;
    descritivo: string;
    credito: string;
    debito: string;
    
    constructor({data, descritivo, credito, debito}) {
        this.data = data;
        this.descritivo = descritivo;
        this.credito = credito;
        this.debito = debito;
    }

}