const City = require('../models/City');
const PropertyType = require('../models/PropertyType');
const Feature = require('../models/Feature');
const filterBuilder = require('../utils/filtersBuilder')


const getFilters = async (req, res) => {
    
    try {
        // 1. Fetch collections
        const cities = await City.find();
        const propertyTypes = await PropertyType.find();
        const features = await Feature.find();

        //filters builder
        const filters = filterBuilder(cities, propertyTypes, features)


        res.status(200).json(filters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getFilters };
