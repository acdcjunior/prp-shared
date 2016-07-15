import { Movimentacao } from './movimentacao.entity';

export class Movimentacoes {

    credito: Array<Movimentacao> = [];
    debito: Array<Movimentacao> = [];
    totalCredito: string = "0.00";
    totalDebito: string = "-0.00";

}