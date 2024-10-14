const dishesKey = "dishes";
export const addDish = (name: string) => {
    const dishes = getDishes();
    if (!dishes.includes(name)) {
        dishes.push(name);
        localStorage.setItem(dishesKey, JSON.stringify(dishes.join(";")));
    }
}

export const removeDishes = () => {
    localStorage.removeItem(dishesKey);
}

export const getDishes = (): string[] => {
    const dishesString: string= JSON.parse(localStorage.getItem(dishesKey) ?? '""');
    if (!dishesString) {
        return [];
    }
    return dishesString.split(";") ?? [];
}