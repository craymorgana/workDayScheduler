// var rootEl = $('#root');
// var containerEl = $('#container');
// var row1 = $('#row1')

// var hour = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM' ];

// var hourEl = $('<div>');
// var textEl = $('<textarea rows="5" cols="75">');
// var saveButton = $('<button>')
// var rowEl = $('<li2>')
// var rowEnd = $('</li2>')

// // styling
// hourEl.attr('class', 'hour');
// saveButton.attr('class', 'saveBtn')
// saveButton.css('width', '100')
// saveButton.text('💾')
// textEl.attr('class', 'description')
// rowEl.attr('class', 'row')
// // receive the current day with moment js





// // 
// //for loop to make 9 hours of time blocks
// //content will be in a list
// //div with 9am

// hourEl.text(hour[0]);
// rootEl.append(rowEl);
// rowEl.append(hourEl)
// rowEl.append(textEl)
// rowEl.append(saveButton)

// hourEl.text(hour[0]);
// rootEl.append(row1);
// row1.append(hourEl)
// rowEl.append(textEl)
// rowEl.append(saveButton)

// function saveEvent(){
//     var saveText = textEl.val;
//     localStorage.setItem('saveText', saveText)
// console.log(localStorage.saveText);
// }

// saveButton.on('click', saveEvent);
    // div with a text box css - textarea
        // if work hour === current hour color .present
        // if work hour === past hour color is .past
        // if work hour === future hour color is .future

    //div save button
        // when button is click >>
            // button will grab the text box and save to local storage

textArea = $('#textarea')
hour = $('.hour')
textArea.css('height', '99%').css('margin-top', '-30px')


var saveBtn = document.querySelector('.saveBtn');

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