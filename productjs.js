const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
console.log(category);


// Function to handle product page changes based on the category
function changeProductPage(categoryCode) {
    const cloths=document.querySelectorAll(".cloths .procduct-imege");
    if (categoryCode === "cl") {
        cloths.forEach((cl)=>{
            cl.style.backgroundImage='url("clo2.jpg")';

        })
    } 
    else if (categoryCode === "mo") {
        cloths.forEach((cl)=>{
            cl.style.backgroundImage='url("clth1.jpg")';

        })
    } 
    else if(categoryCode==="cat"){
        cloths.forEach((cl)=>{
            cl.style.backgroundImage='url("clo2.jpg")';

        })
    }
}

// Check the category value and call the function with the appropriate code
if (category === "mobile") {
    changeProductPage("mo");
} else if (category === "clothing") {
    changeProductPage("cl");
} 
else if(category==="pet"){
    changeProductPage("cat");
} 

/*----------------------------------------------------------*/

const procduct_cloths=[
    {},
    {},
    {},
    
]