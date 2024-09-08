const submitBtn= document.getElementById("submitBtn");
const cityName= document.getElementById("cityName");
const city_name= document.getElementById("city_name");
// const temp= document.getElementById('temp');
const temp_status= document.getElementById('temp_status');
const datahide= document.querySelector(".middle_layer");
const temp_real_val= document.getElementById("temp_real_val");


const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal= cityName.value;
    if(cityVal===""){
        city_name.innerText= `Please write city name before you search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5f508929c1ec763890176160f2591fbe`;   
            const response= await fetch(url);
            const data= await response.json();
            const arrData= [data];
            temp_real_val.innerHTML=arrData[0].main.temp;
            // temp_status.innerText= arrData[0].weather[0].main;
            city_name.innerText= arrData[0].name+","+arrData[0].sys.country;
            const tempMood= arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fa fa-sun' style='color: #eccc68;'></i>"
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fa fa-cloud' style='color: #f1f2f6;'></i>"
            }else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fa fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else{
                temp_status.innerHTML="<i class='fa fa-sun' style='color: #f1f2f6;'></i>"
            }
            console.log(arrData);
            datahide.classList.remove('data_hide');
            
        }catch{
            city_name.innerText= `Please write city name properly`;
            datahide.classList.add('data_hide');
            
        }
    }
    
}
submitBtn.addEventListener("click", getInfo)