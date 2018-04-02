import monk from 'monk';

const DB_URL = 'mongodb://mongo/development';

export const db = monk(DB_URL);
