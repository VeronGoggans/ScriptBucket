import { RouteID } from "../utils/constants.js";
import {templates} from "../utils/templates.js";


export class Router {
    constructor() {
        this.viewElement = document.querySelector('.view')
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
                if (this.viewElement.children.length > 0) { // Ensures children exist
                    obs.disconnect(); // Stop observing once the view is loaded

                    switch (routeId) {
                        case RouteID.SCRIPT_BUCKET_VIEW:
                            break;

                        case RouteID.UPLOAD_VIEW:
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