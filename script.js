// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏背景变化
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// 下载计数
document.querySelectorAll('.download-btn[href*=".exe"]').forEach(btn => {
    btn.addEventListener('click', function() {
        // 这里可以添加下载统计代码
        console.log('开始下载应用');
        // 示例：发送到 Google Analytics
        // gtag('event', 'download', {
        //     'event_category': '软件下载',
        //     'event_label': 'Windows版本'
        // });
    });
});

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }
    
    // 点击菜单外区域关闭菜单
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 添加加载完成的样式
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// 轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;
    
    // 初始化轮播
    function initCarousel() {
        if (slides.length === 0) return;
        
        // 显示第一张幻灯片
        slides[0].classList.add('active');
        dots[0].classList.add('active');
        
        // 设置轮播图自动播放
        setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    // 切换到下一张幻灯片
    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }
    
    // 切换到上一张幻灯片
    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
    
    // 跳转到指定幻灯片
    function goToSlide(index) {
        // 隐藏当前幻灯片
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // 显示新幻灯片
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // 事件监听
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // 键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // 初始化轮播
    initCarousel();
});

// 模态框功能
document.addEventListener('DOMContentLoaded', function() {
    const wechatBtn = document.getElementById('wechat-btn');
    const qqBtn = document.getElementById('qq-btn');
    const wechatModal = document.getElementById('wechat-modal');
    const qqModal = document.getElementById('qq-modal');
    const closeModals = document.querySelectorAll('.close-modal');
    
    // 显示微信模态框
    if (wechatBtn && wechatModal) {
        wechatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            wechatModal.classList.add('active');
            // 添加无障碍属性
            wechatModal.setAttribute('aria-hidden', 'false');
        });
    }
    
    // 显示QQ模态框
    if (qqBtn && qqModal) {
        qqBtn.addEventListener('click', function(e) {
            e.preventDefault();
            qqModal.classList.add('active');
            // 添加无障碍属性
            qqModal.setAttribute('aria-hidden', 'false');
        });
    }
    
    // 关闭模态框
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            wechatModal.classList.remove('active');
            qqModal.classList.remove('active');
            // 更新无障碍属性
            wechatModal.setAttribute('aria-hidden', 'true');
            qqModal.setAttribute('aria-hidden', 'true');
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === wechatModal) {
            wechatModal.classList.remove('active');
            wechatModal.setAttribute('aria-hidden', 'true');
        }
        if (e.target === qqModal) {
            qqModal.classList.remove('active');
            qqModal.setAttribute('aria-hidden', 'true');
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            wechatModal.classList.remove('active');
            qqModal.classList.remove('active');
            wechatModal.setAttribute('aria-hidden', 'true');
            qqModal.setAttribute('aria-hidden', 'true');
        }
    });
});
