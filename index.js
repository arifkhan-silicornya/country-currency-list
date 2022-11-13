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