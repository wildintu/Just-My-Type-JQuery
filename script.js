$(document).ready(function() {
    //Hide uppercase keyboard
    $('#keyboard-upper-container').hide();

    //Keyboard Toggling: when shift key is held down, hide lowercase keyboard and show upper case one   
    $('#karen').keydown(function(event) {
        let x = event.keyCode;
        if(x == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        };
    });

    $('#karen').keyup(function(event) {
        let x = event.keyCode;
        if(x == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        };
    });

    //when keys are pressed, they should be highlighted in browser
    //console.log(x);
    $('#karen').keypress(function(event) {
        let key = $('#' + event.which);
        //console.log("I work")
        $(key).css("background-color", "yellow");
        //unhighlight when key no pressed
        $('#karen').keyup(function(event) {
            $(key).css("background-color", "")
        })   
    });
    
    //let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];   
    displaySentence();
    function displaySentence() {
        let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
                         'Too ato too nOt enot one totA not anot tOO aNot',
                         'oat itain oat tain nate eate tea anne inant nean',
                         'itant eate anot eat nato inate eat anot tain eat',
                         'nee ene ate ite tent tiet ent ine ene ete ene ate'];
        
        $.each(sentences, function(index, value) {
            //console.log(value);
            $.each(this, function(index,value) {
                //console.log(value);

            });
            
        });

        for (let x = 0; x < sentences.length; x++) {
            //console.log(sentences[x]);
            $('#sentence').text(sentences[x]);
            for (let y = 0; y < sentences[x].length; y++) {
                console.log(sentences[x][y]);
            }
            

        } 

        
        
                
        
        
        
        
        

        //if ( key === sentences[x][y]) {
                    let pixelVal = 4;
                    $('#karen').keypress(function() {
                    let yb = $('#yellow-block');
                    $(yb).css('left', pixelVal + 'px');
                    pixelVal = pixelVal + 4;
                    
                     });

                //};
        
        
        // for (let i = 0; i < sentences.length; i++) {
        //     for (let j = 0; j < sentences[i].length; j++) {
        //         //console.log(sentences[i][j]);
        //         display = sentences[i];
        //         letter = sentences[i][j];
        //         //console.log(sentences[i][j]);
        //         $('#sentence').text(display);



                
                //let letterPushed = $();
                //console.log(letterPushed);
                // if (letter === keyLetter) {
                //     let pixelVal = 4;
                //     $('#karen').keypress(function() {
                //     let yb = $('#yellow-block');
                //     $(yb).css('left', pixelVal + 'px');
                //     pixelVal = pixelVal + 4;
                    
                     //});

                //};


                // let pixelVal = 4;
                // $('#karen').keypress(function() {
                // let yb = $('#yellow-block');
                // $(yb).css('left', pixelVal + 'px');
                // pixelVal = pixelVal + 4;
                
                // });
            }
            


            //get yellow block to move left
            // let pixelVal = 4;
            // $('#karen').keypress(function() {
            //     let yb = $('#yellow-block');
            //     $(yb).css('left', pixelVal + 'px');
            //     pixelVal = pixelVal + 4;
                
            // });
            
            
       //};
    //};

});