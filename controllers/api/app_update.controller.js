const AppUpdate = require("../../models/app_update");

module.exports.checkUpdate = async (req, res) => {
    try {
        const { appId } = req.query;
        if (!appId) {
            return res.status(400).json({
                message: "Invalid APP ID"
            })
        }
        // console.log(appId);
        const app = await AppUpdate.findOne({ app: appId }).sort({ createdAt: -1 });
        if (app) {
            return res.status(200).json({
                message: "App Found!",
                app: app
            });
        }
        return res.status(400).json({
            message: "No Updates Found!",
            app: null
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server error"
        });
    }
}

/*
    @Body {
        app: APP ID,
        name: APP NAME,
        description: APP Description,
        version: APP Version,
        link: APP Link
    }
*/
module.exports.addApplication = async (req, res) => {
    try {
        const newApp = await AppUpdate.create({ ...req.body });
        return res.status(200).json({
            message: "New Application Added!",
            app: newApp
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}