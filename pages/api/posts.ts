import axios from "axios"

const instance = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    headers: {"Content-Type": "application/json", "x-token-access": "random"}
})

export default (req: { method: string; body: any; }, res: { statusCode: number; json: (arg0: any) => void; }) => {
    if (req.method === "POST") {
        instance.post("posts",
            req.body)
            .then(result => {
                res.statusCode = 200;
                res.json(result.data)
            })
            .catch(error => {
                res.statusCode = 500;
                res.json(error)
            })
    }
}