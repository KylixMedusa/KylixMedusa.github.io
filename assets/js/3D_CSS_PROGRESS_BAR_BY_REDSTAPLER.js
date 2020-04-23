var i=0;

setInterval(function() {
    if (i<=100){
        $('.bar').width(i + '%');
        i++
    }
}, 10);