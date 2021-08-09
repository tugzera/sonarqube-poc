import Fastify, { FastifyInstance } from 'fastify';

import { calculate } from './calculate';

const app: FastifyInstance = Fastify({
});

app.route({
    method: 'GET', url: '/', handler: (_req, res) => {
        res.send(JSON.stringify({ value: calculate(10) }))
    }
})

app.listen(3333, (error) => {
    if (error) throw new Error(JSON.stringify(error))

    console.log(`Server Running!!`)
})