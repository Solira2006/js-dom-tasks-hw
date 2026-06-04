// BEGIN
export default function extractData(rootElement) {
    const parag = rootElement.getElementsByTagName('p');
    const paragtext = Array.from(parag).map(paragraph => paragraph.textContent.trim());
    return paragtext;
}
// END