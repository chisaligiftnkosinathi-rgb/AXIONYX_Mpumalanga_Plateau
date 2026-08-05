import { buildApp } from '../src/index';

let appInstance: any = null;

export default async function (req: any, res: any) {
  if (!appInstance) {
    appInstance = await buildApp();
    await appInstance.ready();
  }
  appInstance.server.emit('request', req, res);
}
