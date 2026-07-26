import * as express from 'express';
import { NodeFactory } from '../../packages/node-factory/src/NodeFactory';
// Simple gateway stub
const app = express();
const factory = new NodeFactory();

app.get('/health', (req, res) => {
    res.json({ status: 'ACTIVE', nodes: factory.getActiveNodes().length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Gift's Hub Dispatcher listening on port ${PORT}`);
});
