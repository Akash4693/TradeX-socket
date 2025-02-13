import { CronJob } from "cron";
import axios from "axios";

const PORT = process.env.PORT || 4000; // Default port
const SERVER_URL =
  process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;

// Schedule a GET request every 14 minutes
const job = new CronJob("*/14 * * * *", async () => {
  try {
    console.log("Running cron job to keep the server active...");

    const response = await axios.get(SERVER_URL, { timeout: 5000 });

    console.log("Cron Job Response:", response.data);
  } catch (error) {
    console.error("Error in cron job request:", error.message);
  }
});

// Start the cron job
job.start();

export default job;