if(document.querySelector('#carousel')){

    (function(){
        const carousel = {
            element: document.querySelector('#carousel'),
            images: document.querySelectorAll('#carousel li'),
            tick: 1,
            pause: 500,
        }

        //инициализация
        for(let i = 0; i < carousel.images.length; ++i){
            carousel.images[i].left = carousel.element.offsetWidth * i;
            carousel.images[i].style.left = carousel.images[i].left + 'px';
        }

        //анимация смещения
        let j = 0, step = carousel.element.offsetWidth;
        function animation(){
            if( j < step){
                j += 2;
                for(let i = 0; i < carousel.images.length; ++i){
                    carousel.images[i].left -= 2;
                    carousel.images[i].style.left = carousel.images[i].left + 'px';
                }

                setTimeout(animation, carousel.tick)
            } else {
                for(let i = 0; i < carousel.images.length; i++){
                    if(  carousel.images[i].left == -carousel.element.offsetWidth ){
                        carousel.images[i].left = carousel.element.offsetWidth * (carousel.images.length-1)
                        break;
                    }
                }

                j = 0;
                setTimeout(animation, carousel.pause);
            }
        }
        animation();

    })();

    function view(n) {
        style = document.getElementById(n).style;
        style.display = (style.display == 'block') ? 'none' : 'block';
    }


    garry.onclick = function() {
        let start = Date.now();

        let timer = setInterval(function() {
            let timePassed = Date.now() - start;

            garry.style.left = timePassed / 5 + 'px';

            if (timePassed > 2000) clearInterval(timer);

        }, 20);
    }
    console.log("HELLO")
}

    function checkForStatus(id) {
    let result
    for (let i = 0; i < JSON.parse(localStorage.getItem('users')).length; i++) {
        console.log(id, JSON.parse(localStorage.getItem('blockedUsers'))[i])
        if (Number(id) == Number(JSON.parse(localStorage.getItem('blockedUsers'))[i])) {
            result = "Blocked"
            break
        } else {
            result = "Available"
        }
    }
    console.log(result)
    return result
}


const tbodyOfUsers = document.querySelector('.tbodyOfUsers')
if (tbodyOfUsers && JSON.parse(sessionStorage.getItem('user')).accountType === 'admin') {
    let usersToSendHTML = '';
    JSON.parse(localStorage.getItem('users')).map((user) => {
        let checkAdmin = Number(JSON.parse(sessionStorage.getItem('user')).id) === Number(user.id) ? "(You)" : '';
        let checkStatus;
        if (localStorage.getItem('blockedUsers')) {
            let templateOfUser = "<tr>\n" +
                "                    <td class=\"cart_product\">\n" +
                "                        <h4>" + checkAdmin + user.name + "</h4>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_description\">\n" +
                "                        <h4><a href=\"\">" + user.email + "</a></h4>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_block\">\n" +
                "                        <button value='" + user.id + "' style='outline: none; color: #fe980f;border: 1px solid #FE980F; " +
                "background-color: transparent;border-radius: 3px' class=\"cart_quantity_delete blockUser\" >Block/Unblock user</button>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_status\">\n" +
                "                        <p>" + checkForStatus(user.id) + "</p>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_delete\">\n" +
                "                        <button class='deleteUserBtn' value='" + user.id + "'>Delete user</button>\n" +
                "                    </td>\n" +
                "                </tr>"
            usersToSendHTML += templateOfUser
        } else {
            let templateOfUser = "<tr>\n" +
                "                    <td class=\"cart_product\">\n" +
                "                        <h4>" + checkAdmin + user.name + "</h4>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_description\">\n" +
                "                        <h4><a href=\"\">" + user.email + "</a></h4>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_block\">\n" +
                "                        <button value='" + user.id + "' style='outline: none; color: #fe980f;border: 1px solid #FE980F; " +
                "background-color: transparent;border-radius: 3px' class=\"cart_quantity_delete blockUser\" >Block/Unblock user</button>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_status\">\n" +
                "                        <p>" + "Available" + "</p>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_delete\">\n" +
                "                        <button class='deleteUserBtn' value='" + user.id + "'>Delete user</button>\n" +
                "                    </td>\n" +

                "                </tr>"
            usersToSendHTML += templateOfUser
        }

    })
    tbodyOfUsers.innerHTML = usersToSendHTML
}



