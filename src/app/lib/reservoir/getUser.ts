import { reservoirLootCollectionSetId } from "@/constants/whiteListedContracts";

export const getUser = async ({ address }: { address: string }) => {

    try {
        const url = `https://api.reservoir.tools/users/${address}/tokens/v7?collectionsSetId=${reservoirLootCollectionSetId}`
        console.log(url)
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.RESERVOIR_API_KEY || '',
                'Access-Control-Allow-Origin': '*'
            },
        })
        const data: any = await res.json()
        return data
    } catch (error) {
        return error
    }
}