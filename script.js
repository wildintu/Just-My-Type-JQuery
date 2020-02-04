$(document).ready(function () {
    let sentences =
    ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    let sentIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentIndex];
    let currentLetter = currentSentence[letterIndex];
    let numberOfWords = 5;
    let mistakes = 0;
    let gameover = false;
    let timerOn = false;

    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);
    $('#keyboard-upper-container').hide();

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        };
    });

    $(document).keyup(function (e) {
        $('.highlight').removeClass('highlight');
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        };
    });

    $(document).keypress(function (e) {
        if (timerOn === false) {
            startDate = new Date();
            startTime = startDate.getTime();
            timerOn = true;
        }
        
        $('#' + e.keyCode).addClass('highlight');
        
        console.log(currentSentence.charCodeAt(letterIndex) === e.keyCode);
  
        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            next();
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
            
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            mistakes++;
        };

        function next() {
        $('#yellow-block').css('left', '+=17.5px');
        letterIndex++;
        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);

        }
        
        if (letterIndex == currentSentence.length) {
            sentIndex++;
            if (sentIndex == sentences.length) {
                gameover = true;
            }
            
            if (!gameover) {
                letterIndex = 0;
                currentSentence = sentences[sentIndex];
                currentLetter = currentSentence[letterIndex];
                $('#sentence').text(currentSentence);
                $('#target-letter').text(currentLetter);
                $('#yellow-block').css('left', '20px');
                $('#feedback').empty();
                $('#feedback').stop()
            };

            if (gameover == true) {
                clearTop();
                endDate = new Date();
                endTime = endDate.getTime();
                let diff = Math.abs(new Date(endTime) - new Date(startTime));
                let minutes = diff/60000;
                let score = numberOfWords / minutes - 2  * mistakes;

                $('#feedback').append('<span class="gameoverbro">Game Over! Words per minute: ' + score.toFixed(0) + ' and mistakes: ' + mistakes+' </span>')
                $('#target-letter').append('<button id="btn" type="button" onClick="window.location.reload()"> New Game </button>');             
            }
        };

        function clearTop() {
            $('#sentence').remove();
            $('#target-letter').empty();
            $('#yellow-block').css('left', '2000px');
            $('#feedback').find('span').remove();
        }
    });
});