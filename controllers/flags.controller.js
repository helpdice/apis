const fs = require('fs');
const countries = require('../flags/countries.json');

module.exports.getAllFlags = async (req, res) => {
    try {
        const flags = Object.entries(countries).map(([country_code, country_name]) => ({
            name: country_name,
            url: `https://apis.helpdice.com/flags/w40/${country_code.toLowerCase()}.png`
        }));
        return res.status(200).json(flags);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}