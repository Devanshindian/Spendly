// main.js

(function () {
    var overlay = document.getElementById('demo-modal');
    if (!overlay) return;

    var iframe  = document.getElementById('demo-iframe');
    var openBtn = document.getElementById('open-demo-modal');
    var closeBtn = document.getElementById('close-demo-modal');

    function openModal() {
        iframe.src = iframe.dataset.src;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        // Stop video by clearing src
        iframe.src = '';
    }

    openBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
}());
