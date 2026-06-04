import camelCase from 'lodash/camelCase';

// BEGIN

/**
 * @param {Document} document
 */
const normalize = (document) => {

    document.body.getElementsByTagName("*")

    for (let element of document.body.getElementsByTagName("*")) {
        for (let className of element.classList)
            element.classList.replace(className, camelCase(className));
    }

}

export default normalize;
// END