
// document.addEventListener('DOMContentLoaded', function () {
//     const menuItems = document.querySelectorAll('.menu > li > a')

//     menuItems.forEach((item) => {
//         item.addEventListener('click', function (e) {
//             e.preventDefault()
//             const parent = e.target.closest('li')
//             const submenu = parent.querySelector('.pc-submenu')
//             const span = parent.querySelector('a > span')

//             if (submenu) {
//                 if (parent.classList.contains('open')) {
//                     parent.classList.remove('open')
//                     span.classList.remove('expand')
//                     span.classList.add('close')
//                 } else {
//                     document.querySelectorAll('.menu > li.open').forEach((openItem) => {
//                         openItem.classList.remove('open')
//                         const openSpan = openItem.querySelector('a > span')
//                         if (openSpan) {
//                             openSpan.classList.remove('close')
//                             openSpan.classList.add('expand')
//                         }
//                     })
//                     parent.classList.add('open')
//                     span.classList.remove('close')
//                     span.classList.add('expand')
//                 }
//             }
//         })
//     })
// })
document.addEventListener('DOMContentLoaded', function () {
    // 重置選單控制狀態
    const menuControl = document.getElementById('menu-control');
    if (menuControl) {
        menuControl.checked = false;
    }

    const menuItems = document.querySelectorAll('.menu > li > a');

    menuItems.forEach((item) => {
        item.addEventListener('click', function (e) {
            const parent = e.target.closest('li');
            const submenu = parent.querySelector('.pc-submenu');
            const span = parent.querySelector('a > span');

            if (submenu) {
                // e.preventDefault();
                if (parent.classList.contains('open')) {
                    parent.classList.remove('open');
                    span.classList.remove('expand');
                    span.classList.add('close');
                } else {
                    document.querySelectorAll('.menu > li.open').forEach((openItem) => {
                        openItem.classList.remove('open');
                        const openSpan = openItem.querySelector('a > span');
                        if (openSpan) {
                            openSpan.classList.remove('close');
                            openSpan.classList.add('expand');
                        }
                    });
                    parent.classList.add('open');
                    span.classList.remove('close');
                    span.classList.add('expand');
                }
            } else {
                // 如果點擊的是一個連結，則重新加載頁面
                menuControl.checked = false; // 重置選單控制狀態
                window.location.href = item.getAttribute('href');
            }
        });
    });
});