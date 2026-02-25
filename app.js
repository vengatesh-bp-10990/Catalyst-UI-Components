import { Lyte } from "@slyte/core";
import { CatalystUIComponentsComponentRegistry } from "./components/component.js";
import { CatalystUIComponentsRouter } from "./router/router.js";
import { CatalystUIComponentsDb } from "./data-store/db.js";

class CatalystApp extends Lyte {
  lookups() {
    return [
      { component: CatalystUIComponentsComponentRegistry },
      { router: CatalystUIComponentsRouter },
      { db: CatalystUIComponentsDb }
    ];
  }
}

export { CatalystApp };
