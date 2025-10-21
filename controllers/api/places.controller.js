const Places = require("../../models/places")

module.exports.getPlaces = async (req, res) => {
    try {
        const places = await Places.find();
        return res.status(200).json({
            message: "All Places",
            places: places
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.addPlace = async (req, res) => {
    try {
        await Places.create(req.body).then((err, doc) => {
            return res.status(200).json({
                message: "Place Added!"
            });
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}