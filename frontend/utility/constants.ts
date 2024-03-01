import { loadServerIP, loadPort } from './helpers';

async function initializeServerUrl(){
  const SERVER_IP = await loadServerIP();
  const SERVER_PORT = await loadPort();
  return `http://${SERVER_IP}:${SERVER_PORT}`
}

export const serverUrl = initializeServerUrl();
serverUrl.then(url => console.log('Server URL:', url));
