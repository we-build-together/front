/**
 * @description define webpage title
 * @param {String} title a new web page title
 */
function setDocumentTitle(title: string) {
    document.title = `WeBuildTogether - ${title}`;
}

export {
    setDocumentTitle
}