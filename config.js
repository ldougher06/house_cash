'use strict';

console.log('****** in config.js *****')

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/bills';

module.exports = connectionString;
