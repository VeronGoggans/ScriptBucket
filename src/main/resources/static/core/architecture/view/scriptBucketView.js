import { RouteID } from "../../utils/constants.js";
import { router } from "../router.js";



export class ScriptBucketView {
    constructor() {
        this.#defineElements();
        this.#defineEvents();
    }

    #defineElements() 
    {
        this.newScriptButton = document.querySelector('.new-script-button');
    }


    #defineEvents() 
    {
        this.newScriptButton.addEventListener('click', async ()=> await router.routeTo({ routeId: RouteID.UPLOAD_VIEW }))
    }
}