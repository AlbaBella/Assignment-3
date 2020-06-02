// 1) Select the section with an id of container without using querySelector.
const container=document.getElementById('container');
//console.log(container);

// 2) Select the section with an id of container using querySelector.
const querySelector=document.querySelector('#container');
//console.log(querySelector);

// 3) Select all of the list items with a class of "second".
const list=document.getElementsByClassName('second');
//console.log(list);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdlist=document.getElementsByTagName('ol')[0].getElementsByClassName('third');
//console.log(thirdlist);

// 5) Give the section with an id of container the text "Hello!".
//const greeting=document.getElementById('container').innerText="Hello!";


// 6) Add the class main to the div with a class of footer.
const addmain = document.getElementsByClassName('footer')[0].classList.add('main');


// 7) Remove the class main on the div with a class of footer.
const removemain=document.getElementsByClassName('footer')[0].classList.remove('main');

// 8) Create a new li element.
const newli=document.createElement('li');

// 9) Give the li the text "four".
newli.innerText="four";
//console.log(newli);

// 10) Append the li to the ul element.
document.getElementsByTagName('ul')[0].appendChild(newli);


// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const greenli=document.getElementsByTagName('ol')[0].getElementsByTagName('li')
for(let i=0;i<greenli.length;i++){
    greenli[i].style.backgroundColor="green"
}

// 13) Remove the div with a class of footer.
document.getElementsByClassName('footer')[0].remove();