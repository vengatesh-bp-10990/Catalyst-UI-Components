import { Route } from "@slyte/router";
import { ZcatTypographyComp } from "../../components/javascript/zcat-typography-comp";
import { ZcatColorsComp } from "../../components/javascript/zcat-colors-comp";
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
