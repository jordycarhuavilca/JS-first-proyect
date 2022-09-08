   
    let contador = 0;
    change.onclick = function(){
        if(contador == 0){
            document.getElementById("text").innerHTML = (" My name is Jordy");
            contador ++;
        }else if(contador == 1){
            document.getElementById("text").innerHTML = ("como você chama ?");
            contador ++;
        }
        else if (contador == 2){
            document.getElementById("text").innerText = ("Meu nome é Jordy");
            contador ++;
        }
        else{
            document.getElementById("text").innerText = (" What's your Name?");
            contador =0;
        }
    }

    function time(){

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let pmAm = "";
        // become the hours 0 == 12am 
        switch (hours) {
            case 0:
                hours = 12
                break;
        }
        if(minutes >= 0 && minutes <10)  minutes = "0"+minutes;
        if(seconds >= 0 && seconds < 10) seconds = "0"+seconds;
        
        // to method hours give 0 to 23, so  0 es 12AM  y 12 of Half Day 
        if(hours == 12){
            pmAm = "AM"
        }else if(hours > 12){
            pmAm = "PM"
        }
        setTimeout("time()",1000);
        document.getElementById("clockTime").innerHTML = hours + ":" + minutes + ":" + seconds + " " +  pmAm;
      
    }
    let nameTime = 0;

    function changeNameTime(){
        switch (nameTime) {
            case 0:
                document.getElementById("name-time").innerText = "Hello";
                nameTime ++;
                break;
            case 1:
                document.getElementById("name-time").innerText = "Olá"; 
                nameTime ++;
                break;
            case 2:
                document.getElementById("name-time").innerText = "Hola"; 
                nameTime ++;
            break;
            case 3:
                document.getElementById("name-time").innerText = "こんにちは"; 
                nameTime ++;
                break;
            case 4:
                document.getElementById("name-time").innerText = "Ciao"; 
                nameTime ++;
                break;
            case 5:
                document.getElementById("name-time").innerText = "Allinllachu"; 
                nameTime ++;
                break;
            case 6:
                document.getElementById("name-time").innerText = "你好"; 
                nameTime ++;
                break;
            case 7:
                document.getElementById("name-time").innerText = "hai"; 
                nameTime ++;
                break;
            case 8:
                document.getElementById("name-time").innerText = "안녕"; 
                nameTime ++;
                break;
            case 9:
                document.getElementById("name-time").innerText = "Obrigado"; 
                nameTime ++;
                    break;
            case 10:
                document.getElementById("name-time").innerText = "감사합니다"; 
                nameTime ++;
                break;
            case 11:
                document.getElementById("name-time").innerText = "Gracias"; 
                nameTime ++;
                break;
            case 12:
                document.getElementById("name-time").innerText = "Thank you"; 
                nameTime ++;
                break;
            default:
                nameTime = 0;
                break;
        }
        setTimeout("changeNameTime()",1000);
    } 
    time();
    changeNameTime();
