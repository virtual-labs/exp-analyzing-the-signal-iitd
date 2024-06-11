    //////////////////////////////////////////////////Fixed End Moment for span AB////////////////////////////////////////////////////

    function FixedmomentAB() {
      const w1 = document.getElementById("w1").value;
    
      // Check if input1 is 4 and input2 is 1
      if (w1 == 50 ) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("mfab").innerHTML = "36 kNm";
          document.getElementById("wrong1a").style.visibility="hidden";
        }, 500);
        setTimeout(function() {
          document.getElementById("text4").style.visibility="visible";
          document.getElementById("text5").style.visibility="visible";
          document.getElementById("text6").style.visibility="visible";
          document.getElementById("L1").style.visibility="visible";
          document.getElementById("box2").style.visibility="visible";
          document.getElementById("button2").style.visibility="visible";
          document.getElementById("button1").style.visibility="hidden";
    
        }, 800);
        
        
        document.getElementById("mfab").style.display = "block"; 
        document.getElementById("text4").style.display = "block"; 
        document.getElementById("text5").style.display = "block"; 
        document.getElementById("text6").style.display = "block"; 
        document.getElementById("L1").style.display = "block"; 
        document.getElementById("box2").style.display = "block"; 
        document.getElementById("wrongbox1").style.display = "block"; 
        document.getElementById("button1").style.display = "block"; 
    
        }
    
        if (w1 == "" ) { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("wrong1a").textContent = "Please Fill the Required Fields.";
    
            
          }, 600);
          document.getElementById("wrong1a").style.display = "block";
    
      } else {
        // Display an error message
        setTimeout(function() {
       document.getElementById("wrong1a").innerHTML = "Wrong Input. The value for Load W = 50";
      }, 1000);
       document.getElementById("wrong1a").style.display = "block";
      }
      }
 

//////////////////////////////////////////////////Fixed End Moment for span BA////////////////////////////////////////////////////

