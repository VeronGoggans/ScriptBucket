import { ScriptBucketApplication } from "./core/ScripBucketApplication.js";



document.addEventListener("DOMContentLoaded", async () => {
    const app = new ScriptBucketApplication()
    await app.start();
})
