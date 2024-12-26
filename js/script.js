// 自动切换 Banner
let currentIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function changeSlide() {
    // 隐藏所有幻灯片
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    // 让当前幻灯片可见
    slides[currentIndex].style.display = 'block';

    // 更新圆点状态
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[currentIndex].classList.add('active');

    // 自动切换到下一张
    currentIndex = (currentIndex + 1) % totalSlides;
}

// 初始化显示第一张幻灯片
changeSlide();

// 每30秒自动切换幻灯片
setInterval(changeSlide, 30000);

// 点击圆点切换幻灯片
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        changeSlide();
    });
});

// 鼠标滑动切换（滑动到左边切换到上一张，右边切换到下一张）
let startX;
let endX;

document.querySelector('#banner').addEventListener('mousedown', (e) => {
    startX = e.pageX;
});

document.querySelector('#banner').addEventListener('mouseup', (e) => {
    endX = e.pageX;
    if (endX < startX) {
        // 滑动到右侧，切换到下一张
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        // 滑动到左侧，切换到上一张
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    changeSlide();
});
// 获取返回顶部按钮
const backToTopButton = document.getElementById('backToTop');

// 当用户滚动页面时，显示或隐藏按钮
window.onscroll = function() {
    console.log('11111111111',document.body.scrollTo);
    console.log('滚动位置:', document.documentElement.scrollTop || document.body.scrollTop);
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block'; // 显示按钮
    } else {
        backToTopButton.style.display = 'none';  // 隐藏按钮
    }
};

// 点击按钮时，滚动到顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 滚动到顶部
}




   // 打开模态框
   function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var downloadLink = document.getElementById("downloadLink");

    modal.style.display = "flex";
    modalImage.src = imgElement.src;
    downloadLink.href = imgElement.src; // 设置下载链接
}

// 关闭模态框
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}