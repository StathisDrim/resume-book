$(function() {
    console.log("Το script.js φορτώθηκε σωστά!");

    var book = $('#book');

    // Καταστάσεις και κουμπιά που τις ελέγχουν
    var states = ["view-cover", "view-back", "open-book", "view-rotate"];
    var currentState = 0; // Ένδειξη της τρέχουσας κατάστασης

    // Συνάρτηση για αλλαγή της κατάστασης του βιβλίου
    function changeBookState(newStateIndex) {
        currentState = newStateIndex;
        book.removeClass().addClass(states[currentState]);
        // Ενημέρωση των κουμπιών
        $('#opt dd').removeClass('cur').eq(currentState).addClass('cur');
    }

    // Εναλλαγή με τα κουμπιά της κονσόλας
    $('#view-cover').click(function() {
        changeBookState(0);
    });

    $('#view-back').click(function() {
        changeBookState(1);
    });

    $('#open-book').click(function() {
        if (book.hasClass('open-book')) {
            changeBookState(0); // Κλείνει το βιβλίο και γυρνάει στο εξώφυλλο
        } else {
            changeBookState(2); // Ανοίγει το βιβλίο
        }
    });

    $('#view-rotate').click(function() {
        changeBookState(3);
    });

    // Κλικ στο βιβλίο για εναλλαγή καταστάσεων
    book.click(function() {
        currentState = (currentState + 1) % states.length; // Εναλλαγή στην επόμενη κατάσταση
        changeBookState(currentState);  // Αλλαγή κατάστασης και ενημέρωση κουμπιών
    });
});

