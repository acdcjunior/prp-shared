"use strict";
var fatura_entity_1 = require("./fatura.entity");
var movimentacao_entity_1 = require("./movimentacao.entity");
var FaturaFake = (function () {
    function FaturaFake() {
    }
    FaturaFake.faturaExemplo = function () {
        var faturaExemplo = new fatura_entity_1.Fatura();
        faturaExemplo.dataVencimento = "2015-03-26";
        faturaExemplo.encargosContratuais = "12,55 %";
        faturaExemplo.encargosCash = "13,05 %";
        faturaExemplo.encargosContratuaisMaximosParaOProximoPeriodo = "14,55 %";
        faturaExemplo.encargosCashMaximosParaOProximoPeriodo = "15,05 %";
        faturaExemplo.limiteCreditoTotal = "18000.00";
        faturaExemplo.linhaCreditoSaquesCash = "3000.00";
        faturaExemplo.totalDaFaturaAnterior = "5719.78";
        faturaExemplo.creditosEPagamentos = "5859.91";
        faturaExemplo.debitosEDespesas = "4362.04";
        faturaExemplo.totalNacional = "4221.91";
        faturaExemplo.cotacaoDolar = "0.00";
        faturaExemplo.cotacaoDolarData = null;
        faturaExemplo.despesasInternacionais = "0.00";
        faturaExemplo.totalInternacional = "0.00";
        faturaExemplo.totalDaFatura = "4221.91";
        faturaExemplo.pagamentoMinimo = "515.40";
        faturaExemplo.movimentacoesNacionais.credito = [
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-26", "descritivo": "OBRIGADO PELO PAGAMENTO", "credito": "5000.00", "debito": "0.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-29", "descritivo": "OBRIGADO PELO PAGAMENTO", "credito": "859.79", "debito": "0.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-01", "descritivo": "AJUSTE CREDITO PARC. LOJI", "credito": "0.02", "debito": "0.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-03", "descritivo": "AJUSTE CREDITO PARC. LOJI", "credito": "0.10", "debito": "0.00" })
        ];
        faturaExemplo.movimentacoesNacionais.debito = [
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-29", "descritivo": "JUROS ROTATIVO", "credito": "0.00", "debito": "-9.35" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-19", "descritivo": "SUPER MERCADO P NORTE", "credito": "0.00", "debito": "-6.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-19", "descritivo": "OMEGA EXPRESSO", "credito": "0.00", "debito": "-15.84" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-19", "descritivo": "CARVALHO MOREIRA      01/02", "credito": "0.00", "debito": "-56.96" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-20", "descritivo": "BOB NELSON ABELARDO", "credito": "0.00", "debito": "-29.93" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-20", "descritivo": "LOJAS EL CASON", "credito": "0.00", "debito": "-46.94" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-20", "descritivo": "MARA ROBERTA J. KATA", "credito": "0.00", "debito": "-32.50" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-20", "descritivo": "PETLOVE COM BR", "credito": "0.00", "debito": "-167.37" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-20", "descritivo": "SUMUP*SELMA CORTI   01/03", "credito": "0.00", "debito": "-90.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-21", "descritivo": "MISTER PIZZA", "credito": "0.00", "debito": "-18.50" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-22", "descritivo": "MARA ROBERTA J. KATA", "credito": "0.00", "debito": "-33.30" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-22", "descritivo": "LAS VEGAS GRIL FOOD TR", "credito": "0.00", "debito": "-43.50" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-23", "descritivo": "GRILL BLUE", "credito": "0.00", "debito": "-34.90" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-23", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-167.62" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-23", "descritivo": "PE EFFE PRONTINHO", "credito": "0.00", "debito": "-19.14" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-25", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-276.78" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-26", "descritivo": "ESTACIONAMENTO PARKING", "credito": "0.00", "debito": "-5.80" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-26", "descritivo": "LOJAS AZUIL XY Z1   01/03", "credito": "0.00", "debito": "-76.54" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-27", "descritivo": "CONFEITARIA PERFEICAO", "credito": "0.00", "debito": "-60.29" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-28", "descritivo": "ABC CONVENIENCIA", "credito": "0.00", "debito": "-23.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-02-29", "descritivo": "SOH SAUDE FARMACIA    01/03", "credito": "0.00", "debito": "-44.12" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-01", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-247.18" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-02", "descritivo": "HASHIKO", "credito": "0.00", "debito": "-61.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-02", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-6.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-03", "descritivo": "LOJAS BOBNELSON AS 112", "credito": "0.00", "debito": "-120.40" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-03", "descritivo": "BRASILIA PARTIC PLANEJ", "credito": "0.00", "debito": "-6.10" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-03", "descritivo": "DVIDIE OVENO", "credito": "0.00", "debito": "-51.73" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-03", "descritivo": "FAMAROCR 429", "credito": "0.00", "debito": "-90.12" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-04", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-198.39" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-05", "descritivo": "CONFEITARIA PERFEICAO", "credito": "0.00", "debito": "-7.68" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-05", "descritivo": "OUTONOS GRAAL", "credito": "0.00", "debito": "-32.43" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-05", "descritivo": "STUFF*FOODTRUCKHAMBURGUER", "credito": "0.00", "debito": "-48.50" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-05", "descritivo": "MEU PET SHOPT", "credito": "0.00", "debito": "-49.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-09", "descritivo": "SUPERLOJAS COSMETICOS", "credito": "0.00", "debito": "-61.80" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-09", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-288.32" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-10", "descritivo": "SUPIMP COMBUSTIVEIS", "credito": "0.00", "debito": "-154.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-10", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-261.39" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-10", "descritivo": "VENDEDOR FAMILA", "credito": "0.00", "debito": "-36.71" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-11", "descritivo": "ANUIDADE XYZ        02/04", "credito": "0.00", "debito": "-81.25" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-03-11", "descritivo": "IOF BASE DE ROTATIVO", "credito": "0.00", "debito": "-1.44" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-04-02", "descritivo": "EMPRESAPAGA*CLIENT  12/12", "credito": "0.00", "debito": "-10.40" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-06-30", "descritivo": "AVOHAY              09/10", "credito": "0.00", "debito": "-31.43" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-07-03", "descritivo": "EMPRESAPAGA         09/12", "credito": "0.00", "debito": "-6.07" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-09-19", "descritivo": "BOBNELSO RENTER CAR 06/10", "credito": "0.00", "debito": "-146.84" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-27", "descritivo": "SUVACOWS            05/06", "credito": "0.00", "debito": "-41.62" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-30", "descritivo": "NOIAS ABROCS        05/10", "credito": "0.00", "debito": "-86.74" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-04", "descritivo": "BRA MODAS           04/06", "credito": "0.00", "debito": "-97.47" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-16", "descritivo": "BAOEBS              03/06", "credito": "0.00", "debito": "-62.45" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-19", "descritivo": "AJDIUUY COMERCIO EL 03/10", "credito": "0.00", "debito": "-117.89" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-23", "descritivo": "MUCHACHO 1212       03/03", "credito": "0.00", "debito": "-63.65" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-26", "descritivo": "MIXTEL DISTRIBUIDOR 03/12", "credito": "0.00", "debito": "-242.71" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-01-07", "descritivo": "AEW                 03/03", "credito": "0.00", "debito": "-169.33" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-01-20", "descritivo": "MUCHACHO 1212       02/02", "credito": "0.00", "debito": "-94.94" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-01-30", "descritivo": "NO WARSS            02/03", "credito": "0.00", "debito": "-128.68" })
        ];
        faturaExemplo.movimentacoesNacionais.totalCredito = "5859.91";
        faturaExemplo.movimentacoesNacionais.totalDebito = "-4362.04";
        return faturaExemplo;
    };
    FaturaFake.faturaExemploComInternacional = function () {
        var faturaExemploComInternacional = new fatura_entity_1.Fatura();
        faturaExemploComInternacional.dataVencimento = "2015-12-26";
        faturaExemploComInternacional.encargosContratuais = "11,55 %";
        faturaExemploComInternacional.encargosCash = "13,05 %";
        faturaExemploComInternacional.encargosContratuaisMaximosParaOProximoPeriodo = "13,55 %";
        faturaExemploComInternacional.encargosCashMaximosParaOProximoPeriodo = "15,05 %";
        faturaExemploComInternacional.limiteCreditoTotal = "18000.00";
        faturaExemploComInternacional.linhaCreditoSaquesCash = "3000.00";
        faturaExemploComInternacional.totalDaFaturaAnterior = "6582.34";
        faturaExemploComInternacional.creditosEPagamentos = "6582.44";
        faturaExemploComInternacional.debitosEDespesas = "6300.55";
        faturaExemploComInternacional.totalNacional = "6300.45";
        faturaExemploComInternacional.cotacaoDolar = "0.00";
        faturaExemploComInternacional.cotacaoDolarData = null;
        faturaExemploComInternacional.despesasInternacionais = "17.99";
        faturaExemploComInternacional.totalInternacional = "72.33";
        faturaExemploComInternacional.totalDaFatura = "6372.78";
        faturaExemploComInternacional.pagamentoMinimo = "962.43";
        faturaExemploComInternacional.movimentacoesNacionais.credito = [
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-26", "descritivo": "OBRIGADO PELO PAGAMENTO", "credito": "2000.00", "debito": "0.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-02", "descritivo": "OBRIGADO PELO PAGAMENTO", "credito": "4582.34", "debito": "0.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-03", "descritivo": "AJUSTE CREDITO PARC. LOJI", "credito": "0.10", "debito": "0.00" })
        ];
        faturaExemploComInternacional.movimentacoesNacionais.debito = [
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-27", "descritivo": "JUROS ROTATIVO", "credito": "0.00", "debito": "-105.85" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-04-02", "descritivo": "EMPRESAPAGA*CLIENT  09/12", "credito": "0.00", "debito": "-10.40" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-06-30", "descritivo": "AVOHAY              06/10", "credito": "0.00", "debito": "-31.43" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-07-03", "descritivo": "EMPRESAPAGA         06/12", "credito": "0.00", "debito": "-6.07" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-08-05", "descritivo": "MAIUSCULODDDD       05/05", "credito": "0.00", "debito": "-47.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-08-08", "descritivo": "ABRIL PPORPXOAU     05/05", "credito": "0.00", "debito": "-108.92" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-09-12", "descritivo": "BABR LOP ASOAOPR    03/05", "credito": "0.00", "debito": "-578.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-09-19", "descritivo": "BOBNELSO RENTER CAR 03/10", "credito": "0.00", "debito": "-146.84" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-09-30", "descritivo": "OUTRA LOJAA         03/03", "credito": "0.00", "debito": "-93.30" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-02", "descritivo": "SUPERCCC ACESSORIOS 03/03", "credito": "0.00", "debito": "-59.90" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-16", "descritivo": "LOJAS BOBNELSON 47  02/03", "credito": "0.00", "debito": "-102.40" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-16", "descritivo": "CAVALEIRO BOBNEL    02/02", "credito": "0.00", "debito": "-49.99" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-20", "descritivo": "SOH SAUDE FARMACIA  02/03", "credito": "0.00", "debito": "-40.96" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-27", "descritivo": "SUVACOWS            02/06", "credito": "0.00", "debito": "-41.62" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-30", "descritivo": "NOIAS ABROCS        02/10", "credito": "0.00", "debito": "-86.74" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-30", "descritivo": "BABACAUEAZM BRASIL  02/04", "credito": "0.00", "debito": "-109.80" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-10-31", "descritivo": "NOSTORES            02/03", "credito": "0.00", "debito": "-98.33" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-08", "descritivo": "BABACAUEAZM BRASIL  02/04", "credito": "0.00", "debito": "-116.99" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-11", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-358.04" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-11", "descritivo": "WHATERNTES", "credito": "0.00", "debito": "-61.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-14", "descritivo": "VENDEDOR ROSARIO 123", "credito": "0.00", "debito": "-32.92" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-14", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-184.75" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-14", "descritivo": "MERCADO GRANDE B", "credito": "0.00", "debito": "-42.26" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-16", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-27.38" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-17", "descritivo": "JASHIMO", "credito": "0.00", "debito": "-36.90" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-18", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-162.21" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-18", "descritivo": "LABORATORIO AQUI", "credito": "0.00", "debito": "-82.19" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-19", "descritivo": "LOJAFECHOUTI", "credito": "0.00", "debito": "-3.64" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-21", "descritivo": "AKAK MOVIES EX", "credito": "0.00", "debito": "-21.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-21", "descritivo": "SUPIMP COMBUSTIVEIS", "credito": "0.00", "debito": "-149.93" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-21", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-125.65" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-21", "descritivo": "MESTUFA BRIN", "credito": "0.00", "debito": "-61.50" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-21", "descritivo": "AKAK MOVIES EX", "credito": "0.00", "debito": "-29.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-22", "descritivo": "DDFAS FSDFASD", "credito": "0.00", "debito": "-14.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-23", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-153.73" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-24", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-119.43" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-25", "descritivo": "SUPERLOJAS COSMETICOS", "credito": "0.00", "debito": "-53.89" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-25", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-102.29" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-25", "descritivo": "JASHIMO", "credito": "0.00", "debito": "-40.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-26", "descritivo": "DFSADFSDFAD DD", "credito": "0.00", "debito": "-189.97" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-26", "descritivo": "SUPERLOJAS COSMETICOS", "credito": "0.00", "debito": "-61.80" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-26", "descritivo": "OUTONOS GRAAL", "credito": "0.00", "debito": "-46.11" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-26", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-21.80" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-27", "descritivo": "DDSFSDF SADFSDF", "credito": "0.00", "debito": "-47.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-28", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-57.54" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-30", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-36.99" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-11-30", "descritivo": "JHKHJ HJKHGJJ J", "credito": "0.00", "debito": "-119.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-01", "descritivo": "HJK HGJKJH", "credito": "0.00", "debito": "-31.26" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-01", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-91.48" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-03", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-91.35" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-03", "descritivo": "MUCHACHO 1212   01/02", "credito": "0.00", "debito": "-89.50" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-04", "descritivo": "HJK JH", "credito": "0.00", "debito": "-49.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-04", "descritivo": "HJKGHJKKJ", "credito": "0.00", "debito": "-1.85" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-04", "descritivo": "GHJKHJKGH JHK HJKJKHJ", "credito": "0.00", "debito": "-9.50" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-04", "descritivo": "YUIYTUI U", "credito": "0.00", "debito": "-138.40" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-04", "descritivo": "UYIUIY              01/02", "credito": "0.00", "debito": "-56.50" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-04", "descritivo": "BRA MODAS           01/06", "credito": "0.00", "debito": "-97.47" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-05", "descritivo": "WERQERWERQWEREWRQWE W", "credito": "0.00", "debito": "-10.80" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-05", "descritivo": "MEU PET SHOPT", "credito": "0.00", "debito": "-35.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-05", "descritivo": "OUTONOS GRAAL", "credito": "0.00", "debito": "-43.52" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-05", "descritivo": "NVBNBV VB NVBNBVNNVBNC", "credito": "0.00", "debito": "-47.40" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-05", "descritivo": "SDGJWOIU OIERTROI JKOI", "credito": "0.00", "debito": "-87.10" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-05", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-89.48" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-05", "descritivo": "LAVANDERIA BRASIL FLA", "credito": "0.00", "debito": "-89.12" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-06", "descritivo": "PIZZA AEWSX", "credito": "0.00", "debito": "-61.80" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-07", "descritivo": "VENDEDOR FAMILA", "credito": "0.00", "debito": "-91.08" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-07", "descritivo": "OPT007 213", "credito": "0.00", "debito": "-72.98" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-07", "descritivo": "AWEDSDS", "credito": "0.00", "debito": "-79.98" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-07", "descritivo": "SADSA ASDSDAS", "credito": "0.00", "debito": "-2.81" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-07", "descritivo": "DFGFG VERDE", "credito": "0.00", "debito": "-50.73" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-07", "descritivo": "DSFGSDFG FDGF       01/02", "credito": "0.00", "debito": "-112.85" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-08", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-310.84" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-09", "descritivo": "SUPERLOJAS COSMETICOS", "credito": "0.00", "debito": "-67.88" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-09", "descritivo": "FDSGFGPRESENTES     01/02", "credito": "0.00", "debito": "-50.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-10", "descritivo": "MERCADINHO ROTACAO", "credito": "0.00", "debito": "-12.98" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-10", "descritivo": "OUTONOS GRAAL", "credito": "0.00", "debito": "-48.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-11", "descritivo": "IOF BASE DE ROTATIVO", "credito": "0.00", "debito": "-3.43" })
        ];
        faturaExemploComInternacional.movimentacoesNacionais.totalCredito = "6582.44";
        faturaExemploComInternacional.movimentacoesNacionais.totalDebito = "-6300.55";
        faturaExemploComInternacional.movimentacoesInternacionais.credito = [];
        faturaExemploComInternacional.movimentacoesInternacionais.debito = [
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-09", "descritivo": "PAYPAL *INTERWEBSITE", "credito": "0.00", "debito": "-68.00" }),
            new movimentacao_entity_1.Movimentacao({ "data": "2015-12-09", "descritivo": "IOF COMPRA INTERNACIONAL", "credito": "0.00", "debito": "-4.33"
            })
        ];
        faturaExemploComInternacional.movimentacoesInternacionais.totalCredito = "0.00";
        faturaExemploComInternacional.movimentacoesInternacionais.totalDebito = "-17.99";
        return faturaExemploComInternacional;
    };
    return FaturaFake;
}());
exports.FaturaFake = FaturaFake;
//# sourceMappingURL=fatura.fake.js.map