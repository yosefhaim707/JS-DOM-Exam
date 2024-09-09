const title = document.getElementById('title');
title.addEventListener('mouseover', () => {
    title.innerText = 'Mouse In';
    title.style.color = 'yellow';
    title.style.backgroundColor = 'brown';
});
title.addEventListener('mouseleave', () => {
    title.innerText = 'Mouse Out';
    title.style.color = 'red';
    title.style.backgroundColor = 'black';
})

title.addEventListener('click', () => {
    title.style.color = 'lightgray';
    title.style.backgroundColor = 'pink';
})