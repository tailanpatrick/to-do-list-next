import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKET_URL);

export default pb;