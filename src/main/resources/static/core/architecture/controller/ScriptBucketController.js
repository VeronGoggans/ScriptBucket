import { ScriptBucketView } from "../view/scriptBucketView.js";



export class ScriptBucketController {
    async reboot()
    {
        this.view = new ScriptBucketView()
    }
}