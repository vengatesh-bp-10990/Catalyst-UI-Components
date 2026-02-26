import { Route } from "@slyte/router";
import { ZcatButtonComp } from "../../components/javascript/zcat-button-comp";

class Index extends Route {
    render() {
        return { outlet: "#outlet", component: ZcatButtonComp };
    }

    static actions() {
        return {};
    }
}

export { Index };
