//FARES DJEFAFLIA
//Dec 23 2020


function myinfo(){
    var name, age, x, y;
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    x = name.length; // X is name
    y = age.length; // Y is age
    if (x === 0 && y > 0){
        document.getElementById("boxtext").innerHTML = "error: please enter your name";
    }
    else if (y === 0 && x > 0){
        document.getElementById("boxtext").innerHTML = "error: please enter your age";
    }
    else if (x === 0 && y === 0){
        document.getElementById("boxtext").innerHTML = "error: please enter your name and your age";
    }
    else if(x > 0 && y > 0){
        name = document.getElementById("name").value;
        age = document.getElementById("age").value;
        var info = "Hello" + " " + name + " " + "your age is:" + " " + age;
        return document.getElementById("boxtext").innerHTML = info;
    }

   /* name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    var info = "Hello" + " " + name + " " + "your age is:" + " " + age;
    return document.getElementById("boxtext").innerHTML = info;
    */

   // احب تحويل الاكواد الفاشلة الى تعليقات انها ذكرى جميلة جدا
}


/* function cal(){
    var amount = document.getElementById("amou").value;
    var res = amount * 10;
    console.log(res);
}*/
