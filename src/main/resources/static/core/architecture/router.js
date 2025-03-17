import { RouteID } from "../utils/constants.js";
import { templates } from "../utils/templates.js";
import { ScriptBucketController } from "./controller/ScriptBucketController.js";
import { UploadController } from "./controller/uploadController.js";



class Router {
    constructor() {
        this.viewElement = document.querySelector('.view');
        this.scriptBucketController = new ScriptBucketController();
        this.uploadController = new UploadController();
    }

    /**
     *
     * @param viewParameters
     * @property viewParameters.routeId
     *
     */
    async routeTo(viewParameters = {}) {
        const routeId = viewParameters.routeId;

        return new Promise((resolve) => {
            const observer = new MutationObserver(async (mutations, obs) => {
                if (this.viewElement.children.length > 0) {
                    obs.disconnect();

                    switch (routeId) {
                        case RouteID.SCRIPT_BUCKET_VIEW:
                            await this.scriptBucketController.reboot()
                            break;

                        case RouteID.UPLOAD_VIEW:
                            await this.uploadController.reboot();
                            break;

                        case RouteID.SCRIPT_VIEW:
                            break;
                    }
                    resolve();
                }
            });

            // Observe the parent view element for child mutations
            observer.observe(this.viewElement, { childList: true });

            this.viewElement.innerHTML = templates[routeId];
        })
    }
}

export const router = new Router();