import { Config } from "./config";
import logger from "./config/logger";

import app from "./app";

function startServer() {
  try {
    app.listen(Config.PORT, () => {
      logger.info(`✅ Server started on port ${Config.PORT}`);
    });
  } catch (error) {
    logger.error(
      `❌ Failed to Start the Server because of Error: ${error as string}`,
    );
    process.exit(1);
  }
}

startServer();
