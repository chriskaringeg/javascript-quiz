(document).ready(function() {
         $("#blanks form").submit(function() {
          var qs1=$("input:radio[name=method]:checked").val();
          var qs2=$("input:radio[name=operator]:checked").val();
          var qs3=$("input:radio[name=dataType]:checked").val();
          var qs4=$("input:radio[name=function]:checked").val();
           blanks.forEach(function(blank) {
             var userInput = $("input." + blank).val();
             $("." + blank).text(userInput).val();
           });

           $("#fifthp").show();
         });
       });
}
