import cron from 'node-cron';
import updateCryptoData from '../services/updateCryptoData.service.js';
// Schedule a job to run every 2 hours
const scheduleCryptoJob = () => {
  cron.schedule(process.env.JOB_SCHEDULE_TIME || '0 */2 * * *', () => {
    console.log('Fetching cryptocurrency data...');
    updateCryptoData();
  });
};

export { scheduleCryptoJob };

