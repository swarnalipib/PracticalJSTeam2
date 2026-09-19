/*
CSS combinator  -CSS combinators define the relationship between two selectors.
Combinators are especially useful when you want to locate an element based on its relationship with another element.

1,Descendant combinator — space

The descendant selector It is created by simply separating two selectors with a single space.
Matches all elements that are descendants (children, grandchildren, etc.) of a specified parent element.

form input

 #nav-search-bar-form input
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="false" aria-haspopup="grid" spellcheck="false">

 .nav-searchbar .nav-input
 <input id="nav-search-submit-button" type="submit" class="nav-input nav-progressive-attribute" value="Go" tabindex="0">
->It looks inside .nav-searchbar and targets .nav-input

form [role="searchbox"]
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">


2.Child Combinator (>) Selects only elements that are the immediate, direct children of a specified parent element.

.nav-search-field > input
Find input that is a direct child of .nav-search-field.
<input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon.in" role="searchbox" aria-autocomplete="list" aria-controls="sac-autocomplete-results-container" aria-expanded="true" aria-haspopup="grid" spellcheck="false">


.nav-search-submit-text > input
<input id="nav-search-submit-button" type="submit" class="nav-input nav-progressive-attribute" value="Go" tabindex="0">

3.Adjacent Sibling selector(+) -The adjacent sibling selector selects an element that is immediately next to a specified element. This selector selects only the next sibling.

input + input

<input data-addnewaddress="add-new" id="ubbShipTo" name="dropdown-selection-ubb" type="hidden" value="add-new" class="nav-progressive-attribute">
<input id="glowValidationToken" name="glow-validation-token" type="hidden" value="hMxMCX6PXxzJr8rz7EukzYHvfElN+SIBnOSmGwKSB26EAAAAAGqu6vUAAAAB" class="nav-progressive-attribute">


.nav-search-dropdown + .nav-search-field
It finds .nav-search-field only if it is the very next sibling right after .nav-search-dropdown


4.General Sibling Combinator (~)
Finds input elements that occur after another input at the same parent level.











*/