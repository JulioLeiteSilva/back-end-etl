import cron from "node-cron";
import { makeGetDailyUsersConstroller } from "../../factories/controller/makeGetDailyUsersController";

export function getAllSaveDailyUsersCron() {
  const DailyUsersConstroller = makeGetDailyUsersConstroller();

  return cron.schedule("0 3 * * *", async () => {
    await DailyUsersConstroller.execute();
  });
}