function FixedmomentBA() {
  const L1 = document.getElementById("L1").value;
  // Check if input1 is 4 and input2 is 1
  if (L1 == 4) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("wrong1b").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("mfba").textContent = " -24 kNm" ;
    }, 500);

    setTimeout(function() {
      document.getElementById("addspecimen3").style.visibility="visible";
      document.getElementById("text7").style.visibility="visible";
      document.getElementById("text8").style.visibility="visible";
      document.getElementById("text9").style.visibility="visible";
      document.getElementById("L2a").style.visibility="visible";
      document.getElementById("box3").style.visibility="visible";
      document.getElementById("button3").style.visibility="visible";
      document.getElementById("button2").style.visibility="hidden";
    }, 800);
    document.getElementById("mfba").style.display = "block"; 
    document.getElementById("addspecimen3").style.display = "block"; 
    document.getElementById("text7").style.visibility="block";
    document.getElementById("text8").style.visibility="block";
    document.getElementById("text9").style.visibility="block";
    document.getElementById("L2a").style.visibility="block";
    document.getElementById("box3").style.visibility="block";
    document.getElementById("button3").style.visibility="block";
    document.getElementById("button2").style.visibility="block";
    }

    if (L1 == "" ) { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong1b").innerHTML = "Please Fill the Required Fields.";      
        
        
      }, 600);
      document.getElementById("wrong1b").style.display = "block";

  } else  {


  setTimeout(function() {
    // Display an error message
   document.getElementById("wrong1b").innerHTML = "Wrong Input. The value of l<sub>1</sub> = 2<sup>2</sup> = 4 ";
  }, 1000);
   document.getElementById("wrong1b").style.display = "block";
  }
  }

    //////////////////////////////////////////////////Fixed End Moment for span BC////////////////////////////////////////////////////

    function FixedmomentBC() {
      const L2a = document.getElementById("L2a").value;
      // Check if input1 is 4 and input2 is 1
      if (L2a == 25 ) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("mfbc").textContent = "50 kNm" ;

          document.getElementById("wrong1c").style.visibility="hidden";
        }, 1000);

        setTimeout(function() {
          document.getElementById("text10").style.visibility="visible";
          document.getElementById("text11").style.visibility="visible";
          document.getElementById("text12").style.visibility="visible";
          document.getElementById("w2").style.visibility="visible";
          document.getElementById("box4").style.visibility="visible";
          document.getElementById("button4").style.visibility="visible";
          document.getElementById("button3").style.visibility="hidden";
        }, 2500);
        
        document.getElementById("mfbc").style.display = "block"; 
        document.getElementById("text10").style.visibility="block";
            document.getElementById("text11").style.visibility="block";
            document.getElementById("text12").style.visibility="block";
            document.getElementById("w2").style.visibility="block";
            document.getElementById("box4").style.visibility="block";
            document.getElementById("button4").style.visibility="block";
        document.getElementById("wrong1c").style.visibility="hidden";
        document.getElementById("button3").style.visibility="hidden";
         }
    
        if (L2a == "" ) { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("wrong1c").textContent = "Please Fill the Required Fields." 
          }, 1000);
          document.getElementById("wrong1c").style.display = "block";
    
      } else {
        // Display an error message

      setTimeout(function() {
       document.getElementById("wrong1c").innerHTML = "Wrong Input. The value of L<sup>2</sup> = 5<sup>2</sup>";
      }, 1000);
       document.getElementById("wrong1c").style.display = "block";
      }
      }
      
      //////////////////////////////////////////////////Fixed End Moment for span CB////////////////////////////////////////////////////

    function FixedmomentCB() {
      const w2 = document.getElementById("w2").value;
      
      // Check if input1 is 4 and input2 is 1
      if (w2 == 24 ) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("Button4").style.visibility="hidden";
        }, 1);
        setTimeout(function() {
          document.getElementById("mfcb").textContent = "-50 kNm" ;
          document.getElementById("wrong1d").style.visibility="hidden";
          document.getElementById("nextButton1").style.visibility="visible";
          document.getElementById("Questext").style.visibility="visible";
          document.getElementById("Button4b").style.visibility="visible";
          
        }, 1000);
        
        document.getElementById("mfcb").style.display = "block"; 
        document.getElementById("wrong1d").style.visibility="block";
        document.getElementById("nextButton1").style.visibility="block";
        document.getElementById("Button4").style.visibility="block";
        document.getElementById("Button4b").style.visibility="block";
        document.getElementById("Questext").style.visibility="block";
        }
    
        if (w2 == "" ) { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("wrong1d").textContent = "Please Fill the Required Fields.";
    
            
          }, 2500);
          document.getElementById("wrong1d").style.display = "block";
    
      } else {
        // Display an error message
      setTimeout(function() {
       document.getElementById("wrong1d").innerHTML = "Wrong Input. The value of W = 24";
      }, 1000);
       document.getElementById("wrong1d").style.display = "block";
      }
      }

 
