(function(module, undefined) {

    var KW_TO_HP_CONST = 0.746;

    function convertKWtoHP (kW) {
        var hp = kW / KW_TO_HP_CONST;

        return hp.toFixed(2);
    }

    if (module && module.exports) {
        module.exports = convertKWtoHP;
    } else {
        this.convertKWtoHP = convertKWtoHP;
    }
}(module));
