
const Stuts = document.querySelector("h2");
const addFriend = document.querySelector("#add");
let check = 0;
addFriend.addEventListener("click",function() {
    if(check===0){
        check =1; 
        Stuts.innerHTML = "Friends";
        Stuts.style.color = "green";
        addFriend.innerHTML = "Remove Friend";
        addFriend.style.background = "gray";
        addFriend.style.color ="white";
    }else{
        check = 0 ; 
        Stuts.innerHTML = "Stanger";
        Stuts.style.color = "red";
        addFriend.innerHTML = "Add Friend";
        addFriend.style.background = "darkcyan";
        addFriend.style.color = "black";
    }
})