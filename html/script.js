const icons = {
    "general" : "fas fa-warehouse",
    "info"    : "fas fa-info-circle",
    "success" : "fas fa-check-circle",
    "error"   : "fas fa-exclamation-circle",
    "warning" : "fas fa-exclamation-triangle"
};

const colours = {
    "general" : "#FFFFFF",
    "info"    : "#75D6FF",
    "success" : "#76EE62",
    "error"   : "#FF4A4A",
    "warning" : "#FFCB11"
};

var sound = new Audio('notification.mp3');
sound.volume = 0.25;

window.addEventListener('message', (event) => {
    if (event.data.action == 'notify') {
        var number = Math.floor((Math.random() * 1000) + 1);

        $('.notify-wrapper').append(`
            <div class="notify-div wrapper-${number}" style="border-left: 0.5vh solid ${colours[event.data.type]}; ">
                <div class="notify-icon-box" style="border: 0.2vh solid ${colours[event.data.type]};">
                    <i class="${icons[event.data.type]} fa-ms notify-icon" style="color: ${colours[event.data.type]}"></i>
                </div>

                <div class="notify-text-box">
                    <p style="color:${colours[event.data.type]}; font-size: 2vh; font-weight: 500; margin-bottom: 0vh; margin-top: 1vh;">${event.data.title}</p>
                    <p style="margin-top: 0; color: rgba(247, 247, 247, 0.75);">${event.data.message}</p>
                </div>
            </div>
        `)

        $(`.wrapper-${number}`).fadeIn("slow");
        sound.play();

        setTimeout(() => {
            $(`.wrapper-${number}`).fadeOut("slow", function () {
                $(`.wrapper-${number}`).remove()
            })
        }, event.data.time)
    }
})