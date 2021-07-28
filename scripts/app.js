$(document).ready(() => {
    $('.ham').on('click', () => {
        if ($('#navbar').css('transform') === 'matrix(0, 0, 0, 0, 0, 0)') {
            $('#navbar').css('transform', 'scale(1,1)');
        } else {
            $('#navbar').css('transform', 'scale(0,0)');
        }
    });
});