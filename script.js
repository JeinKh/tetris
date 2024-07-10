
// кількість колонок
const PLAYFILED_COLUMNS = 10;  

// кількість рядів
const PLAYFILED_ROWS = 10;  

function generatePlayfiled(){

    for(let i = 0; i < PLAYFILED_COLUMNS * PLAYFILED_ROWS; i++){
        const div = document.createElement('div');
        document.querySelector('.tetris').append(div);
    }

}

generatePlayfiled()