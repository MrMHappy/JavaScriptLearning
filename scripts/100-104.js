//*********getElementById*********
//*********getElementById*********
let h1Elem = document.getElementById("title")
console.log(h1Elem)
//*********Get Attribute*********
console.log(h1Elem.getAttribute('align'))
console.log(h1Elem.getAttribute('id'))
//*********Set Attribute*********
h1Elem.setAttribute('class','text')
//*********Style*********
h1Elem.style.color = '#f00'
h1Elem.style.fontSize = '60px'

//innerHtml
console.log(h1Elem.innerHTML) //=>welcome
h1Elem.innerHTML = 'shad hastam'


//*********getElementsByClassName*********
//*********getElementsByClassName*********
let liElems = document.getElementsByClassName("list-item")
console.log(liElems)
console.log(liElems[0])
//*********Style*********
liElems[3].style.color = 'blue'
liElems[3].style.fontWeight = 'bold'
//*********Set Attribute*********
console.log(liElems[0].setAttribute('id','about'))
console.log(liElems[2].innerHTML) //=>Services

//*********getElementsByTagName*********
//*********getElementsByTagName*********
let listItems = document.getElementsByTagName('li')
console.log(liElems)


//*********querySelector*********
//*********querySelector*********
let firstListItem_1 = document.querySelector('.list-item')
let firstListItem_2 = document.querySelector('#title')
console.log(firstListItem_1)
console.log(firstListItem_2)


//*********querySelectorAll*********
//*********querySelectorAll*********
let uiItems_1 = document.querySelectorAll('.list-item')
let uiItems_2 = document.querySelectorAll('#title')
console.log(uiItems_1)
console.log(uiItems_2)  