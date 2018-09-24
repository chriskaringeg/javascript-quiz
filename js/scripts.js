var questions=function(question1,question2,question3,question4)
return(question1+question2+question3+question4)
(document).ready(function() {
  $("#script").submit(function() {
          var qs1=parseInt($("input:radio[name=question1]:checked").val();))
          var qs2=parseInt($("input:radio[name=question2]:checked").val();)
          var qs3=parseInt($("input:radio[name=question3]:checked").val();)
          var qs4=parseInt($("input:radio[name=question4]:checked").val();)
          var scores=result(question1,question2,question3,question4)
          if (scores>=70) {
            total.innerHTML=("very good your score is " + scores)
          }
          else{
            total.innerHTML=("fairly good your score is "+ scores)
          }
            $("#story").sho();
           $("#fifthp").show();
         });
       });
}
