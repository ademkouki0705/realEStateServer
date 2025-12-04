const filtersBuilder = (cities, propertyTypes, features) => {
    const filtersArray = [
        {
            key: 'city',
            label: 'City',
            options: cities.map(c => ({ id: c._id, label: c.label })),
        },
        {
            key: 'propertyType',
            label: 'Property Type',
            options: propertyTypes.map(pt => ({ id: pt._id, label: pt.label })),
        },
        {
            key: 'feature',
            label: 'Features',
            options: features.map(f => ({ id: f._id, label: f.label })),
        },
        {
            key: 'price',
            label: 'Price Range',
            options: [
                { id: 1, label: '$0---$100' },
                { id: 2, label: '$101---$200' },
                { id: 3, label: '$201---$300' },
                { id: 4, label: '$301---$400' },
            ]
            ,
        },
    ];

    return filtersArray;
};

module.exports = filtersBuilder;
