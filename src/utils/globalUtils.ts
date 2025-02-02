/**
 * @description define webpage title
 * @param {String} title a new web page title
 */
const setDocumentTitle = (title: string): void => {
    document.title = `WeBuildTogether - ${title}`;
}

export {
    setDocumentTitle
}