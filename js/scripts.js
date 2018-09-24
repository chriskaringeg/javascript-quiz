
  (document).ready(function() {
         $("#blanks form").submit(function() {
           var blanks = ["qs", "qs", "qs", "qs","qs", "qs"];

           blanks.forEach(function(blank) {
             var userInput = $("input." + blank).val();
             $("." + blank).text(userInput).val();
           });

           $("#story").sho();
         });
       });
}
