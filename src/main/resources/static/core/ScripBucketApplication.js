import { Router } from "./architecture/router.js";
import { EventBus } from "./components/logic/eventBus.js";
import { RouteID } from "./utils/constants.js";



export const eventBus = new EventBus();



export class ScriptBucketApplication {
    constructor() {
        this.router = new Router()
    }


    async start() {
        await this.router.routeTo( { routeId: RouteID.UPLOAD_VIEW } );
    }
}
