var statusMessageElementID = "#status-message";
var inputTextFieldID = "#input-text";

function getInputText(){
    return $(inputTextFieldID).val();
}

function setStatusMessage(message){
    $(statusMessageElementID).text(message);
}

function resolvePalindrom(){
    var text = getInputText();
    if(text){
        var isPalindrom = testPalindrome(text);
        if(isPalindrom){
            setStatusMessage("Your input text is palindrome.");
        } else {
            setStatusMessage("Your input text isn't palindrome.");
        }
    } else {
        setStatusMessage("Please insert not empty string into the text field.");
    }
}