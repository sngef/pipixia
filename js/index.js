$(function() {
    var xz = true;
    $('.m img').click(function() {
        $(this).toggleClass('myfirst');
        if (xz == true) {
            $('.mu')[0].pause();
            xz = false;
        } else {
            $('.mu')[0].play();
            xz = true;
        }
    })
});