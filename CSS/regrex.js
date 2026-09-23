//CSS Regex - that allow you to match elements based on partial string substrings

//CSS selectors using regex-like matching, CSS itself does not support regular expressions directly
/*

Here’s the full list of selectors:

    *: Matches any part of an attribute’s value
    ^: Matches the beginning of an attribute’s value
    $: Matches the end of an attribute’s value
    ~: Matches an attribute value that is space-separated (e.g., class~=“example” matches elements with the class “example” in a space-separated list of classes)
    |: Matches an attribute value that is hyphen-separated (e.g., lang|=“en” matches elements with the lang attribute set to “en” or starting with “en-”)

^: Matches the beginning of an attribute’s value (Starts with ^)
---------------------------------------------------
input[id^="user_"]

it matches :
<input id="user_12345" class="form-control" type="text">
<input id="user_67890" class="form-control" type="text">

Element:Amazon search 
CSS locator : input[id^="glow_"]


 *: Matches any part of an attribute’s value (Contains *)
---------------------------------------------
button[id*="button"]

it matches 
<button id="login_button_123">Login</button>
<button id="logout_button_456">Logout</button>

Element:Amazon search 
CSS locator : input[id^="glow_"]

<input id="nav-search-submit-button" type="submit" class="nav-input nav-progressive-attribute" value="Go" tabindex="0">
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">

$: Matches the end of an attribute’s value (Ends with $)
-------------------------------------------

input[id$="_123"]

It matches
<input id="username_123">
<input id="email_123">

Element:Amazon search 
CSS locator : input[id$="box"],input[id$="button"]

<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">
<input id="nav-search-submit-button" type="submit" class="nav-input nav-progressive-attribute" value="Go" tabindex="0">

~: Matches an attribute value that is space-separated
-------------------------------------------------------

input[id~="nav"]

----------------------------------------------------------------------------------------------------------------------

[aeiou]          # matches a, e, i, o, or u
[a-z]            # matches any lowercase letter
[A-Z]            # matches any uppercase letter
[0-9]            # matches any digit (same as \d)
[a-zA-Z]         # matches any letter
[a-zA-Z0-9]      # matches any alphanumeric character
[^aeiou]         # matches anything EXCEPT a vowel
[a-z&&[^aeiou]]  # (Java) lowercase consonants — intersection

const regex = /^[A-Z]/;
const test = "AB1234";
console.log(regex.test(test)); // true it matches start with uppercase letters 

const regex = /^[a-z]/;
const test = "AB1234";
console.log(regex.test(test)); // false there is no start with lowercase letters 

const regex = /[A-Z]/;
const test = "adB1234AB";
console.log(regex.test(test)); // true it matches AB uppercase letters

const regex = /[a-z0-9]/;
const test = "AB1234";
console.log(regex.test(test)); // true it matches number if loweercase or numbers 

const regex = /[^aeiou]/;
const test = "aAB1234";
console.log(regex.test(test)); // true a matches it

const regex = /[a-z&&[^aeiou]]/;
const test = "AaB1234";
console.log(regex.test(test)); // false as it search for lowercase letters and lowercase letters start with

const regex = /[A-Z][a-z]+/;
const test = "hello woRld";
console.log(regex.test(test)); //It matches if both uppercase and lowercase is there

const regex = /[A-Za-z]{3}/;
const test = "Call 555-1234 today";
console.log(regex.test(test));//matches 3 characters of upper or lowercase 

const regex = /[0-9]{3}-[0-9]{4}/;
const test = "Call 555-1234 today";
console.log(regex.test(test)); //matches "555-1234" true

const regex = /[a-z]{6} [0-9]{3}/;
const test = "call 555-1234 today";
console.log(regex.test(test)); // it matches loweercase of character 1 and numbers of 3 

const regex = /(\d{3})-(\d{2})-(\d{2})/; //\d{4} it means word limitation till 4 
const test = "2026-03-25";
console.log(regex.test(test));//true


const regex = /(\d{5})-(\d{2})-(\d{2})/; //\d{4} it means word limitation till 4 if till exceed to 5 then false
const test = "2026-03-25";
console.log(regex.test(test));//false



const regex = /hello/i
const test = "HellO";
console.log(regex.test(test));//true caseinsensitive it matches if input is HELLO, hello, HellO

    */