//////////////////////////////////////////////////Page Complete////////////////////////////////////////////////////
//////////////////////////////////////////////////Slope Deflection Equation////////////////////////////////////////////////////
function displayText2a() {
  const input1a2 = document.getElementById("input1a2").value;
  const input2a2 = document.getElementById("input2a2").value;
  const input3a2 = document.getElementById("input3a2").value;

  // Check if input1 is 4 and input2 is 1
  if (input1a2 == 36 && input2a2 == 5 && input3a2 == 0 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("wrong2a").style.visibility="hidden";
      document.getElementById("button4b").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("output1a2").innerHTML = "M<sub>AB</sub> = 36 + 0.4 EIΘ<sub>B</sub>";
    }, 500);
    setTimeout(function() {
      document.getElementById("text16").style.visibility="visible";
      document.getElementById("text17").style.visibility="visible";
      document.getElementById("eqn1").style.visibility="visible";
      document.getElementById("eqn2").style.visibility="visible";
      document.getElementById("eqn3").style.visibility="visible";
      document.getElementById("eqn4").style.visibility="visible";
      document.getElementById("text17b").style.visibility="visible";
      document.getElementById("box6").style.visibility="visible";
      document.getElementById("output1b2").innerHTML = "M<sub>BA</sub> = -24 + 0.8 EIΘ<sub>B</sub>" ;
    }, 800);
    setTimeout(function() {
      document.getElementById("output1c2").innerHTML = "M<sub>BC</sub> = 50 + 0.8 EIΘ<sub>B</sub>";
      document.getElementById("box7").style.visibility="visible";
      document.getElementById("text18").style.visibility="visible";
      document.getElementById("text18b").style.visibility="visible";

    }, 1100);
    setTimeout(function() {
      document.getElementById("output1d2").innerHTML = "M<sub>CB</sub> = -50 + 0.4 EIΘ<sub>B</sub>" ;
      document.getElementById("text19").style.visibility="visible";
      document.getElementById("box8").style.visibility="visible";
      document.getElementById("text19b").style.visibility="visible";

    }, 1400);
    setTimeout(function() {
      document.getElementById("nextButton2").style.visibility="visible";


    }, 1500);
    
    document.getElementById("output1a2").style.display = "block"; 
    document.getElementById("output1b2").style.display = "block"; 
    document.getElementById("output1c2").style.display = "block"; 
    document.getElementById("output1d2").style.display = "block"; 
    document.getElementById("nextButton2").style.display = "block"; 
    document.getElementById("button24b").style.display = "block";
    document.getElementById("text16").style.display = "block"; 
    document.getElementById("text17").style.display = "block"; 
    document.getElementById("text17b").style.display = "block"; 
    document.getElementById("eqn1").style.display = "block";
    document.getElementById("eqn2").style.display = "block";
    document.getElementById("eqn3").style.display = "block";
    document.getElementById("eqn4").style.display = "block";
    document.getElementById("text18").style.display = "block"; 
    document.getElementById("text18b").style.display = "block"; 
    document.getElementById("text19").style.display = "block"; 
    document.getElementById("text19b").style.display = "block"; 
    document.getElementById("box6").style.display = "block"; 
    document.getElementById("box7").style.display = "block"; 
    document.getElementById("box8").style.display = "block"; 


    }

    if (input1a2 == "" && input2a2 == "" && input3a2 == "" ) { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong2a").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong2a").style.display = "block";

  } else {
    // Display an error message
   document.getElementById("wrong2a").innerHTML = "Wrong Input. The value of M<sup>F</sup><sub>AB</sub> = 36 , L = 5, Θ<sub>A</sub> = 0 ";
  
   document.getElementById("wrong2a").style.display = "block";
  }
  }


///////////////////////////////////////////////////Page Complete////////////////////////////////////////////////////
//////////////////////////////////////////////////CALCULATION OF FINAL MOMENTS////////////////////////////////////////////////////

function finalmoments() {
  const EIQb1 = document.getElementById("EIQb1").value;



  // Check if input1 is 3 and input2 is 2
  if (EIQb1 == -16.25 ) { 
    // Slowly display the text after 2 seconds

    
    setTimeout(function() {
      document.getElementById("wrong3a").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("Mab").textContent = "29.5 kNm " ;
    }, 800);
    setTimeout(function() {
            document.getElementById("buttonx").style.visibility="hidden";
          }, 500);

          setTimeout(function() {
      document.getElementById("text20").style.visibility="visible";
    }, 1000);
    setTimeout(function() {
      document.getElementById("text21").style.visibility="visible";
    }, 1200);
    setTimeout(function() {
      document.getElementById("text22").style.visibility="visible";
    }, 1400);
    setTimeout(function() {
      document.getElementById("text23").style.visibility="visible";
      document.getElementById("nextButton3").style.visibility="visible";



    }, 1600);
    document.getElementById("Mab").style.display = "block";
    document.getElementById("buttonx").style.display = "block";
    document.getElementById("text20").style.display = "block";
    document.getElementById("text21").style.display = "block";
    document.getElementById("text22").style.display = "block";
    document.getElementById("text23").style.display = "block";
    document.getElementById("nextButton3").style.display = "block";



  }

    if (EIQb1 == "" ) { 
      setTimeout(function() {
        document.getElementById("wrong3a").textContent = "Please fill the required fields";

        
      }, 1000);
      document.getElementById("wrong3a").style.display = "block";
  } 
  else        {
    
    // Display an error message
    setTimeout(function() {
    document.getElementById("wrong3a").innerHTML = "Wrong Input. The Value of EI&#920;<sub>B</sub> = -16.25";
  }, 1000);
   document.getElementById("wrong3a").style.display = "block";
  }
}
///////////////////////////////////////////////////Page Complete////////////////////////////////////////////////////
//////////////////////////////////////////////////CALCULATION FOR REACTIONS////////////////////////////////////////////////////
//////////////////////////////////////////////////REACTION- 1////////////////////////////////////////////////////

