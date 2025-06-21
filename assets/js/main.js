const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const selectLangBtn = document.querySelector('.select-lang__btn');
const selectLangList = document.querySelectorAll('.select-lang__list li');

if (selectLangList.length) {
    selectLangList.forEach(el => {
        el.onclick = () => {
            selectLangBtn.querySelector('input').value = el.textContent;
            selectLangBtn.querySelector('span').textContent = el.textContent;
            selectLangList.forEach(a => {
                if (a == el) {
                    a.classList.add('selected');
                } else {
                    a.classList.remove('selected');
                }
            })
        }
    })
}

const menu = document.querySelector('.menu');
const headerBars = document.querySelector('.header-bars');
const menuNavLinks = document.querySelectorAll('.menu-navs a');

if (menu) {
    headerBars.onclick = () => {
        menu.classList.toggle('active');
        headerBars.classList.toggle('active');

        if (menu.classList.contains('active')) {
            bodyHidden();
            window.scrollTo(0, 0);
        } else {
            bodyVisible();
        }
    }

    menuNavLinks.forEach(el => {
        el.onclick = () => {
            menu.classList.remove('active');
            headerBars.classList.remove('active');
            bodyVisible();
        }
    })
}

const themeBtn = document.querySelectorAll('.theme-btn');
const body = document.querySelector('body');
let theme = localStorage.getItem('theme');

if (theme == 'dark-theme') {
    body.classList.add('dark-theme');
} 

themeBtn.forEach(el => {
    el.onclick = () => {
        theme = localStorage.getItem('theme');
        if (theme == 'dark-theme') {
            localStorage.setItem('theme', 'light-theme');
            body.classList.remove('dark-theme');
        } else {
            localStorage.setItem('theme', 'dark-theme');
            body.classList.add('dark-theme');
        }
    }
})