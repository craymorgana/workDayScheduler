hour = $('.hour')
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

//
function saveEvent(){
    var saveText = document.querySelector("#textarea").value;
    localStorage.setItem('saveText', saveText)
    console.log(localStorage);
}

saveText = localStorage.getItem('saveText')
console.log('saveText :>> ', saveText);
$('#textarea').val(saveText)

