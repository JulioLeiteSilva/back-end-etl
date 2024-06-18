import { GetDailyUsersController } from "../../app/controller/GetDailyUsersController";
import { makeGetDailyUsersService } from "../services/makeGetDailyUsersService";
import { makeSaveDailyUsersService } from "../services/makeSaveDailyUsersService";
export function makeGetDailyUsersConstroller() {
  const getDailyUsersService = makeGetDailyUsersService();
  const saveDailyUsersService = makeSaveDailyUsersService();

  return new GetDailyUsersController(
    getDailyUsersService,
    saveDailyUsersService,
  );
}
