const data = require('./data.json');



function AllDataByObject(params) {
    let arr = [];
    if (params === "undefined" || params === undefined || params === "") {
        data.map((dat) => {
            arr.push(dat);
        })
    } else {
        data.map((dat) => {
            if (
                dat.countryName.toLowerCase().search(params.toLowerCase()) !== -1 ||
                dat.currency.toLowerCase().search(params.toLowerCase()) !== -1 ||
                dat.iso_code.toLowerCase().search(params.toLowerCase()) !== -1
            ) {
                arr.push(dat);
            }
        })
    }
    return arr;
}
module.exports = AllDataByObject


function getCurrencyByCountry(params) {
    let result = null;
    if (params !== "undefined" || params !== undefined || params !== "") {
        data.map((dat) => {
            if (dat.countryName.toLowerCase().search(params.toLowerCase()) !== -1) {
                result = dat.currency;
            }
        })
    } else {
        result = null;
    }
    return result;
}
function getCountryByCurrency(params) {
    let result = null;
    if (params !== "undefined" || params !== undefined || params !== "") {
        data.map((dat) => {
            if (dat.currency.toLowerCase().search(params.toLowerCase()) !== -1) {
                result = dat.countryName;
            }
        })
    } else {
        result = null;
    }
    return result;
}
function getSymbolByCountry(params) {
    let result = null;
    if (params !== "undefined" || params !== undefined || params !== "") {
        data.map((dat) => {
            if (dat.countryName.toLowerCase().search(params.toLowerCase()) !== -1) {
                result = dat.symbol;
            }
        })
    } else {
        result = null;
    }
    return result;
}
function getSymbolByCurrency(params) {
    let result = null;
    if (params !== "undefined" || params !== undefined || params !== "") {
        data.map((dat) => {
            if (dat.currency.toLowerCase().search(params.toLowerCase()) !== -1) {
                result = dat.symbol;
            }
        })
    } else {
        result = null;
    }
    return result;
}
function getCountryNameByIso_code(params) {
    let result = null;
    if (params !== "undefined" || params !== undefined || params !== "") {
        data.map((dat) => {
            if (dat.iso_code.toLowerCase().search(params.toLowerCase()) !== -1) {
                result = dat.countryName;
            }
        })
    } else {
        result = null;
    }
    return result;
}
function getIso_codeByCountryName(params) {
    let result = null;
    if (params !== "undefined" || params !== undefined || params !== "") {
        data.map((dat) => {
            if (dat.countryName.toLowerCase().search(params.toLowerCase()) !== -1) {
                result = dat.iso_code;
            }
        })
    } else {
        result = null;
    }
    return result;
}
function getCurrencyNameByIso_code(params) {
    let result = null;
    if (params !== "undefined" || params !== undefined || params !== "") {
        data.map((dat) => {
            if (dat.iso_code.toLowerCase().search(params.toLowerCase()) !== -1) {
                result = dat.currency;
            }
        })
    } else {
        result = null;
    }
    return result;
}
