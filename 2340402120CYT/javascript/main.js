// js/main.js
console.log('23404020120CYT的个人站点加载完成！');

document.addEventListener('DOMContentLoaded', function() {
    console.log('欢迎访问 23404020120CYT 的个人站点！');
    
    // 显示当前年份
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© ${currentYear} 23404020120CYT 版权所有`;
    }
    
    // 添加导航交互效果
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('导航到: ' + this.textContent);
        });
    });
});