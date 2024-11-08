$(function() {
    console.log("Το script.js φορτώθηκε σωστά!");

    var book = $('#book');
    
    // Λίστα των καταστάσεων για εναλλαγή
    var states = ["view-cover", "view-back", "open-book", "view-rotate"];
    var currentState = 0;  // Ένδειξη τρέχουσας κατάστασης
    
    // Κλικ στα κουμπιά της κονσόλας
    $('#view-cover').click(function() {
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-cover');
        currentState = 0;
    });
    
    $('#view-back').click(function() {
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-back');
        currentState = 1;
    });
    
    $('#open-book').click(function() {
        if (book.attr('class') != 'open-book') {
            $(this).addClass('cur').siblings().removeClass('cur');
            book.removeClass().addClass('open-book');
            currentState = 2;
        } else {
            $(this).removeClass('cur');
            $('#view-cover').addClass('cur');
            book.removeClass().addClass('view-cover');
            currentState = 0;
        }
    });
    
    $('#view-rotate').click(function() {
        $(this).addClass('cur').siblings().removeClass('cur');
        book.removeClass().addClass('view-rotate');
        currentState = 3;
    });
    
    // Κλικ στο βιβλίο για εναλλαγή καταστάσεων
    book.click(function() {
        currentState = (currentState + 1) % states.length; // Επόμενη κατάσταση
        book.removeClass().addClass(states[currentState]);  // Αλλαγή κατάστασης
    });
});
