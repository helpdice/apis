const env = require('../../../../config/environment');
const City = require('../../../../models/cities');

module.exports.getAllCities = async (req, res) => {
  try {
    const { state, search } = req.query;
  
      const filters = [{ state }, { search }];
  
      const queryObj = {};
  
      filters.forEach(filter => {
        Object.entries(filter).forEach(([key, value]) => {
          if (value) {
            if (key === 'state') {
              queryObj.state_id = value;
            } else if (key === 'search') {
              queryObj.name = {
                $regex: new RegExp(search, 'i'),
              };
            }
          }
        });
      });

      const result = await City.find({ ...queryObj });
      
      return res.status(200).json({
        message: `All Cities`,
        cities: result,
      });
  } catch (err) {
      console.error('[API]: Error in getAllCities', err);
      return res.status(500).json({
        message: 'Internal Server Error',
        err: err.toString(),
      });
  }
};