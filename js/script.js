"use strict";

const input = document.querySelector('.input');
const search = document.querySelector('.input__search');

let getInfo = function(){
    request({
        method: 'GET',
        url: `https://restcountries.com/v3.1/name/{${input.value}}`,
        success: Response => {
            
            const res = JSON.parse(Response);
            
            // console.log(res);
            
            const name = document.getElementById('country_name');
            const region = document.getElementById('country_region');
            const subregion = document.getElementById('country_subregion');
            const capital = document.getElementById('country_capital');
            const countryFlag = document.getElementById('country_flag');
            
            name.innerHTML = res[0]['name']['official'];
            region.innerHTML = res[0]['region'];
            subregion.innerHTML = res[0]['subregion'];
            capital.innerHTML = res[0]['capital'];
            
            countryFlag.style.width = '20%';
            countryFlag.setAttribute ('src',res[0]['flags']['svg']);   

        },
        error: message =>{
            console.log(`error ${message}`);
        },
    });
}
search.addEventListener('click', ()=>{
    getInfo();
});