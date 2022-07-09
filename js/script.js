const dataObjects = {
    Iran:['tehran','qom','yazd','tabriz'],
    Turkey:['stanbol'], 
    US:['LA','NewYork','Chicago','san diego', 'boston'],
    Canada:['toronto','quebec','montreal','vancouver']
}
let $ = document
let countrySelect = $.getElementById('countrySelect')
let citySelect = $.getElementById('citySelect')
let firstName = $.getElementById('fnameInput')

function firstNameInput(){
    console.log(firstName.innerHTML)
}


function ChooseCountry(){

    let country = countrySelect.value
    let city = dataObjects[country]
    console.log(country)
    console.log(city)
    console.log(city.length)
    for(let i = 0; i < city.length; i++) {
        let newOptionElement =$.createElement('option') 
        console.log(i)
        console.log(city[i])
        // citySelect.append($.createElement('option'))
        newOptionElement.innerHTML = city[i]
        newOptionElement.value = city[i]
        citySelect.appendChild(newOptionElement)
    }
    console.log(citySelect)
}
function chooseCity(){
    console.log(citySelect.value)
    console.log("*********************")
}

function bookTicket(){
    console.log(citySelect.value)
    console.log(countrySelect.value)
    console.log(firstName)

}
 

