const submitBtn = document.querySelector('button');
const inputEle = document.querySelector('input');
const tempEle = document.querySelector('h3');
const locationEle = document.querySelector('.location');
const dateEle = document.querySelector('.date');
const imgEle = document.querySelector('img');
const weatherEle = document.querySelector('.weather');

function getTargetUrl(location){
    return `https://api.weatherapi.com/v1/current.json?key=3b977c0058a34e56850163219241106&q=${location}`;
}

async function fetchData(url){
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    console.log(data);
    updateDom(data);
}

submitBtn.addEventListener('click',function(e){
    e.preventDefault(); // prevent refreshing of page on click of button which is inside form element
    const value = inputEle.value;
    const url = getTargetUrl(value);
    fetchData(url);
    inputEle.value = "";
})

function updateDom(data){
    tempEle.innerText = data.current.temp_c;
    locationEle.innerText = data.location.name;
    dateEle.innerText = data.location.localtime;
    const imgUrl = "https:"+data.current.condition.icon;
    imgEle.src = imgUrl;
    weatherEle.innerText = data.current.condition.text;
}