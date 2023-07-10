$(function () {
    var icons = {
        "general" : "fas fa-warehouse",
        "info" : "fas fa-info-circle",
        "success" : "fas fa-check-circle",
        "error" : "fas fa-exclamation-circle",
        "warning" : "fas fa-exclamation-triangle"
    };

    var colours = {
        "general" : "#FFFFFF",
        "info" : "#75D6FF",
        "success" : "#76EE62",
        "error" : "#FF4A4A",
        "warning" : "#FFCB11"
    };

    var sound = new Audio('notification.mp3');
    sound.volume = 0.6;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'notify') {
            

            var number = Math.floor((Math.random() * 1000) + 1);
            $('.notify-wrapper').append(`
            <div class="notify-div wrapper-${number}" style="border-left: 5px solid ${colours[event.data.type]}; ">

    
                <div class="notify-icon-box" style="border: 2px solid ${colours[event.data.type]};">
                    <i class="${icons[event.data.type]} fa-ms notify-icon" style="color: ${colours[event.data.type]}"></i>
                </div>

                <div class="notify-text-box">
                    <p style="color:${colours[event.data.type]}; font-size: 20px; font-weight: 500;  margin-bottom: 0px; margin-top: 10px;">${event.data.title}</p>
                    <p style="margin-top: 0; color: rgba(247, 247, 247, 0.75);">${event.data.message}</p>
                </div>
                
                
            </div>`)
            $(`.wrapper-${number}`).fadeIn("slow");
            sound.play();
            setTimeout(function () {
                $(`.wrapper-${number}`).fadeOut( "slow", function () {
                    $(`.wrapper-${number}`).remove()
                })
            }, event.data.time)
        }
    })
})