function reaction1() {
  const momentatA = document.getElementById("momentatA").value;
  const momentatB = document.getElementById("momentatB").value;



  // Check if input1 is 3 and input2 is 2
  if (momentatA == 29.5 && momentatB == 37 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("wrong4a").style.visibility="hidden";
      document.getElementById("button5").style.visibility="hidden";
    }, 0);
    setTimeout(function() {
      document.getElementById("reactionRA").textContent = "28.5 kN " ;
    }, 500);
    setTimeout(function() {
      document.getElementById("text29").style.visibility="visible";
      document.getElementById("text30").style.visibility="visible";
      document.getElementById("text31").style.visibility="visible";
      document.getElementById("text32").style.visibility="visible";
      document.getElementById("reactionA").style.visibility="visible";
      document.getElementById("button6").style.visibility="visible";
     


      
      

    }, 1700);
    document.getElementById("wrong4a").style.display = "block";
    document.getElementById("reactionRA").style.display = "block";
    document.getElementById("text29").style.display = "block";
    document.getElementById("text30").style.display = "block";
    document.getElementById("text31").style.display = "block";
    document.getElementById("text32").style.display = "block";
    document.getElementById("reactionA").style.display = "block";
    document.getElementById("button6").style.display = "block";
    document.getElementById("button5").style.display = "block";
    


    
  }

    if (momentatA == "" && momentatB == "" ) { 
      setTimeout(function() {
        document.getElementById("wrong4a").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong4a").style.display = "block";
  } 
  else        {
    
    // Display an error message
   document.getElementById("wrong4a").innerHTML = "Wrong Input, M<sub>A</sub> = 29.5 & M<sub>B</sub> = 37"  ;

  document.getElementById("wrong4a").style.display = "block";
  }
}
//////////////////////////////////////////////////REACTION- 2////////////////////////////////////////////////////

function reaction2() {
  const reactionA = document.getElementById("reactionA").value;



  // Check if input1 is 3 and input2 is 2
  if (reactionA == 28.5 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("button6").style.visibility="hidden";
      document.getElementById("wrong4b").style.visibility="hidden";
    }, 1);
    setTimeout(function() {
      document.getElementById("reactionRB1").textContent = "21.5 kN " ;
      document.getElementById("text33").style.visibility="visible";
      document.getElementById("text34").style.visibility="visible";
      document.getElementById("text35").style.visibility="visible";
      document.getElementById("text36").style.visibility="visible";
      document.getElementById("UDL").style.visibility="visible";
      document.getElementById("button7").style.visibility="visible";
     
      document.getElementById("addspecimen3d").style.visibility="visible";

    }, 1700);
    document.getElementById("reactionRB1").style.display = "block";
  document.getElementById("text33").style.display = "block";
  document.getElementById("text34").style.display = "block";
  document.getElementById("text35").style.display = "block";
  document.getElementById("text36").style.display = "block";
  document.getElementById("UDL").style.display = "block";
  document.getElementById("addspecimen3d").style.display = "block";
  document.getElementById("button7").style.display = "block";
  document.getElementById("button6").style.display = "block";
  }

    if (reactionA == ""  ) { 
      setTimeout(function() {
        document.getElementById("wrong4b").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong4b").style.display = "block";
  } 
  else        {
    
    // Display an error message
   document.getElementById("wrong4b").innerHTML = "Wrong Input. Value of Reaction at pt. A i.e R<sub>A</sub> = 28.5";

  document.getElementById("wrong4b").style.display = "block";
  }
}
//////////////////////////////////////////////////REACTION- 3////////////////////////////////////////////////////

function reaction3() {
  const UDL = document.getElementById("UDL").value;

  // Check if input1 is 3 and input2 is 2
  if (UDL == 24 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("button7").style.visibility="hidden";
      document.getElementById("wrong4c").style.visibility="hidden";
      
    }, 1);
    setTimeout(function() {
      document.getElementById("reactionRB2").textContent = "56.1 kN " ;
      document.getElementById("text37").style.visibility="visible";
      document.getElementById("text38").style.visibility="visible";
      document.getElementById("text39").style.visibility="visible";
      document.getElementById("text40").style.visibility="visible";
      document.getElementById("reactionB2").style.visibility="visible";
      document.getElementById("button8").style.visibility="visible";
     

    }, 1700);
    document.getElementById("reactionRB2").style.display = "block";
    document.getElementById("text37").style.display = "block";
  document.getElementById("text38").style.display = "block";
  document.getElementById("text39").style.display = "block";
  document.getElementById("text40").style.display = "block";
  document.getElementById("reactionB2").style.display = "block";
  document.getElementById("button8").style.display = "block";
  document.getElementById("button7").style.display = "block";
  }

    if (UDL == ""  ) { 
      setTimeout(function() {
        document.getElementById("wrong4c").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong4c").style.display = "block";
  } 
  else        {
    
    // Display an error message
   document.getElementById("wrong4c").innerHTML = "Wrong Input. Value of UDL = 24 kN/m (anti clockwise)";

  document.getElementById("wrong4c").style.display = "block";
  }
}

//////////////////////////////////////////////////REACTION- 4////////////////////////////////////////////////////

function reaction4() {
  const reactionB2 = document.getElementById("reactionB2").value;

  // Check if input1 is 3 and input2 is 2
  if (reactionB2 == 56.1 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("button8").style.visibility="hidden";
      document.getElementById("wrong4d").style.visibility="hidden";

    }, 1);
    setTimeout(function() {
      document.getElementById("reactionRC").textContent = "63.9 kN " ;
      document.getElementById("nextButton4").style.visibility="visible";
      document.getElementById("text41").style.visibility="visible";
     

    }, 1200);
    document.getElementById("reactionRC").style.display = "block";
    document.getElementById("nextButton4").style.visibility="block";
    document.getElementById("text41").style.visibility="block";
      document.getElementById("wrong4d").style.visibility="block";
      document.getElementById("button8").style.display = "block";
  }

    if (reactionB2 == ""  ) { 
      setTimeout(function() {
        document.getElementById("wrong4d").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong4d").style.display = "block";
  } 
  else        {
    
    // Display an error message
   document.getElementById("wrong4d").innerHTML = "Wrong Input. Value of Reaction at pt. C i.e R<sub>C</sub> = -56.1 ";

  document.getElementById("wrong4d").style.display = "block";
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////


    
    

    //////////////////////////////////////////////////////////////////////////////////////////////////////



function restart()

{
    location.reload();
}
//////////////////////navnext start here////////////////////////////////////

function navNext0()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="hidden";

document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="hidden";
document.getElementById('s1_1').style.visibility="visible";
document.getElementById("canvas1").style.visibility="visible";







document.getElementById("text4").style.visibility="hidden";
document.getElementById("text5").style.visibility="hidden";
document.getElementById("text6").style.visibility="hidden";
document.getElementById("L1").style.visibility="hidden";
document.getElementById("box2").style.visibility="hidden";
document.getElementById("button2").style.visibility="hidden";

document.getElementById("text7").style.visibility="hidden";
document.getElementById("text8").style.visibility="hidden";
document.getElementById("text9").style.visibility="hidden";
document.getElementById("L2a").style.visibility="hidden";
document.getElementById("box3").style.visibility="hidden";
document.getElementById("button3").style.visibility="hidden";

document.getElementById("text10").style.visibility="hidden";
document.getElementById("text11").style.visibility="hidden";
document.getElementById("text12").style.visibility="hidden";
document.getElementById("Questext").style.visibility="hidden";
document.getElementById("w2").style.visibility="hidden";
document.getElementById("box4").style.visibility="hidden";
document.getElementById("button4").style.visibility="hidden";









}
function navNext0a()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="hidden";

document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="hidden";

document.getElementById('s1_1').style.visibility="hidden";
document.getElementById("nextButton1").style.visibility="hidden";
document.getElementById("nextButton2").style.visibility="hidden";
document.getElementById("nextButton3").style.visibility="hidden";
document.getElementById("nextButton4").style.visibility="hidden";
document.getElementById("nextButton5").style.visibility="hidden";
document.getElementById("nextButton6").style.visibility="hidden";
document.getElementById("canvas1").style.visibility="visible";


}



function navNext1a()
{
document.getElementById("canvas1").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="visible";
setTimeout(function() {
  document.getElementById('"arw1"').style.visibility="visible";
  document.getElementById('button50').style.visibility="visible";
  }, 1000);
document.getElementById('addspecimen1').style.visibility="visible";
document.getElementById('addspecimen1').style.animation="addspecimen1 2s forwards";

}


function navNext1b()
{
  document.getElementById('addspecimen1b').style.visibility="visible";
  document.getElementById('addspecimen2').style.visibility="visible";
document.getElementById('addspecimen3').style.visibility="hidden";
document.getElementById('addspecimen2').style.animation="addspecimen2 2s forwards";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="visible";
document.getElementById("text4").style.visibility="hidden";
document.getElementById("text5").style.visibility="hidden";
document.getElementById("text6").style.visibility="hidden";
document.getElementById("text7").style.visibility="hidden";
document.getElementById("text8").style.visibility="hidden";
document.getElementById("text9").style.visibility="hidden";
document.getElementById("text10").style.visibility="hidden";
document.getElementById("text11").style.visibility="hidden";
document.getElementById("text12").style.visibility="hidden";
document.getElementById("Questext").style.visibility="hidden";
document.getElementById("box2").style.visibility="hidden";
document.getElementById("box3").style.visibility="hidden";
document.getElementById("box4").style.visibility="hidden";
document.getElementById("L1").style.visibility="hidden";
document.getElementById("L2a").style.visibility="hidden";
document.getElementById("w2").style.visibility="hidden";
document.getElementById("button2").style.visibility="hidden";
document.getElementById("button3").style.visibility="hidden";
document.getElementById("button4").style.visibility="hidden";





document.getElementById("nextButton1").style.visibility="hidden";
document.getElementById("wrong1a").style.visibility="visible";
document.getElementById("wrong1b").style.visibility="visible";
document.getElementById("wrong1c").style.visibility="visible";
document.getElementById("wrong1d").style.visibility="visible";


}


function navNext1c()
{

document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="visible";
document.getElementById('addspecimen1ba').style.visibility="visible";
document.getElementById('addspecimen2b').style.visibility="visible";
document.getElementById('addspecimen3b').style.visibility="visible";
document.getElementById("nextButton2").style.visibility="hidden";
document.getElementById('text16').style.visibility="hidden";
document.getElementById('box6').style.visibility="hidden";
document.getElementById('text17').style.visibility="hidden";
document.getElementById('text17b').style.visibility="hidden";
document.getElementById('eqn1').style.visibility="hidden";
document.getElementById('eqn2').style.visibility="hidden";
document.getElementById('eqn3').style.visibility="hidden";
document.getElementById('eqn4').style.visibility="hidden";
document.getElementById('box7').style.visibility="hidden";
document.getElementById('text18').style.visibility="hidden";
document.getElementById('text18b').style.visibility="hidden";
document.getElementById('box8').style.visibility="hidden";
document.getElementById('text19').style.visibility="hidden";
document.getElementById('text19b').style.visibility="hidden";



}



function navNext1d()
{
  document.getElementById('buttonx').style.visibility="visible";
document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="visible";
document.getElementById('text20').style.visibility="hidden";
document.getElementById('text21').style.visibility="hidden";
document.getElementById('text22').style.visibility="hidden";
document.getElementById('text23').style.visibility="hidden";
document.getElementById('addspecimen1c').style.visibility="visible";
document.getElementById('addspecimen2c').style.visibility="visible";
document.getElementById('addspecimen3c').style.visibility="visible";
document.getElementById("nextButton3").style.visibility="hidden";




}





function navNext1e()
{
  document.getElementById('nextButton4').style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="visible";
document.getElementById('addspecimen1d').style.visibility="visible";
document.getElementById('addspecimen2d').style.visibility="visible";
document.getElementById('addspecimen3d').style.visibility="hidden";

document.getElementById('text29').style.visibility="hidden";
document.getElementById('text30').style.visibility="hidden";
document.getElementById('text31').style.visibility="hidden";
document.getElementById('text32').style.visibility="hidden";
document.getElementById('text33').style.visibility="hidden";
document.getElementById('text34').style.visibility="hidden";
document.getElementById('text35').style.visibility="hidden";
document.getElementById('text36').style.visibility="hidden";
document.getElementById('text37').style.visibility="hidden";
document.getElementById('text38').style.visibility="hidden";
document.getElementById('text39').style.visibility="hidden";
document.getElementById('text40').style.visibility="hidden";
document.getElementById('text41').style.visibility="hidden";

document.getElementById('reactionA').style.visibility="hidden";
document.getElementById('UDL').style.visibility="hidden";
document.getElementById('reactionB2').style.visibility="hidden";
document.getElementById('button6').style.visibility="hidden";
document.getElementById('button7').style.visibility="hidden";
document.getElementById('button8').style.visibility="hidden";
document.getElementById('button9').style.visibility="hidden";





document.getElementById("nextButton5").style.visibility="hidden";



}


function navNext1f()
{
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="visible";
document.getElementById("nextButton6").style.visibility="visible";
document.getElementById('addspecimen6').style.visibility="visible";
document.getElementById('addspecimen6').style.animation="addspecimen6 2s forwards";
}


function navNext1h()
{
document.getElementById("canvas1f").style.visibility="hidden";
document.getElementById("canvas1h").style.visibility="visible";
document.getElementById("addspecimen4").style.visibility="visible";

}








$(document).ready(function(){
	$('.showgraph1').addClass('open');
});








function add_stand()
{

document.getElementById('arw1').style.visibility="hidden";
document.getElementById('add_stand').style.visibility="hidden";
document.getElementById('specimen1').style.visibility="visible";
document.getElementById('specimen1').style.animation="specimen1 2s forwards";
document.getElementById('specimen2').style.visibility="visible";
document.getElementById('specimen2').style.animation="specimen2 1s forwards";
document.getElementById('specimen3').style.visibility="visible";
document.getElementById('specimen3').style.animation="specimen3 1s forwards";
document.getElementById('specimen4').style.visibility="visible";
document.getElementById('specimen4').style.animation="specimen4 1s forwards";
document.getElementById('specimen5').style.visibility="visible";
document.getElementById('specimen5').style.animation="specimen5 1s forwards";
document.getElementById('specimen6').style.visibility="visible";
document.getElementById('specimen6').style.animation="specimen6 1s forwards";

  setTimeout(function()

	{
document.getElementById('s1_1').style.visibility="hidden";
document.getElementById('s1_2').style.visibility="visible";
document.getElementById('arw2').style.visibility="visible";
document.getElementById('add_aluminium_bar').style.visibility="visible";

	},2000);

}







function start_analysis()
{
document.getElementById('start_analysis'). style.visibility="hidden";}
document.getElementById('start_Analysis1').style.visibility="hidden";
function add_aluminium_bar()
{
document.getElementById('arw2').style.visibility="hidden";
document.getElementById('add_aluminium_bar').style.visibility="hidden";
document.getElementById('aluminium_canvas1').style.visibility="visible";
document.getElementById('aluminium_canvas1').style.animation="aluminium_canvas1 1s forwards";
document.getElementById('start_Analysis1').style.visibility="hidden";
  setTimeout(function()

	{
document.getElementById('s1_2').style.visibility="hidden";
document.getElementById('s1_3').style.visibility="visible";
document.getElementById('arw3').style.visibility="visible";
document.getElementById('add_cellotap').style.visibility="visible";
document.getElementById('start_Analysis1').style.visibility="hidden";


	},1000);

}

function start_Analysis()
{
  document.getElementById('arw5').style.visibility="hidden";
  document.getElementById('start_Analysis').style.visibility="hidden"; 
  

}
