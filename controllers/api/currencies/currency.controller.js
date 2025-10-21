const env = require('../../../config/environment');
const Currency = require('../../../models/currencies/currency');

module.exports.getCurrencies = async (req, res) => {
  try {
    const { search } = req.query;
    const filters = [{ search }];
    const queryObj = {};
    filters.forEach(filter => {
      Object.entries(filter).forEach(([key, value]) => {
        if (value) {
          if (key === 'search') {
            queryObj.label = {
              $regex: new RegExp(search, 'i'),
            };
          }
        }
      });
    });
    const result = await Currency.find({ ...queryObj });
    return res.status(200).json({
      message: `All Currencies`,
      countries: result,
    });
  } catch (err) {
      console.error('[API]: Error in get Currencies', err);
      return res.status(500).json({
        message: 'Internal Server Error',
        err: err.toString(),
      });
  }
};