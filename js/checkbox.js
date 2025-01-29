const blocked = document.querySelector('.blocked');
const checked = document.getElementById('checkbox');

checked.addEventListener('click',()=> {
    blocked.classList.toggle('gone')
})