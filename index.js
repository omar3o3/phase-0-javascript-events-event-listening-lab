
// const input = document.getElementById('input');

// input.addEventListener('click' , function(){
//     alert("I was clicked!");
// })

// input.addEventListener('click' , clickAlert)

// function clickAlert(){
//     alert('I was clicked!');
// }


//********************won't pass********************
// input.addEventListener('click' , addingEventListener)

// function addingEventListener() {
//     alert('I was clicked!');
// }

function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}

//********************won't pass********************

//********************call back function attempt********************
// input.addEventListener('click' , alertCallBack)

// const alertCallBack = () => alert('I was clicked!');

// alertCallBack();
//^^^^^^ adding this line doesnt change anything
//********************call back function attempt********************