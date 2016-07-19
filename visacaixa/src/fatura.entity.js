"use strict";
var movimentacoes_entity_1 = require('./movimentacoes.entity');
var Fatura = (function () {
    function Fatura() {
        this.movimentacoesNacionais = new movimentacoes_entity_1.Movimentacoes();
        this.movimentacoesInternacionais = new movimentacoes_entity_1.Movimentacoes();
    }
    return Fatura;
}());
exports.Fatura = Fatura;
//# sourceMappingURL=fatura.entity.js.map