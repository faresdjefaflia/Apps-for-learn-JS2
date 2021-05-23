function bigger(numA, numB, numC){
    numA = document.getElementById("numberA").value;
    numB = document.getElementById("numberB").value;
    numC = document.getElementById("numberC").value;
    var max;

    if (numA > numB){
        if (numA > numC){
            max = numA;
            //document.getElementById("theRes").innerHTML = "The largest number is: " + numC;
        }
        else if (numA < numC){
           max = numC; 
          // document.getElementById("theRes").innerHTML = "The largest number is: " + numC;     
        }
    }
    else if (numA < numB){
        if (numB > numC){
            max = numB;
        }
        else if (numB < numC){
            max = numC;
        }
        //document.getElementById("theRes").innerHTML = "The largest number is: " + numB;
    }
    
    document.getElementById("theRes").innerHTML = "The largest number is: " + max;
}


 

