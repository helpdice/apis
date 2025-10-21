const env = require('../../../../config/environment');
const City = require('../../../../models/cities');
const Countries = require('../../../../models/countries');
const State = require('../../../../models/states');

module.exports.getAllCountries = async (req, res) => {
  try {
      const { search } = req.query;
  
      const filters = [{ search }];
  
      const queryObj = {};
  
      filters.forEach(filter => {
        Object.entries(filter).forEach(([key, value]) => {
          if (value) {
            if (key === 'search') {
              queryObj.name = {
                $regex: new RegExp(search, 'i'),
              };
            }
          }
        });
      });

      const result = await Countries.find({ ...queryObj });
      
      return res.status(200).json({
        message: `All Countries`,
        countries: result,
      });
  } catch (err) {
      console.error('[API]: Error in getAllCountries', err);
      return res.status(500).json({
        message: 'Internal Server Error',
        err: err.toString(),
      });
  }
};

module.exports.getAddress = async (req, res) => {
  try {
    const { country: countryId, state: stateId, city: cityId } = req.query;
    // console.log(countryId, stateId, cityId);
    const country = await Countries.findById(countryId);
    const state = await State.findById(stateId);
    const city = await City.findById(cityId);
    return res.status(200).json({
      message: `All Address`,
      address: {
        country: country?.name,
        state: state?.name,
        city: city?.name,
        address: `${city?.name}, ${state?.name}, ${country?.name}`
      },
    });
  } catch (err) {
    console.error('[API]: Error in getAllAddress', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      err: err.toString(),
    });
  }
}