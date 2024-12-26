
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
