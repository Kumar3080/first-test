let chocolates = [
    {
        name: 'Silk',
        brand: 'Cadbury',
        price: 80
    },
    {
        name: 'Kitkat',
        brand: 'Nestle',
        price: 20
    },
    {
        name: 'Dairy Milk',
        brand: 'Cadbury',
        price: 20
    },
    {
        name: 'Milka',
        brand: 'German',
        price: 180
    },
    {
        name: 'Ferraro Rochers',
        brand: 'Rochers',
        price: 320
    },
    {
        name: 'Dark chocolates',
        brand: 'Amul',
        price: 100
    },
    {
        name: '5 star',
        brand: 'China',
        price: 10
    },
]
chocolates
function getchocolates(brand_name) {
    return(chocolates.filter(obj=>obj.brand===brand_name));
}
