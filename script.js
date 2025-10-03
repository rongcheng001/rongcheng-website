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
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
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
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // 创建移动端菜单按钮
    if (window.innerWidth <= 768) {
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
        menuButton.className = 'menu-toggle';
        menuButton.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5em;
            color: #667eea;
            cursor: pointer;
            padding: 5px;
        `;
        
        menuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        nav.querySelector('.nav-container').appendChild(menuButton);
    }
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