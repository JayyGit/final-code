document.addEventListener('DOMContentLoaded', function() {
    const couponSlides = document.querySelector('.coupon-slides');
    
    const coupons = [
        'COUPON CODE "JAY" - 10% OFF',
        'FREE SHIPPING ON ORDERS OVER $50',
        'NEW CUSTOMERS GET 15% OFF - CODE "SWEET"'
    ];
    
    coupons.forEach(coupon => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.textContent = coupon;
        couponSlides.appendChild(slide);
    });
    
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        couponSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    slides[0].classList.add('active');
    setInterval(nextSlide, 3000);
});