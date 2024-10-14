const handler = async (req: Request) => {
    if (req.method === 'GET') {
        // TODO get from db

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

export {handler as GET};