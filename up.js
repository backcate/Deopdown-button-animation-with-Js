const dropdown = document.querySelector('.dropdown');

var switchDropdown = function (event) {
    dropdown.classList.toggle('active');
}

dropdown.addEventListener('mouseover', switchDropdown, false);
dropdown.addEventListener('mouseout', switchDropdown, false);