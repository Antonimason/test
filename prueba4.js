const container = document.querySelector("#container");
    let documentFragment = document.createDocumentFragment()
    for(let i = 1; i <= 582; i++){
        let divi = document.createElement("DIV");
        divi.innerHTML = `UPDATE series SET series_year = ${Math.floor(Math.random() * 20) + 2003} WHERE id_series = ${i};`; 
        documentFragment.appendChild(divi)
    
    }
    container.appendChild(documentFragment);