const GstCategory = require("../../models/gst_category")

module.exports.getGstCategory = async (req, res) => {
    try {
        const gst_categories = await GstCategory.find();
        return res.status(200).json({
            message: "All Product Gst Categories",
            categories: gst_categories
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.addGstCategory = async (req, res) => {
    try {
        await GstCategory.create(req.body).then((err, doc) => {
            return res.status(200).json({
                message: "Category Added!"
            });
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}