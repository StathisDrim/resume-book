$(document).ready(function() {
    console.log("Το script.js φορτώθηκε σωστά!");

    var book = $('#book');

    // Συνάρτηση για αλλαγή κατάστασης του βιβλίου
    function setBookClass(className) {
        book.removeClass().addClass(className);
        console.log("Η κλάση του βιβλίου άλλαξε σε:", className);  // Έλεγχος αλλαγής κλάσης
    }

    // Χειρισμός κλικ για τα κουμπιά της κονσόλας
    $('#view-cover').click(function() {
        setBookClass('view-cover');
    });

    $('#view-back').click(function() {
        setBookClass('view-back');
    });

    $('#open-book').click(function() {
        if (book.hasClass('open-book')) {
            setBookClass('view-cover');  // Κλείσιμο στο εξώφυλλο
        } else {
            setBookClass('open-book');  // Άνοιγμα βιβλίου
        }
    });

    $('#view-rotate').click(function() {
        setBookClass('view-rotate');
    });

    // Χειρισμός κλικ για το ίδιο το βιβλίο
    book.click(function() {
        if (book.hasClass('view-cover')) {
            setBookClass('view-back');
        } else if (book.hasClass('view-back')) {
            setBookClass('open-book');
        } else if (book.hasClass('open-book')) {
            setBookClass('view-rotate');
        } else {
            setBookClass('view-cover');
        }
    });
});
