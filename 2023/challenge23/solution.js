function organizeChristmasDinner(dishes) {
    const ingredients = {}

    for (let dish of dishes)
        for (let ingredient of dish.slice(1))
            ingredients[ingredient] ?
                ingredients[ingredient].push(dish[0]) :
                ingredients[ingredient] = [dish[0]]

    let output = []
    for (let key of Object.keys(ingredients).sort())
        if (ingredients[key].length > 1)
            output.push([key, ...ingredients[key].sort()])

    return output
}

module.exports = organizeChristmasDinner