const ToDo_list = document.querySelector('.ToDo-list');
const ToDo_sumbit = document.querySelector('.ToDo-sumbit');

const ToDo_input_not_value = document.querySelector('.ToDo-input');



let arr_ToDo = [];



function addItem(){
    // data
    
    const ToDo_input = document.querySelector('.ToDo-input').value;

    // check of null || undefined || empty
    if (ToDo_input !== null && ToDo_input !== undefined && ToDo_input.length !== 0){
        const items = document.createElement('li');

        arr_ToDo.unshift(ToDo_input);

        console.log(arr_ToDo);

        items.innerHTML = arr_ToDo[0];

        ToDo_list.append(items);

        items.setAttribute('class', 'ToDo-list-item');

        document.querySelector('.ToDo-input').value = ''
    }
    if (ToDo_input === null || ToDo_input === undefined || ToDo_input.length === 0){
        ToDo_sumbit.style.animation = 'move 1s linear'
        // ToDo_sumbit.setAttribute('disabled');
        ToDo_input_not_value.setAttribute('placeholder', 'ToDo is empty...');
    }
    
}

ToDo_sumbit.addEventListener('click', () => {
    addItem();
});

ToDo_input_not_value.addEventListener('keydown', (event) => {
    if (event.key == 'Enter'){
        event.preventDefault();
        addItem();
    }
});
