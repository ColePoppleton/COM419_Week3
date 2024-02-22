
document.getElementById("Success_1").addEventListener("click", e=>{
    document.getElementById("question_1").style.display = "none";
    document.getElementById("question_2").style.display = "block";
});

document.getElementById("Failure_1").addEventListener("click", e=>{
    document.getElementById("question_1").style.display = "none";
    document.getElementById("Fail").style.display = "block";
});

document.getElementById("Success_2").addEventListener("click", e=>{
    document.getElementById("question_2").style.display = "none";
    document.getElementById("question_3").style.display = "block";
});

document.getElementById("Failure_2").addEventListener("click", e=>{
    document.getElementById("question_2").style.display = "none";
    document.getElementById("Fail").style.display = "block";
});

document.getElementById("Success_3").addEventListener("click", e=>{
    document.getElementById("question_3").style.display = "none";
    document.getElementById("Fail").style.display = "block";
    document.getElementById("Fail").innerHTML = "Congratulations you could be a Dragonborn!"
});

document.getElementById("Failure_1").addEventListener("click", e=>{
    document.getElementById("question_3").style.display = "none";
    document.getElementById("Fail").style.display = "block";
});