const tbodyOfUser = document.querySelector('.tbodyOfUser')
if (tbodyOfUser && JSON.parse(sessionStorage.getItem('user'))) {
    let userToSendHTML = '';
    const userSession = JSON.parse(sessionStorage.getItem('user'))
        let checkStatus;
        if (localStorage.getItem('blockedUsers')) {
            let templateOfUser2 = "<tr>\n" +
                "                    <td class=\"cart_product\">\n" +
                "                        <h4>"  + userSession.name + "</h4>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_description\">\n" +
                "                        <h4><a href=\"\">" + userSession.email + "</a></h4>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_block\">\n" +
                "                        <button value='" + userSession.id + "' style='outline: none; color: #fe980f;border: 1px solid #FE980F; " +
                "background-color: transparent;border-radius: 3px' class=\"cart_quantity_delete blockUser\" >Block/Unblock user</button>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_status\">\n" +
                "                        <p>" + checkForStatus(userSession.id) + "</p>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_delete\">\n" +
                "                        <button class='deleteUserBtn' value='" + userSession.id + "'>Delete user</button>\n" +
                "                    </td>\n" +
                "                </tr>"
            userToSendHTML += templateOfUser2
        } else {
            let templateOfUser2 = "<tr>\n" +
                "                    <td class=\"cart_product\">\n" +
                "                        <h4>"  + userSession.name + "</h4>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_description\">\n" +
                "                        <h4><a href=\"\">" + userSession.email + "</a></h4>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_block\">\n" +
                "                        <button value='" + userSession.id + "' style='outline: none; color: #fe980f;border: 1px solid #FE980F; " +
                "background-color: transparent;border-radius: 3px' class=\"cart_quantity_delete blockUser\" >Block/Unblock user</button>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_status\">\n" +
                "                        <p>" + "Available" + "</p>\n" +
                "                    </td>\n" +
                "                    <td class=\"cart_delete\">\n" +
                "                        <button class='deleteUserBtn' value='" + userSession.id + "'>Delete user</button>\n" +
                "                    </td>\n" +

                "                </tr>"
            userToSendHTML += templateOfUser2
        }

    tbodyOfUser.innerHTML = userToSendHTML
}



const blockOrUnblockUser = document.querySelectorAll('.blockUser')
if (blockOrUnblockUser) {
    blockOrUnblockUser.forEach((blockOrUnblockUserBtn) => {
        blockOrUnblockUserBtn.addEventListener('click', (event) => {
            console.log(event.target.value)
            let blockedUsers = localStorage.getItem('blockedUsers')
            if (blockedUsers !== null) {
                let check = 1
                for (let i = 0; i < JSON.parse(blockedUsers).length; i++) {
                    if (Number(JSON.parse(blockedUsers)[i]) === Number(event.target.value)) {
                        check = 0
                        console.log("BINGO")
                        break
                    }
                }
                if (!check) {
                    let JSONBlockedUsers = JSON.parse(blockedUsers)
                    console.log("OLD LIST IN JSON: ", JSONBlockedUsers)
                    let newBlockedUsers = JSONBlockedUsers.filter((element) => {
                        return element != event.target.value
                    })
                    console.log("NEW LIST IN JSON: ", newBlockedUsers)
                    localStorage.setItem('blockedUsers', JSON.stringify(newBlockedUsers))
                } else {
                    let JSONBlockedUsers = JSON.parse(blockedUsers)
                    console.log("OLD LIST IN JSON: ", JSONBlockedUsers)
                    let newBlockedUsers = [...JSONBlockedUsers, event.target.value]
                    console.log("NEW LIST IN JSON: ", newBlockedUsers)
                    localStorage.setItem('blockedUsers', JSON.stringify(newBlockedUsers))
                }


            } else {
                localStorage.setItem('blockedUsers', "[" + String(event.target.value) + " ]")
            }
        })
    })
}


if (sessionStorage.getItem('user')) {
    const changePasswordBtn = document.querySelector('#changePasswordBtn')
    if(changePasswordBtn){
        changePasswordBtn.addEventListener('click', (event) => {
            event.preventDefault()
            const checkPassword = document.querySelector('#checkPassword').value
            const newPassword = document.querySelector('#newPassword').value
            let user = JSON.parse(sessionStorage.getItem('user'))
            if (checkPassword.localeCompare(user.password) === 0){
                user.password = newPassword
                sessionStorage.setItem('user', JSON.stringify(user))
                let filteredListOfUsers = JSON.parse(localStorage.getItem('users')).filter((element) => {
                    return element.email.localeCompare(user.email)
                })
                filteredListOfUsers.push(user)
                localStorage.setItem('users', JSON.stringify(filteredListOfUsers))
            }
        })
    }
}

const deleteUserBtn = document.querySelector('.deleteUserBtn')
if (deleteUserBtn){
    deleteUserBtn.addEventListener('click', event => {
        let filteredListOfUsers = JSON.parse(localStorage.getItem('users')).filter((element) => {
            return String(element.id).localeCompare(String(event.target.value))
        })
        localStorage.setItem('users', JSON.stringify(filteredListOfUsers))
        sessionStorage.removeItem('user')
    })
}