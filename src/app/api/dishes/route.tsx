const handler = async (req: Request) => {
    // TODO get dishes from internet with given categories https://www.tasteatlas.com/best/foods-by-categor use cheerios
    // TODO get recipes from GCP
    // TODO store recipes in db
    // TODO generate list of products to buy :) (all from gcp ;) )

    if (req.method === 'POST') {
        // TODO get from db
        const {dishes}: {dishes: string} = await req.json();

        console.log(dishes);

        return new Response(
            JSON.stringify({name: 'Spaghetti Carbonara'}), {
                headers: {"content-type": "application/json"},
                status: 200
            });
    } else {
        return new Response(
            JSON.stringify({error: 'Method Not Allowed'}), {
                headers: {"content-type": "application/json"},
                status: 405
            });
    }
}

export {handler as POST};