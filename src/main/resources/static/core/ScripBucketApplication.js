import { router } from "./architecture/router.js";
import { eventBus, ScriptBucketEvents } from "./components/logic/eventBus.js";
import { RouteID } from "./utils/constants.js";




export class ScriptBucketApplication {

    constructor() {
        eventBus.listenFor({
            [ScriptBucketEvents.ROUTE_EVENT]: async (viewParameters) => await router.routeTo(viewParameters)
        })
    }

    async start() {
        await router.routeTo( { routeId: RouteID.SCRIPT_BUCKET_VIEW } );
    }
}
