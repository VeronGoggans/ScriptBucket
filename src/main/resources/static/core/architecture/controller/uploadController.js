import { UploadView } from "../view/uploadView.js";


export class UploadController {
    async reboot()
    {
        this.view = new UploadView();
    }
}