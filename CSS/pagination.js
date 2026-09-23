//CSS Pagination
/*
URl : https://www.amazon.in/s?k=microwave&crid=195M8YGAFQDL8&sprefix=microwave%2Caps%2C335&ref=nb_sb_noss_2

name:"Amazon.in : microwave"
Aria label:Page1
role:button


works fine:
aria-label="Go to page 1"
aria-label="Go to page 2"
aria-label="Go to page 3"

[aria-label*="Go to page"] - shows 4 results 

.s-pagination-item.s-pagination-button.s-pagination-button-accessibility:nth-child(2) -didnot work
a.s-pagination-item.s-pagination-button.s-pagination-button-accessibility:nth-child(2) -didnot work
[aria-label*="Go to page"]:nth-of-type(2) - didnot work



URL:https://www.flipkart.com/search?q=microoven&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=2

.jgg0SZ:first-child
.i2eZXn:nth-of-type(1)
.i2eZXn:nth-of-type(2)
.i2eZXn:nth-of-type(3)
.i2eZXn:nth-of-type(4)
.jgg0SZ:last-child




  */