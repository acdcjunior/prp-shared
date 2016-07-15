import { Movimentacoes } from './movimentacoes.entity';

export class Fatura {

    dataVencimento: string;
    encargosContratuais: string;
    encargosCash: string;
    encargosContratuaisMaximosParaOProximoPeriodo: string;
    encargosCashMaximosParaOProximoPeriodo: string;
    limiteCreditoTotal: string;
    linhaCreditoSaquesCash: string;
    totalDaFaturaAnterior: string;
    creditosEPagamentos: string;
    debitosEDespesas: string;
    totalNacional: string;
    cotacaoDolar: string;
    cotacaoDolarData: string;
    despesasInternacionais: string;
    totalInternacional: string;
    totalDaFatura: string;
    pagamentoMinimo: string;

    movimentacoesNacionais: Movimentacoes = new Movimentacoes();
    movimentacoesInternacionais: Movimentacoes = new Movimentacoes();

}