const getInfo = "SELECT * FROM hodlinfo";
const getInfoByUnit = "SELECT * FROM hodlinfo WHERE name=$1";
const addInfo = "INSERT INTO hodlinfo (name, last, buy, sell, volume, base_unit) VALUES($1, $2, $3, $4, $5, $6)";
const removeInfo = "DELETE FROM hodlinfo WHERE name=$1;";

module.exports = {
    getInfo,
    getInfoByUnit,
    addInfo,
    removeInfo,
};