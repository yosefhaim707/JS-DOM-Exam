const demo = document.getElementById('demo');
const colorChanger = document.getElementById('change_color');
const selectColor = document.getElementById('select_color');
const colorChangerToRed = document.getElementById('change_to_red');
const hideButton = document.getElementById('hide');
const optionField = document.getElementById('new_option');
const optionButton = document.getElementById('add_option');

colorChangerToRed.addEventListener('click', () => {
    demo.style.backgroundColor = 'red';
    selectColor.value = '';
});

colorChanger.addEventListener('click', () => {
    demo.style.backgroundColor = selectColor.value;
});
selectColor.addEventListener('change', (event) => {
    demo.style.backgroundColor = event.target.value;
});

hideButton.addEventListener('click', () => {
    if (demo.hidden){
        demo.hidden = false;
    }
    else {
        demo.hidden = true;
    }
})

optionButton.addEventListener('click', () => {
    let newOption = document.createElement('option');
    newOption.innerText = optionField.value;
    newOption.value = optionField.value;
    selectColor.appendChild(newOption);
    optionField.value = '';
})