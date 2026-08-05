import { buildApp } from './index';
import { loadConfig } from '@axionyx/kernel-runtime';

buildApp().then(app => {
    const config = loadConfig();
    if (config.profile !== 'compose') {
        app.listen({ port: process.env.PORT ? parseInt(process.env.PORT) : 3000 }, (err, address) => {
            if (err) {
                app.log.error(err);
                process.exit(1);
            }
            console.log(`Server listening on ${address}`);
        });
    } else {
        console.log('compose profile: stopping before listen for composition gate testing');
    }
}).catch(console.error);
