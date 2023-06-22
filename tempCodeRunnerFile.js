const filters = [undefined, undefined, 'good', undefined];
const pizzas=[
    {name: 'peperoni', category: 'hit'},
    {name: 'salami', category: 'bad'},
    {name: 'pfff', category: 'good'},
    {name: 'foo', category: 'good'},
    {name: 'bar', category: 'hit'},
    {name: 'baz', category: 'hit'},
]


const findPizzas = (filters,pizzas) => {
    if(filters.some((filter) =>filter !== undefined )){
        return pizzas.filter((pizza) => {
            if(filters.includes(pizza.category)){
                return pizza
            }
        })
    }else{
        return pizzas
    }

}

console.log(findPizzas(filters, pizzas));