$(document).ready(function() {



    $(".feedback_form-submit").click(function(){

        var posName = $("#name").val();
        var posEmail = $("#email").val();
        var posTel = $("#tel").val();
        var posText = $("#texarial").val();
        $.ajax({
            type: "POST",
            url: "../js/send.php",
            data: {"posName": posName, "posEmail": posEmail, "posTel":posTel, "posText": posText},
            cache: false,
            success: function(response) {
                var messageResp = "<p>Спасибо, </p>";
                var resultStat = "!</strong> . Ваше сообщение отправлено!</p>";
                var oll = (messageResp + posName + resultStat);
                if(response == 1){
                   console.log(oll);
                } else {
                    console.log(response); }
            }


        });
        return false;


    });

});