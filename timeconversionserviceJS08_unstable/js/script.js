
// Fares Djefaflia
//Dec 30 2020
//https://github.com/frsdjefaflia

// FOR HOUR
function hour (hour1){
    hour1 = document.getElementById("msghour").value;
    var min1, second1;
        min1 = hour1  * 60;
        second1 = min1 * 60;
        if (hour1 === "0" || hour1 < 0 || isNaN(hour1)){
            document.getElementById("txtnote").innerHTML = "ERROR: the number must be entered correctly"
            document.getElementById("tohour").innerHTML = " ERROR";
            document.getElementById("tominuts").innerHTML = "ERROR";
            document.getElementById("toseconds").innerHTML = "ERROR";
        }
        else{
            document.getElementById("tohour").innerHTML = hour1 + " " + "hour";
            document.getElementById("tominuts").innerHTML = min1 + " " + "minuts";
            document.getElementById("toseconds").innerHTML = second1 + " " + "second";
            document.getElementById("txtnote").innerHTML = ""
        }
        
    };


    // FOR MINUTE
    function minute(min1){
        min1 = document.getElementById("msgmin").value;
        var hour1, second1;
            hour1 = min1 / 60;
            second1 = min1 * 60;
            if (min1 === "0" || min1 < 0 || isNaN(min1)){
                document.getElementById("txtnote").innerHTML = "ERROR: the number must be entered correctly"
                document.getElementById("tohour2").innerHTML = " ERROR";
                document.getElementById("tominuts2").innerHTML = "ERROR";
                document.getElementById("toseconds2").innerHTML = "ERROR";
            }
            else{
                document.getElementById("tohour2").innerHTML = hour1 + " " + "hour";
                document.getElementById("tominuts2").innerHTML = min1 + " " + "minuts";
                document.getElementById("toseconds2").innerHTML = second1 + " " + "second";
                document.getElementById("txtnote").innerHTML = ""
            }
            

    };


    //FOR SECOND
    function second(second1){
        var hour1, min1;
            second1 = document.getElementById("msgsecond").value;
            hour1 = second1 / 3600;
            min1 = second1 / 60;
            if (second1 === "0" || second1 < 0 || isNaN(second1)){
                document.getElementById("txtnote").innerHTML = "ERROR: the number must be entered correctly"
                document.getElementById("tohour3").innerHTML = " ERROR";
                document.getElementById("tominuts3").innerHTML = "ERROR";
                document.getElementById("toseconds3").innerHTML = "ERROR";
            }
            else{
                document.getElementById("tohour3").innerHTML = hour1 + " " + "hour";
                document.getElementById("tominuts3").innerHTML = min1 + " " + "minuts";
                document.getElementById("toseconds3").innerHTML = second1 + " " + "seconds" ;
                document.getElementById("txtnote").innerHTML = ""
            }
            
    };
    
