/*

//CSS selectors are used to "find" (or select) the HTML elements you want to style.
This is the destination URL. Clicking the logo will take the user to the W3Schools homepage.

Url = href="https://www.amazon.in/""

1.ID Selector (#): Styles a single element identified by its unique id. 
<input id="tnb-google-search-input" type="text" placeholder="Search..." autocomplete="off" data-tnb-on-keydown="googleSearchKeyPress" data-tnb-on-input="searchWithSuggestions" data-tnb-on-focus="searchWithSuggestions" data-tnb-on-blur="searchFieldLostFocus" aria-label="Search field">

id="twotabsearchtextbox"
name="field-keywords"
placeholder="Search Amazon.in"

<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">
#twotabsearchtextbox

CSS Locator : input[id="tnb-google-search-input"]


2.Tag selector -Select all <input> elements
input
#nav-search-bar-form input

<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">

3.Class Selector (.): Applies styles to elements with a specific class attribute. 

class="nav-input nav-progressive-attribute"

<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">

.nav-input
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">

.nav-input.nav-progressive-attribute
class="nav-progressive-attribute"
<input id="glowValidationToken" name="glow-validation-token" type="hidden" value="hBuU4y/Neh9MVZrJlJ1ojSxAre+LKpikRHZwdJnPhoxFAAAAAGquha8AAAAB" class="nav-progressive-attribute">

4.Attribute -This selector matches all elements with the specified attribute

input[name="field-keywords"]
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">

5.Attritube + value
[attribute="value"] Selector -This selector matches elements with an attribute whose value is exactly equal to the specified value.

input[type="text"]

<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">


6.[attribute$="value"] Selector- This selector matches elements whose attribute value ends with the specified value.

input[name$="keywords"]
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">


input[name$="selection"]
<input data-addnewaddress="add-new" id="unifiedLocation1ClickAddress" name="dropdown-selection" type="hidden" value="add-new" class="nav-progressive-attribute">


7.[attribute^="value"] Selector This selector matches elements whose attribute value starts with the specified value.
input[name^="field"]
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">


input[name^="dropdown"]
<input data-addnewaddress="add-new" id="unifiedLocation1ClickAddress" name="dropdown-selection" type="hidden" value="add-new" class="nav-progressive-attribute">

8.[attribute="value"] Selector* -This selector matches elements whose attribute value contains the specified value anywhere within it.

input[name*="destination"]
<input id="glowDestinationType" name="glow-destination-type" type="hidden" value="IP2LOCATION" class="nav-progressive-attribute">

input[name*="ubb"]

<input data-addnewaddress="add-new" id="ubbShipTo" name="dropdown-selection-ubb" type="hidden" value="add-new" class="nav-progressive-attribute">

8.[attribute|="value"] -Exactly value, or starts with value followed by a hyphen -
Targeting specific language variations.

[lang|="en"] 


9.Multiple attributes

input[name="field-keywords"][type="text"]

<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="false" aria-haspopup="grid" spellcheck="false">

input[name="dropdown-selection"][type="hidden"]
<input data-addnewaddress="add-new" id="unifiedLocation1ClickAddress" name="dropdown-selection" type="hidden" value="add-new" class="nav-progressive-attribute">

input[name^="field"][type="hidden"]
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="false" aria-haspopup="grid" spellcheck="false">


10.Tag + ID
---------------------
Input having this ID
input#twotabsearchtextbox
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">

11.Tag+attribute 
---------------------
Input with specific attribute

input[name='field-keywords']
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">























*/