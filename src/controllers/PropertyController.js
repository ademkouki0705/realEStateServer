const Property = require('../models/Property');
const queryBuilder = require('../utils/queryBuilder');

const addProperty = async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProperty = async (req, res) => {
    const LIMIT = 10;

    // Extract pagination and sort
    const pageIndex = Number(req.query.page) || 0;
    const sortValue = Number(req.query.sort);

    // Extract filters (body)
    const filters = req.body.filters || {};
    const query = queryBuilder(filters);
    console.log(query,filters)

    // Validate sorting: allow only -1 or 1
    const sort = (sortValue === -1 || sortValue === 1) ? { price: sortValue } : {};

    try {
        const properties = await Property.find(query)
            .populate('agent city propertyType features')
            .skip(LIMIT * pageIndex)
            .limit(LIMIT)
            .sort(sort);

        res.status(200).json({
            page: pageIndex,
            count: properties.length,
            items: properties,
            hasMore: properties.length === LIMIT,
            query
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addProperty, getProperty };
