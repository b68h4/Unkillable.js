import { disableCriticalProcess, enableCriticalProcess } from "../";
import adminCheck from "admin-check";
(async () => {
  let isAdmin = await adminCheck.check();
  if (isAdmin) {
    enableCriticalProcess();
    console.log("Critical process enabled for 60 seconds");
    setTimeout(() => disableCriticalProcess(), 60000);
  } else {
    console.log("You are not an admin");
  }
})();
