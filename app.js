/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

var result = '<h3> You have solved '+ 
             '<span id="tot-good">SOLVED</span>' +
             ' of <span id="tot">TOTAL</span>'+
             '</h3>';
var points = 0;
var pos = 0;

$(document).ready(function(){

    for(var i=0; i<data.length; i++){    $(".sentences").append(tmpl.replace("ID",i).replace("SENTENCE",data[i].phrase_en));
    }   
    $("#0").addClass("current");
    
    $( ".options" ).on( "click", ".opt-continue", function() {
        if($(".form-control").val()==""){alert("insert a value");}
        else{
            if(pos<data.length-1){
                //console.log(pos);
                if($(".form-control").val()==data[pos].phrase_de){
                  points++;   
                  //alert(points);     
                }
            }
            else{
                //alert("END");
 $('button').prop('disabled', true);               $(".final").append(result.replace("SOLVED",points).replace("TOTAL",(data.length)));
            }
            $(".form-control").val('');
            $("#"+pos).removeClass("current");
            pos++;
            $("#"+pos).addClass("current");
        }
    })
  
});







