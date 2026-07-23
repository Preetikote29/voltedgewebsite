// Scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Toggle service details
function toggleServiceDetail(card, text) {
    const detail = card.querySelector('.service-detail');
    if (detail.style.display === "block") { detail.style.display = "none"; }
    else { detail.style.display = "block"; detail.textContent = text; }
}

// Sticky header shrink on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { header.classList.add('shrink'); }
    else { header.classList.remove('shrink'); }
});

// Product click (can enhance to modal later)
function openProductModal(title, img, desc) {
    alert(title + "\n" + desc);
}