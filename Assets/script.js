hour = $('.hour')
currentDay = $('#currentDay')
var day = moment().format('dddd MMMM Do YYYY');
currentDay.text(day)

textArea = $('#textarea')
textArea2 = $('#textarea2')
textArea3 = $('#textarea3')
textArea4 = $('#textarea4')
textArea5 = $('#textarea5')
textArea6 = $('#textarea6')
textArea7 = $('#textarea7')
textArea8 = $('#textarea8')
textArea9 = $('#textarea9')
textArea.css('height', '100%').css('margin-top', '-30px')
textArea2.css('height', '100%').css('margin-top', '-30px')
textArea3.css('height', '100%').css('margin-top', '-30px')
textArea4.css('height', '100%').css('margin-top', '-30px')
textArea5.css('height', '100%').css('margin-top', '-30px')
textArea6.css('height', '100%').css('margin-top', '-30px')
textArea7.css('height', '100%').css('margin-top', '-30px')
textArea8.css('height', '100%').css('margin-top', '-30px')
textArea9.css('height', '100%').css('margin-top', '-30px')


var saveBtn = document.querySelector('.saveBtn');
var saveBtn2 = document.querySelector('.saveBtn2');
var saveBtn3 = document.querySelector('.saveBtn3');
var saveBtn4 = document.querySelector('.saveBtn4');
var saveBtn5 = document.querySelector('.saveBtn5');
var saveBtn6 = document.querySelector('.saveBtn6');
var saveBtn7 = document.querySelector('.saveBtn7');
var saveBtn8 = document.querySelector('.saveBtn8');
var saveBtn9 = document.querySelector('.saveBtn9');

saveBtn.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent();
})
saveBtn2.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent2();
})
saveBtn3.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent3();
})
saveBtn4.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent4();
})
saveBtn5.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent5();
})
saveBtn6.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent6();
})
saveBtn7.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent7();
})
saveBtn8.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent8();
})
saveBtn9.addEventListener('click', function(event){
    var element = event.target
console.log('element :>> ', element);
console.log('event :>> ', event);
saveEvent9();
})
//
function saveEvent(){
    var saveText = document.querySelector("#textarea").value;
    localStorage.setItem('saveText', saveText)
    console.log(localStorage);
}

function saveEvent2(){
    var saveText2 = document.querySelector("#textarea2").value;
    localStorage.setItem('saveText2', saveText2)
    console.log(localStorage);
}
function saveEvent3(){
    var saveText3 = document.querySelector("#textarea3").value;
    localStorage.setItem('saveText3', saveText3)
    console.log(localStorage);
}
function saveEvent4(){
    var saveText4 = document.querySelector("#textarea4").value;
    localStorage.setItem('saveText4', saveText4)
    console.log(localStorage);
}
function saveEvent5(){
    var saveText5 = document.querySelector("#textarea5").value;
    localStorage.setItem('saveText5', saveText5)
    console.log(localStorage);
}
function saveEvent6(){
    var saveText6 = document.querySelector("#textarea6").value;
    localStorage.setItem('saveText6', saveText6)
    console.log(localStorage);
}
function saveEvent7(){
    var saveText7 = document.querySelector("#textarea7").value;
    localStorage.setItem('saveText7', saveText7)
    console.log(localStorage);
}
function saveEvent8(){
    var saveText8 = document.querySelector("#textarea8").value;
    localStorage.setItem('saveText8', saveText8)
    console.log(localStorage);
}
function saveEvent9(){
    var saveText9 = document.querySelector("#textarea9").value;
    localStorage.setItem('saveText9', saveText9)
    console.log(localStorage);
}
saveText = localStorage.getItem('saveText')
$('#textarea').val(saveText)
saveText2 = localStorage.getItem('saveText2')
$('#textarea2').val(saveText2)
saveText3 = localStorage.getItem('saveText3')
$('#textarea3').val(saveText3)
saveText4 = localStorage.getItem('saveText4')
$('#textarea4').val(saveText4)
saveText5 = localStorage.getItem('saveText5')
$('#textarea5').val(saveText5)
saveText6 = localStorage.getItem('saveText6')
$('#textarea6').val(saveText6)
saveText7 = localStorage.getItem('saveText7')
$('#textarea7').val(saveText7)
saveText8 = localStorage.getItem('saveText8')
$('#textarea8').val(saveText8)
saveText9= localStorage.getItem('saveText9')
$('#textarea9').val(saveText9)

