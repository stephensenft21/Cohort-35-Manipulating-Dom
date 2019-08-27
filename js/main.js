// console.log("Hello World");
// let name = "Stephen Senft";
// console.log("My name is", name);

// /*
//     This code will only return the first section component
//     even though there are three components with the same
//     class
// */
// const sectionEl = document.querySelector(".article__section")

// /*
//     This code will only return the third section component
// */
// const footerEl = document.querySelector(".article__footer")

// /*
//     Get reference to the section with the class of `smallText`
//     and remove that class. Then add a new class of `largeText`
// */
// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")





 
const E1 = document.querySelector(".article__header")
E1.textContent = "Welcome to Stephen's blog"
//Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const E2 = document.querySelectorAll(".article__header")

for (let i = 0; i < E2.length; i++) {
    E2[i].classList.add("important")

}
//Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const E3 = document.querySelector(".dashed")
console.log(E3)

//Obtain a reference the element with a class of dashed and remove it.

E3.classList.remove("dashed")


const E4 = document.querySelector(".article__footer")

//Obtain a reference the element with a class of article_footer and add the class of goldenrod it.


E4.classList.add("goldenrod")
console.log(E4)

 