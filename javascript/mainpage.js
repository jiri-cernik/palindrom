var statusMessageElementID = "#status-message";
var inputTextFieldID = "#input-text";

function getInputText(){
    return $(inputTextFieldID).val();
}

function setStatusMessage(message,background){
    if(!background){
        $(statusMessageElementID).css("background-color","white");
    } else {
        $(statusMessageElementID).css("background-color",background);
    }
    $(statusMessageElementID).text(message);
}

function resolvePalindrom(){
    var text = getInputText();
    if(text){
        var isPalindrom = testPalindrome(text);
        if(isPalindrom){
            setStatusMessage("Your input text is palindrome.","lime");
        } else {
            setStatusMessage("Your input text isn't palindrome.","red");
        }
    } else {
        setStatusMessage("Please insert not empty string into the text field.",null);
    }
}