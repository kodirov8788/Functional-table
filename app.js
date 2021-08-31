$("input:checkbox:not(:checked)").each(function () {
    var column = "table ." + $(this).attr("name");
    $(column).hide();
});

$("input:checkbox").click(function () {
    var column = "table ." + $(this).attr("name");
    $(column).toggle();
});


const setting = document.querySelector('#setting');
const checkboxes = document.querySelector('.checkboxes');
const box = document.querySelector('.box');
const filter = document.querySelector('.filter');
const bodyFade = document.querySelector('.bodyfade');

setting.addEventListener('click', (event) => {

    checkboxes.style.display = 'block';
    box.style.backgroundColor = '#ccc';
    filter.style.display = 'block';

});

filter.addEventListener('click', (event) => {
    box.style.backgroundColor = '#585858';

    filter.style.display = 'none';
    checkboxes.style.display = 'none';

});



const doorbell = document.querySelector('#doorbell');
const notification = document.querySelector('.notification');


doorbell.addEventListener('click', (event) => {

    notification.style.display = 'block';
    filter.style.display = 'block';

});

filter.addEventListener('click', (event) => {

    filter.style.display = 'none';
    notification.style.display = 'none';


});

fetch('users.json')
    .then(data => data.json())
    .then(userData => userResult(userData))
    .catch(error => alert(error));

function userResult(userData) {
    userData.forEach(user => {
        console.log(userData)
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        const divText = document.createElement('div');
        const spanText = document.createElement('span');
        const h5 = document.createElement('h5');
        const pTextFirst = document.createElement('p');
        const pTextSecond = document.createElement('p');
        ul.appendChild(li);
        li.appendChild(divText);
        divText.className = "userData";
        divText.appendChild(h5);
        divText.appendChild(spanText);
        spanText.appendChild(pTextFirst);
        spanText.appendChild(pTextSecond);
        h5.innerHTML = user.username;
        pTextFirst.innerHTML = user.lastseen;
        pTextSecond.innerHTML = user.browser;


        const NotificationLine = document.createElement('div');
        ul.appendChild(NotificationLine);
        NotificationLine.className = "notification__line";

        const divNotification = document.createElement('div');
        divNotification.className = "notification__time";
        const spanTime = document.createElement('span');
        const divCircle = document.createElement('div');
        li.appendChild(divNotification);
        divNotification.appendChild(spanTime);
        divNotification.appendChild(divCircle);
        spanTime.className = "clocktime";
        spanTime.innerHTML = user.time;
        divCircle.className = "unread";


    });

}








fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(userData => showResult(userData))
    .catch(error => alert(error));

function showResult(userData) {
    userData.forEach(user => {
        console.log(userData)
        const tbody = document.querySelector('tbody');
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const checkbox = document.createElement('td');
        const submenu = document.createElement('td');
        const firstName = document.createElement('td');
        const user_name = document.createElement('td');
        const email = document.createElement('td');
        const address = document.createElement('td');
        const street = document.createElement('td');
        const zipcode = document.createElement('td');

        tr.appendChild(checkbox);
        tr.appendChild(submenu);
        tr.appendChild(firstName);
        tr.appendChild(user_name);
        tr.appendChild(email);
        tr.appendChild(address);
        tr.appendChild(street);
        tr.appendChild(zipcode);
        checkbox.className = "checkbox";
        submenu.className = "submenu";
        firstName.className = "first_name";
        user_name.className = "user_name";
        email.className = "email";
        address.className = "address";
        street.className = "street";
        zipcode.className = "zipcode";

        checkbox.innerHTML = `<input type="checkbox" checked="checked" />`;
        submenu.innerHTML = `<i class="fas fa-ellipsis-h"></i>`;
        firstName.innerHTML = user.name;
        user_name.innerHTML = user.username;
        email.innerHTML = user.email;
        address.innerHTML = user.address.suite;
        street.innerHTML = user.address.street;
        zipcode.innerHTML = user.address.zipcode;




        const tooltip = document.createElement('span');
        const tooltipEffect = document.createElement('div');
        const tooltipText = document.createElement('p');
        submenu.appendChild(tooltip);
        tooltip.appendChild(tooltipEffect);
        tooltip.appendChild(tooltipText);
        tooltipText.innerHTML = user.id;
        tooltip.className = "tooltip";
        tooltipEffect.className = "tooltip__effect";
        const fade = document.querySelector('.fade');






        submenu.addEventListener('mouseenter', (event) => {

            const Alltd = document.querySelectorAll(".submenu");
            const Alltd2 = document.querySelectorAll(".tooltip");

            Alltd.forEach((td) => {
                td.addEventListener('click', (e) => {
                    Alltd2.forEach((event) => {
                        event.style.transform = 'scale(0)';

                    });
                    tooltip.style.transform = 'scale(1)';
                    console.log(e.clientY)

                    fade.style.display = 'block';
                    if (e.clientY >= 456) {
                        tooltip.style.top = '-156px';
                        tooltip.style.transformOrigin = 'bottom left';
                        tooltipEffect.style.marginTop = '159px';
                    } else {
                        tooltip.style.top = '0px';
                        tooltip.style.transformOrigin = 'top left';
                        tooltipEffect.style.marginTop = '5px';
                    }



                })
            });

        });

        fade.addEventListener('click', (event) => {

            tooltip.style.transform = 'scale(0)';
            fade.style.display = 'none';

        });

        filter.addEventListener('mouseover', (event) => {
            tooltip.style.transform = 'scale(0)';

        });
        bodyFade.addEventListener('mouseover', (event) => {
            tooltip.style.transform = 'scale(0)';
        });
    });
}