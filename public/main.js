

function kwhToWatts () {

    let kwhPerMonth = document.getElementsByName('kwhPerMonth')
    
    let kwhPerYear = 0
    for(let i=0;i<kwhPerMonth.length;i++){
        kwhPerYear += +kwhPerMonth[i].value
    }
    
    return kwhPerYear
}



function evalSelect(el) {

    let element = document.getElementById(el)
    
    
    for(let i = 0; i < element.length; i++) {
        
        if(element[i].selected === true) {
            return +element[i].value
        }
    }
}

function panels() {

    const sunlightHours = evalSelect('zones')
    const panelRating = evalSelect('panels')
    let kwhPerYear = kwhToWatts()
    
    const dailyProduction = sunlightHours * panelRating
    console.log(dailyProduction)

    let wattsPerYear = kwhPerYear * 1000
    let wattsPerDay = wattsPerYear/365
   
    
    let panelsNeeded = wattsPerDay / dailyProduction
     return Math.ceil(panelsNeeded)

    

}

function show() {
    
    const panelsNeeded = panels()
    const display = document.getElementById('display')
    const button2 = document.createElement('button')
    button2.classList.add('btn')
    button2.textContent = 'Clear Results'
    let subheading = document.createElement('h2')
    subheading.textContent = `The amount of panels you need is ${panelsNeeded}`
    subheading.classList.add('subheading')
    display.append(subheading, button2)

    button2.addEventListener('click', (e) =>{
        display.textContent = ''
        
    })
    
}



