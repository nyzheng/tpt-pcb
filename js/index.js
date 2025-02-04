let startX = 0;
let startScrollLeft = 0;

const MouseDownHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let dragBox = document.querySelector('.person-box');
    dragBox.classList.add("active");
    startX = e.clientX;
    startScrollLeft = dragBox.scrollLeft;

    console.log("x:", e.pageX, e.clientX);
    console.log("y:", e.pageY, e.clientY);
};

const MouseMoveHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let dragBox = document.querySelector('.person-box');
    if (dragBox.classList.contains('active')) {
        let move = e.clientX - startX;
        dragBox.scrollLeft = startScrollLeft - move;
    }
};

const MouseUpHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let dragBox = document.querySelector(".person-box");
    dragBox.classList.remove("active");
};

let dragBox = document.querySelector(".person-box");
dragBox.addEventListener('mousedown', MouseDownHandler);
document.addEventListener('mousemove', MouseMoveHandler); // 改為 document 以更好地追蹤滑鼠移動
document.addEventListener('mouseup', MouseUpHandler);



document.addEventListener('DOMContentLoaded', function () {
    const personBox = document.querySelector('.person-box');
    const scrollbar = document.querySelector('.person-box-scrollbar');

    personBox.addEventListener('scroll', function () {
        updateScrollDots();
    });

    function updateScrollDots() {
        const scrollPercentage = (personBox.scrollLeft / (personBox.scrollWidth - personBox.clientWidth)) * 100;
        const dotsContainer = document.querySelector('.person-box-scrollbar');

        dotsContainer.innerHTML = '';

        for (let i = 0; i < 5; i++) {
            const dot = document.createElement('div');
            dot.classList.add('scroll-dot');

            if (
                (i === 4 && scrollPercentage >= i * 20) ||
                (i < 4 && i * 20 <= scrollPercentage && scrollPercentage < (i + 1) * 20)
            ) {
                dot.classList.add('active');
            }

            dot.addEventListener('click', function () {
                const targetScroll = (i / 5) * (personBox.scrollWidth - personBox.clientWidth);

                // 使用 scroll-behavior 实现平滑滚动
                personBox.style.scrollBehavior = 'smooth';
                personBox.scrollLeft = targetScroll;

                // 等滚动完成后将 scroll-behavior 恢复为默认值
                setTimeout(() => {
                    personBox.style.scrollBehavior = 'auto';
                }, 1000);
            });

            dotsContainer.appendChild(dot);
        }
    }

    updateScrollDots();
});

// const isMobileDevice = () => {
//     const MobileDevice = ["Android", 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
//     let isMobile = MobileDevice.some(e => navigator.userAgent.match(e));
//     return isMobile
// }