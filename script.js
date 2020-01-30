$(document).ready(function () {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
                     'Too ato too nOt enot one totA not anot tOO aNot',
                     'oat itain oat tain nate eate tea anne inant nean',
                     'itant eate anot eat nato inate eat anot tain eat',
                     'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    let sentIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentIndex];
    //console.log(currentSentence);
    let currentLetter = currentSentence[letterIndex];
    //console.log(currentLetter);

    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);


    //Hide uppercase keyboard
    $('#keyboard-upper-container').hide();

    //Keyboard Toggling: when shift key is held down, hide lowercase keyboard and show upper case one   
    $(document).keydown(function (e) {
        //let x = e.keyCode;
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        };
    });

    $(document).keyup(function (e) {
        //let x = e.keyCode;
        $('.highlight').removeClass('highlight');
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        };
    });

    //when keys are pressed, they should be highlighted in browser
    //console.log(x);
    $(document).keypress(function (e) {
        //$('#' + e.keyCode).css('background-color', 'yellow');
        $('#' + e.keyCode).addClass('highlight');
        //console log to see if the letter typed matches the letter in sentence - if so, will log true, or otherwise will log false
        //console.log(currentSentence.charCodeAt(letterIndex) === e.keyCode);
        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>')
        }
        $('#yellow-block').css('left','+=17.5px');
        letterIndex++;
        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);
        //console.log(sentIndex);
        console.log(currentLetter);
        if (letterIndex == currentSentence.length) {
            sentIndex++;
            letterIndex = 0;
            currentSentence = sentences[sentIndex];
            currentLetter = currentSentence[letterIndex];
            $('#sentence').text(currentSentence);
            $('#target-letter').text(currentLetter);
            //console.log(letterIndex);
            console.log(currentSentence);
            $('#yellow-block').css('left', '20px');
            $('#feedback').empty();
            
            
            

        }
    });
});


    // let key = $('#' + e.which);
        // //console.log("I work")
        // $(key).css("background-color", "yellow");
        // //unhighlight when key no pressed
        // $('#karen').keyup(function(event) {
        //     $(key).css("background-color", "")
        // }) 

   //let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];   
    //displaySentence();
    // function displaySentence() {




        // function linda() {
        //     $.each(sentences, function(index, value) {
        //         //console.log(value);
        //         $.each(this, function(index,value) {
        //             //console.log(value);
        //             return value;
        //         });

        //     });

        // };
        // $.each(sentences, function(index, value) {
        //     //console.log(value);
        //     $.each(this, function(index,value) {
        //         //console.log(value);
        //         return value;
        //     });

        // });

        // for (let x = 0; x < sentences.length; x++) {
        //     //console.log(sentences[x]);
        //     $('#sentence').text(sentences[x]);
        //     for (let y = 0; y < sentences[x].length; y++) {
        //         //console.log(sentences[x][y]);
        //     }


        // }    


        // if (linda() === sentences[x][y]) {
        //             let pixelVal = 4;
        //             $('#karen').keypress(function() {
        //             let yb = $('#yellow-block');
        //             $(yb).css('left', pixelVal + 'px');
        //             pixelVal = pixelVal + 4;

        //              });
        //         };


        // for (let i = 0; i < sentences.length; i++) {
        //     for (let j = 0; j < sentences[i].length; j++) {
        //         //console.log(sentences[i][j]);
        //         display = sentences[i];
        //         letter = sentences[i][j];
        //         //console.log(sentences[i][j]);
        //         $('#sentence').text(display);