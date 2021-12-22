class User {
    constructor(name, email, password, accountType) {
        this.id = Math.random() * 10;
        this.name = name;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
    }
}

const sign__in__btn = document.querySelector('.sign__in__btn')
sign__in__btn.addEventListener('click', event => {
    //event.preventDefault()
    const loginEmail = document.querySelector('#loginEmail').value
    const loginPassword = document.querySelector('#loginPassword').value
    const users = JSON.parse(localStorage.getItem('users'))
    const blockedUsers = JSON.parse(localStorage.getItem('blockedUsers'))
    users.map((user) => {
        console.log(user)
        if (user.email.localeCompare(loginEmail) === 0 && user.password.localeCompare(loginPassword) === 0) {
            if (blockedUsers !== null) {
                let check = 0
                for (let i = 0; i < blockedUsers.length; i++) {
                    if (Number(blockedUsers[i]) === Number(user.id)) {
                        check = 1
                        break
                    }
                }
                if (!check) {
                    sessionStorage.setItem('user', JSON.stringify(user))
                } else {
                    alert("Account is blocked")
                }
            } else {
                sessionStorage.setItem('user', JSON.stringify(user))
            }
        }
    })
    console.log(loginEmail, loginPassword)
})


const sign__up__btn = document.querySelector('.sign__up__btn')
sign__up__btn.addEventListener('click', event => {
    //event.preventDefault()
    const RegName = document.querySelector('#RegName').value
    const RegEmail = document.querySelector('#RegEmail').value
    const RegPassword = document.querySelector('#RegPassword').value
    const regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/
    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (regexEmail.test(RegEmail) && regexPassword.test(RegPassword)) {
        let RegisteredUser;
        if (RegName.localeCompare('Admin') === 0) {
            RegisteredUser = new User(RegName, RegEmail, RegPassword, 'admin')
        } else {
            RegisteredUser = new User(RegName, RegEmail, RegPassword, 'user')
        }
        console.log(JSON.stringify(RegisteredUser))
        let users = [];
        if (localStorage.getItem('users') != null) {
            users = localStorage.getItem('users')
            let JSONFormatUsers = JSON.parse(users)
            console.log(JSONFormatUsers)
            let newUserList = [...JSONFormatUsers, RegisteredUser]
            localStorage.setItem('users', JSON.stringify(newUserList))
        } else {
            localStorage.setItem('users', "[" + JSON.stringify(RegisteredUser) + "]")
            event.preventDefault()
        }
    } else {
        alert("Incorrect email or password")
    }

    console.log(JSON.parse(localStorage.getItem('users')))
})

const header__profile__register = document.querySelector('.header__profile__register')
header__profile__register.addEventListener('click', (event) => {
    const login__wrapper = document.querySelector('.login__wrapper')
    login__wrapper.classList.toggle('hide')
    const registration__form = document.querySelector('.registration__form')
    registration__form.classList.toggle('hide')
})

const header__profile__login = document.querySelector('.header__profile__login')
header__profile__login.addEventListener('click', (event) => {
    const login__wrapper = document.querySelector('.login__wrapper')
    login__wrapper.classList.toggle('hide')
    const authorization__form = document.querySelector('.authorization__form')
    authorization__form.classList.toggle('hide')
})

const close__reg_btn = document.querySelector('.close__reg_btn')
close__reg_btn.addEventListener('click', (event) => {
    const login__wrapper = document.querySelector('.login__wrapper')
    login__wrapper.classList.toggle('hide')
    const registration__form = document.querySelector('.registration__form')
    registration__form.classList.toggle('hide')
})

const close__auth__btn = document.querySelector('.close__auth__btn')
close__auth__btn.addEventListener('click', (event) => {
    const login__wrapper = document.querySelector('.login__wrapper')
    login__wrapper.classList.toggle('hide')
    const authorization__form = document.querySelector('.authorization__form')
    authorization__form.classList.toggle('hide')
})
const header__about = document.querySelector('.header__about')
if (sessionStorage.getItem('user')) {
    if (JSON.parse(sessionStorage.getItem('user')).accountType.localeCompare('admin') === 0) {
        header__about.innerHTML = ' <a class="header__about__us" id="top" href="about.html">О нас</a>\n' +
            '        <a class="header__about__news" href="#">Новости и мероприятия</a>\n' +
            '        <a class="header__about__delivery" id="buy" href="Buybook.html">Доставка и оплата</a>\n' +
            '        <a class="header__about__delivery" href="adminPanel.html">Админ панель</a>\n' +
            '        <a class="header__about__delivery logOutBtn" id="buy" href="Buybook.html">Выйти</a>\n' +
            '        <a class="header__about__delivery logOutBtn" id="buy" href="#"> ' + JSON.parse(sessionStorage.getItem('user')).name + '</a>\n' +
            '        <a class="header__about__delivery logOutBtn" id="buy" href="profile.html">Личный кабинет</a>'


    } else {
        header__about.innerHTML = ' <a class="header__about__us" id="top" href="aboutus.html">О нас</a>\n' +
            '        <a class="header__about__news" href="#">Новости и мероприятия</a>\n' +
            '        <a class="header__about__delivery" id="buy" href="Buybook.html">Доставка и оплата</a>\n' +
            '        <a class="header__about__delivery logOutBtn" id="buy" href="#">Выйти</a>\n' +
            '        <a class="header__about__delivery logOutBtn" id="buy" href="#"> ' + JSON.parse(sessionStorage.getItem('user')).name + '</a>\n' +
            '        <a class="header__about__delivery logOutBtn" id="buy" href="profile.html">Личный кабинет</a>'
    }
} else {
    header__about.innerHTML = ' <a class="header__about__us" id="top" href="aboutus.html">О нас</a>\n' +
        '        <a class="header__about__news" href="#">Новости и мероприятия</a>\n' +
        '        <a class="header__about__delivery" id="buy" href="Buybook.html">Доставка и оплата</a>'
}

const logOutBtn = document.querySelector('.logOutBtn')
if (logOutBtn) {
    logOutBtn.addEventListener('click', (event) => {
        sessionStorage.removeItem('user')
    })
}
