

const scriptBucketTemplate = `
    <div class="script-bucket-view">
        <div class="search-container">
            <div class="searchbar-component">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search for scripts" spellcheck="false">
            </div>
            <button class="new-script-button">New</button>
        </div>
        <div class="script-table-container">

        </div>
    </div>
`

const uploadTemplate = `
    <div class="upload-view">
        <button class="back-button"><i class="bi bi-arrow-left"></i>Back</button>
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