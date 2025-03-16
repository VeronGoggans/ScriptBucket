

const scriptBucketTemplate = `

`

const uploadTemplate = `
    <div class="upload-view">
        <div class="file-selection-container">
            <form class="script-form">
                <i class="bi bi-cloud-arrow-up-fill"></i>
                <input type="file" hidden>
                <p>Browse for a script or drop one</p>
            </form>
        </div>
    </div>
`

const scriptTemplate = `

`


export const templates = {

    "script-bucket-view": scriptBucketTemplate,
    "script-view": scriptTemplate,
    "upload-view": uploadTemplate

}