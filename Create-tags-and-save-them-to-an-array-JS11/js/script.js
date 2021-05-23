//Just train and apply. It is not stable - تدريب و تطبيق. غير مستقر
//Fares Djefaflia Apr 15 2021

/*
Try to write the tags in a place designated for them
Then send it to be added to the array.
Next, press the button to display the entire matrix or tags.
-----------------
محاولة كتابة العلامات في مكان مخصص لها،
ثم ارسالها ليتم اضافتها الى المصفوفة،
فيما بعد الضغط على الزر ليتم اظهار كامل المصفوفة او العلامات.
*/

var tag = document.getElementById("tag") //input for text
    send = document.getElementById("send") //button for send tags
    box = document.getElementById("box") //box for show tags
    show = document.getElementById("show") //button for show tags in box
    reset = document.getElementById("reset") //reset the array
    myTags = [];
    
send.onclick = function(){
    myTags.push(tag.value);
    tag.value = "";
    show.style.display = "block";
    show.onclick = function(){
        box.innerHTML = myTags;
        reset.style.display = "block";
    }
};
reset.onclick = function(){
    myTags = [];
    box.innerHTML = "";
    show.style.display = "none";
    reset.style.display = "none";
};
