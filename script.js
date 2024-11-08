$(function() {
    console.log("Το script.js φορτώθηκε σωστά!");
    var book = $('#book');
    var pages = $('.page'); // Βρίσκουμε όλες τις σελίδες

    var currentPage = 0; // Αρχική σελίδα

    // Εμφάνιση πρώτης σελίδας
    $(pages[currentPage]).addClass('active');

    // Επόμενη σελίδα
    $('#next-page').click(function() {
        if (currentPage < pages.length - 1) {
            $(pages[currentPage]).removeClass('active');
            currentPage++;
            $(pages[currentPage]).addClass('active');
        }
    });

    // Προηγούμενη σελίδα
    $('#prev-page').click(function() {
        if (currentPage > 0) {
            $(pages[currentPage]).removeClass('active');
            currentPage--;
            $(pages[currentPage]).addClass('active');
        }
    });

    // Άλλες ενέργειες για την κονσόλα (View Cover, Rotate, Open/Close, κλπ.)
    $('#view-cover').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-cover');
    });

    $('#view-back').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-back');
    });

    $('#open-book').click(function(){
        if (book.attr('class') != 'open-book') {
            $(this).addClass('cur').siblings().removeClass('cur');
            book.removeClass().addClass('open-book');
        } else {
            $(this).removeClass('cur');
            $('#view-cover').addClass('cur');
            book.removeClass().addClass('view-cover');
        }
    });

    $('#view-rotate').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-rotate');
    });
});
