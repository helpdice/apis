const env = require('../../../../config/environment');
const State = require('../../../../models/states');

module.exports.getAllStates = async (req, res) => {
  try {
    const { country, search } = req.query;
    const filters = [{ country }, { search }];
    const queryObj = {};
    filters.forEach(filter => {
      Object.entries(filter).forEach(([key, value]) => {
        if (value) {
          if (key === 'country') {
            queryObj.country_name = value;
          } else if (key === 'search') {
            queryObj.name = {
              $regex: new RegExp(search, 'i'),
            };
          }
        }
      });
    });
    const result = await State.find({ ...queryObj });
    return res.status(200).json({
      message: `All States`,
      states: result,
    });
  } catch (err) {
      console.error('[API]: Error in getAllStates', err);
      return res.status(500).json({
        message: 'Internal Server Error',
        err: err.toString(),
      });
  }
};