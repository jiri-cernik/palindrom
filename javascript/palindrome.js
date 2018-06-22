/**
 * This method checks if passed string parameter is palindrom.
 * @param text : string
 * @returns {boolean}
 */
function testPalindrome(text){
    text = normalizeText(text);
    if(text && text.length > 0) {
        for (var i = 0; i < text.length; i++) {
            if (text.charAt(i) !== text.charAt(text.length - i - 1)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

/**
 * This method normalizes text for palindrom check processing. Method removes diacritics, whitespaces,
 *
 * @param text
 * @returns {string}
 */
function normalizeText(text){
    text = text.trim();
    text = text.normalize("NFD"); //decomposition of characters and diacritics
    text = text.replace(/([\u0300-\u036f])|(\s)/gm, ""); //removes whitespaces and leftover diacritics
    text = text.replace(/[^a-zA-Z0-9]/gm, ""); //removes special characters
    return text.toLowerCase();
}


if(typeof module !== 'undefined'){
    module.exports = {
        testPalindrome : testPalindrome,
        normalizeText : normalizeText
    }
}