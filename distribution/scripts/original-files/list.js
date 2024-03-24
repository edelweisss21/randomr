const button = document.querySelector('.main__button');
const inputQty = parseInt(document.querySelector('.qty').value);
const textarea = document.getElementById('textarea');

const switchBlocks = document.getElementById('switch-blocks');
const switchList = document.getElementById('switch-list');

let globalResult = [];

const mainContainer = document.getElementById('main-container');
const mainDesc = document.querySelector('.description');
const mainSubtitle = document.querySelector('.main__subtitle');
const mainTime = document.querySelector('.main__time');
const note = document.querySelector('.note');
const errorNote = document.querySelector('.error-note');
const contentHeight = document.body.scrollHeight;
const linesCount = document.querySelector('.lines-counter');

const linesCounter = () => {
    const lines = textarea.value.split('\n').filter(line => line.trim() !== '')
    const linesCount = document.querySelector('.lines-counter');

    linesCount.textContent = `Lines: ${lines.length}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const updateButtonState = () => {
        const lines = textarea.value.split('\n').filter(line => line.trim() !== '');
        if (lines.length > 0 && lines[0] !== '') {
            button.removeAttribute('disabled');
            button.classList.remove('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
            button.classList.add('disabled');
        }
    }

    textarea.addEventListener('input', updateButtonState);

    updateButtonState();
    linesCounter();
});

const switchListGen = (result) => {
    mainContainer.innerHTML = '';
    note.innerHTML = '';

    const textareaEl = document.createElement('textarea');
    textareaEl.classList.add('main__textarea');
    textareaEl.classList.add('created__textarea');
    textareaEl.setAttribute('rows', '10');
    textareaEl.textContent = result.join(', ').replace(/,/g, ', ');
    mainContainer.appendChild(textareaEl);

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('main__button');
    buttonEl.classList.add('copy');
    buttonEl.textContent = 'Copy';
    mainContainer.appendChild(buttonEl);

    buttonEl.addEventListener('click', () => {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = globalResult.join(', ').replace(/,/g, ', ');
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);;
    });
}

const createSwitchBlock = () => {
    switchBlocks.classList.add('active');
    switchList.classList.remove('active');
    mainContainer.innerHTML = '';
    note.innerHTML = 'Click on element to copy.';

    const latestResult = globalResult[globalResult.length - 1];

    if (latestResult) {
        latestResult.forEach(el => {
            if (el === '/^\s*[\r\n]/gm' || el === '/^\s*[\r\n]/gm') return;
            const spanElement = document.createElement('span');
            spanElement.classList.add('numbers-span');
            spanElement.textContent = el;
            mainContainer.appendChild(spanElement);

            spanElement.addEventListener('click', () => {
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = el;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                tempTextArea.setSelectionRange(0, 99999);
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
            });
        });
    }
}

const createSwitchLink = () => {
    switchList.classList.add('active');
    switchBlocks.classList.remove('active');
    mainContainer.innerHTML = '';
    note.innerHTML = '';

    const textareaEl = document.createElement('textarea');
    textareaEl.classList.add('main__textarea');
    textareaEl.classList.add('created__textarea');
    textareaEl.setAttribute('rows', '10');
    textareaEl.textContent = globalResult.join(', ').replace(/,/g, ', ');
    mainContainer.appendChild(textareaEl);

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('main__button');
    buttonEl.classList.add('copy');
    buttonEl.textContent = 'Copy';
    mainContainer.appendChild(buttonEl);

    buttonEl.addEventListener('click', () => {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = globalResult.join(', ').replace(/,/g, ', ');
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);;
    });
}

switchBlocks.addEventListener('click', createSwitchBlock);
switchList.addEventListener('click', createSwitchLink);

textarea.addEventListener('input', linesCounter);

button.addEventListener('click', function () {
    globalResult = [];
    genRandomLine();
});

const displayList = (result) => {
    if (switchList.classList.contains('active')) {
        switchListGen(result);
    } else {
        result.forEach(el => {
            const trimmedEl = el.trim();
            if (trimmedEl !== '') {
                const spanElement = document.createElement('span');
                spanElement.classList.add('numbers-span');
                spanElement.textContent = el;
                mainContainer.appendChild(spanElement);

                spanElement.addEventListener('click', () => {
                    const tempTextArea = document.createElement('textarea');
                    tempTextArea.value = el;
                    document.body.appendChild(tempTextArea);
                    tempTextArea.select();
                    tempTextArea.setSelectionRange(0, 99999);
                    document.execCommand('copy');
                    document.body.removeChild(tempTextArea);
                });
            }
        });
    }
}

const genRandomLine = () => {
    const inputQty = parseInt(document.querySelector('.qty').value);
    const inputRepetitions = document.getElementById('repetitions-toggle').checked;
    const inputSort = document.getElementById('sorting-toggle').checked;

    const lines = textarea.value.split('\n');

    contentHeight > 750 ? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden";

    mainContainer.innerHTML = '';
    mainDesc.innerHTML = '';
    errorNote.innerHTML = '';
    note.innerHTML = 'Click on element to copy.'

    let result = [];

    if (inputQty < 1000 && inputQty > 0) {
        for (let i = 0; i < inputQty; i++) {
            let line = '';
            let randomIndex = Math.floor(Math.random() * lines.length);
            line = lines[randomIndex];

            result.push(line);
        }

        if (inputRepetitions) result = Array.from(new Set(result));

        if (inputSort) result.sort();

        switchBlocks.classList.remove('hidden');
        switchList.classList.remove('hidden');

        mainSubtitle.classList.remove('hidden');
        mainTime.innerHTML = formatTime(new Date());
        displayList(result);

    } else {
        mainDesc.innerHTML = '';
        note.innerHTML = '';
        errorNote.innerHTML = 'The maximum number of winners is 1,000 and quantity more than 0.'
        switchBlocks.classList.add('hidden');
        switchList.classList.add('hidden');
    }

    globalResult.push(result);
    return result;
}