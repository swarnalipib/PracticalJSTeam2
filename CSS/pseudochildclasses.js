//CSS pseudo-class is a keyword added to a selector, prefixed by a single colon (:), that styles an element based on its  document position
//Child pseudo class - Child pseudo-classes match elements based on where they sit inside a parent container.


/*
1.First-child
2.last-child
3.nth-child
4.only-child
5.fist-of-type
6.last-of-type
7.nth-of-type

Suppose 

<div class=" A">
    <h1>This is heading1 </h1>      p:nth-child(2)
                                    p:nth-of-type(2)
    <p>This is paragraph1</p>
    <p>This is paragraph2</p> 
    <h1>This is heading2 </h1>
    <h1>This is heading3 </h1>
</div>
    <h1>This is heading4 </h1>
    <p>This is paragraph3</p>


<div class="B">
    <p>This is paragraph4</p>
</div>
    <p>This is paragraph5</p>


<div class="C">
    <p>This is paragraph6</p>
    <p>This is paragraph7</p>
    <p>This is paragraph8</p>
</div>
    <p>This is paragraph9</p>



1.first-child
-----------------
Targets an element if it is the very first child of its parent.

<style>
        P:first-child{
background : blue;
color: red;
        }
    </style>
//Output - It colors  This is paragraph4 ,This is paragraph6

2.last-child 
----------------
Targets an last element child its parent.

<style>
        P:last-child{
background : blue;
color: red;
        }
    </style>
//Output - It colors This is paragraph4 ,This is paragraph8

3.nth-child
-------------
 Targets elements based on a numeric index Example : nth-child(2) then second child of the parent

 <style>
        P:nth-child(2){
background : blue;
color: red;
        }
    </style>
//Output - It colors This is paragraph1 ,This is paragraph7

4.only-child
---------------
Targets an element if it has no sibling elements (it is the only child).

<style>
        P:only-child{
background : blue;
color: red;
        }
    </style>
//Output - It colors This is paragraph 4

5.first-of-type
----------------
targets at the tag name (e.g., p, div, h1) and selects the very first instance of that tag inside the parent container, regardless of what other elements come before it.


<style>
        P:first-of-type{
background : blue;
color: red;
        }
    </style>
//Output - It colors This is paragraph 1 ,This is paragraph 3,This is paragraph 4,This is paragraph 6



5.last-of-type
----------------
targets at the tag name (e.g., p, div, h1) and selects the last instance of that tag inside the parent container, regardless of what other elements come before it.


<style>
        P:last-of-type{
background : blue;
color: red;
        }
    </style>
//Output - It colors This is paragraph 2 ,This is paragraph 4,This is paragraph 8,This is paragraph 9

6.nth-of-type
-----------------
It counts only elements with the same tag name (type) inside a parent container.

<style>
        P:nth-of-type(2){
background : blue;
color: red;
        }
    </style>
//Output - It colors This is paragraph 2, paragraph 5,paragraph 7



*/