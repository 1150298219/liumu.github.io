// 为导航栏链接添加点击事件监听器
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认的链接行为
        const targetId = this.getAttribute('href'); // 获取目标部分的ID
        const targetSection = document.querySelector(targetId); // 获取对应的元素
        targetSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到目标部分
    });
});
