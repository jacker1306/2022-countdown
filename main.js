$(document).ready(function() {
    var countDate = new Date('Jan 1, 2022 00:00:00').getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDate - now;
        console.log(distance % (1000*60*60*24));
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('.day-value').text(days);
        $('.hour-value').text(hours);
        $('.minute-value').text(minutes);
        $('.second-value').text(seconds);

        if (distance < 1) {
            clearInterval(x);
            $('.time-content').text('HAPPY NEW YEAR!')
        }
    }, 1000);
})