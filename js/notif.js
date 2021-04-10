const read = document.querySelectorAll('.read');

// const read = document.querySelectorAll('.notif');


// read.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

read.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.classList.add('read-messages');
        e.preventDefault();
        e.stopPropagation();
    });
});