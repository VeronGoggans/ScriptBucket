import { router } from "../router.js";
import { RouteID } from "../../utils/constants.js";



export class UploadView {
    constructor() {
        this.#defineElements();
        this.#defineEvents();
    }

    #defineElements()
    {
        this.backButton = document.querySelector('.back-button');
    }


    #defineEvents()
    {
        this.backButton.addEventListener('click', async () => await router.routeTo({ routeId: RouteID.SCRIPT_BUCKET_VIEW }))
    }
}