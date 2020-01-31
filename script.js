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
    let numberOfWords = 54;
    let mistakes = 0;
    let gameover = false;
    let timerOn = false;

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
        if (timerOn === false) {
            startDate = new Date();
            startTime = startDate.getTime();
            timerOn = true;
        }
        
        //console.log(startTime);
        //$('#' + e.keyCode).css('background-color', 'yellow');
        $('#' + e.keyCode).addClass('highlight');
        //console log to see if the letter typed matches the letter in sentence - if so, will log true, or otherwise will log false
        //console.log(currentSentence.charCodeAt(letterIndex) === e.keyCode);
        //if corect key is entered, give a ok glyph or incorrect give remove glyph
        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            mistakes++;
        };
        //move yellow block in conjunction with which letter user is on
        $('#yellow-block').css('left', '+=17.5px');
        letterIndex++;
        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);

        //test sentence check
        //console.log('letterIndex: '+ letterIndex + 'currentSentenceLength: ' + currentSentence.length);
        if (letterIndex == currentSentence.length) {
            sentIndex++;
            if (sentIndex == sentences.length) {
                gameover = true;
                //$('#feedback').remove();
                console.log('gameover');
                // if(gameover) {
                //     $('sentence').empty();
                //     $('target-letter').empty();
                //     $('#yellow-block').empty();
                //     $('#feedback').empty();

                // }
            }
            if (!gameover) {
                letterIndex = 0;
                currentSentence = sentences[sentIndex];
                currentLetter = currentSentence[letterIndex];
                $('#sentence').text(currentSentence);
                $('#target-letter').text(currentLetter);
                //console.log(letterIndex);
                //console.log(currentSentence);
                $('#yellow-block').css('left', '20px');
                $('#feedback').empty();
                $('#feedback').stop()
            };

            //console.log('gameover2' + gameover)
            //}
            //clear screen and display final score
            if (gameover == true) {
                //console.log('boom')
                $('#sentence').empty();
                $('#target-letter').empty();
                $('#yellow-block').css('left', '2000px');
                $('#feedback').remove();
                //create timer and score
                endDate = new Date();
                endTime = endDate.getTime();
                console.log(startTime);
                console.log(endTime);
                let diff = Math.abs(new Date(endTime) - new Date(startTime));
                console.log(diff);
                let sec = Math.floor(diff/1000);
                console.log(sec);
                let minutes = Math.floor(sec/60);
                console.log(minutes);
                console.log(mistakes);
                score = Math.round(54 / minutes - 2  * mistakes);
                console.log(score);

            }

        };





        



        //console.log(sentIndex);
        //console.log(currentLetter);

        //when current sentence is finished, reset to the next sentence

        //console.log(currentSentence.length)
        // if (letterIndex == currentSentence.length) {
        //     sentIndex++;
        //     letterIndex = 0;
        //     currentSentence = sentences[sentIndex];
        //     currentLetter = currentSentence[letterIndex];
        //     $('#sentence').text(currentSentence);
        //     $('#target-letter').text(currentLetter);
        //     //console.log(letterIndex);
        //     //console.log(currentSentence);
        //     $('#yellow-block').css('left', '20px');
        //     $('#feedback').empty();

        //     //if (sentIndex == sentences.length) {
        //         console.log('boom');

        //     //}


        // };

        // console.log(mistakes);
        // return mistakes;

        //calculate words per minute and display on screen
        //let score = numberOfWords / minutes - 2 * mistakes




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