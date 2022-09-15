const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.hiddenLeftToRight');
hiddenElements1.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hiddenRightToLeft');
hiddenElements2.forEach((el) => observer.observe(el));

const tween = KUTE.fromTo(
    '#blob1', {
        path: '#blob1'
    }, {
        path: '#blob2'
    }, {
        repeat: 999,
        duration: 3000,
        yoyo: true
    }
).start();