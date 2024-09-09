const buttons = document.querySelectorAll('.action_button');
const demo = document.getElementById('demo');
function handleClick(event){
    const button = event.target;
    const direction = button.id;
    switch (direction) {
        case 'lb':
            demo.style.justifyContent = 'flex-start';
            demo.style.alignItems = 'flex-end';
            break;
        case 'lc':
            demo.style.justifyContent = 'flex-start';
            demo.style.alignItems = 'center';
            break;
        case 'lt':
            demo.style.justifyContent = 'flex-start';
            demo.style.alignItems = 'flex-start';
            break;
        case 'rb':
            demo.style.justifyContent = 'flex-end';
            demo.style.alignItems = 'flex-end';
            break;
        case 'rc':
            demo.style.justifyContent = 'flex-end';
            demo.style.alignItems = 'center';
            break;
        case 'rt':
            demo.style.justifyContent = 'flex-end';
            demo.style.alignItems = 'flex-start';
            break;
        case 'cb':
            demo.style.justifyContent = 'center';
            demo.style.alignItems = 'flex-end';
            break;
        case 'ct':
            demo.style.justifyContent = 'center';
            demo.style.alignItems = 'flex-start';
            break;
        case 'cc':
            demo.style.justifyContent = 'center';
            demo.style.alignItems = 'center';
            break;
    }
}

buttons.forEach(button => button.addEventListener('click', handleClick))