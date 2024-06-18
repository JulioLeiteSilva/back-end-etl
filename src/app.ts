import {getAllSaveDailyUsersCron} from "./app/cron/cron"

console.log("ETL is running");

class ManageCronJobs {
  private jobs = [getAllSaveDailyUsersCron];

  public run() {
    this.jobs.forEach((job) => job());
  }
}
new ManageCronJobs().run();
