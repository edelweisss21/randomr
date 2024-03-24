const button = document.querySelector('.main__button');
const updateArrow = document.querySelector('.update-arrow');

const switchBlocks = document.getElementById('switch-blocks');
const switchList = document.getElementById('switch-list');

let prevInputFrom, prevInputTo, prevInputQty, prevInputRepetitions, prevInputSort;

let globalResult = [];

const mainContainer = document.getElementById('main-container');
const randomDesc = document.querySelector('.random-desc');
const errorNote = document.querySelector('.error-note');
const note = document.querySelector('.note');
const mainSubtitle = document.querySelector('.main__subtitle');
const mainTime = document.querySelector('.main__time');
const contentHeight = document.body.scrollHeight;

const switchListGen = (result) => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

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

const createSwitchBlocks = () => {
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

button.addEventListener('click', () => {
    const inputFrom = parseInt(document.querySelector('.from').value);
    const inputTo = parseInt(document.querySelector('.to').value);
    const inputQty = parseInt(document.querySelector('.qty').value);
    const mainContainer = document.getElementById('main-container');
    const randomDesc = document.querySelector('.random-desc');

    globalResult = [];

    if (!(inputQty > 1000 || inputQty < 0 || inputFrom < 0 || inputFrom > 9999999 || inputTo < 0 || inputTo > 9999999)) {
        generateNumber();
    } else {
        mainContainer.innerHTML = '';
        randomDesc.innerHTML = '';
        errorNote.classList.remove('hidden');
        errorNote.innerHTML = 'The range can be from 1 to 9999999. And the quantity is from 1 to 1000.';
    }
});

updateArrow.addEventListener('click', () => {
    document.querySelector('.from').value = prevInputFrom;
    document.querySelector('.to').value = prevInputTo;
    document.querySelector('.qty').value = prevInputQty;
    document.getElementById('repetitions-toggle').checked = prevInputRepetitions;
    document.getElementById('sorting-toggle').checked = prevInputSort;
    generateNumber();
});

switchList.addEventListener('click', createSwitchLink);
switchBlocks.addEventListener('click', createSwitchBlocks);
errorNote.classList.add('red');

const displayNumbers = (result) => {
    mainContainer.innerHTML = '';

    if (!result) return;

    if (switchList.classList.contains('active')) {
        switchListGen(result);
    } else {
        result.forEach(el => {
            const spanElement = document.createElement("span");
            spanElement.classList.add('numbers-span');
            spanElement.id = `span-element`;
            spanElement.textContent = el;
            mainContainer.appendChild(spanElement);

            spanElement.addEventListener('click', () => {

                //Copy function
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = el;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                tempTextArea.setSelectionRange(0, 99999);
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
            });
        })
    }
}

const generateNumber = () => {
    const inputFrom = parseInt(document.querySelector('.from').value);
    const inputTo = parseInt(document.querySelector('.to').value);
    const inputQty = parseInt(document.querySelector('.qty').value);
    const inputRepetitions = document.getElementById('repetitions-toggle').checked;
    const inputSort = document.getElementById('sorting-toggle').checked;

    contentHeight > 750 ? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden";

    //For update-arrow
    prevInputFrom = inputFrom;
    prevInputTo = inputTo;
    prevInputQty = inputQty;
    prevInputRepetitions = inputRepetitions;
    prevInputSort = inputSort;

    mainContainer.innerHTML = '';
    errorNote.innerHTML = '';
    let result = [];

    //Repetitions
    if (!inputRepetitions) {
        for (let i = 0; i < inputQty; i++) {
            let randomNumber = Math.floor(Math.random() * (inputTo - inputFrom + 1)) + inputFrom;
            result.push(randomNumber);
        }
    } else {
        let uniqueNumbers = new Set();
        while (uniqueNumbers.size < inputQty) {
            let randomNumber = Math.floor(Math.random() * (inputTo - inputFrom + 1)) + inputFrom;
            uniqueNumbers.add(randomNumber);
        }
        result = Array.from(uniqueNumbers);
    }

    //Sort
    if (inputSort) result.sort((n1, n2) => n1 - n2);

    mainSubtitle.classList.remove('hidden');
    mainTime.innerHTML = formatTime(new Date());

    switchBlocks.classList.remove('hidden');
    switchList.classList.remove('hidden');

    randomDesc.innerHTML = `${inputQty} numbers in the range from ${inputFrom} to ${inputTo}. Click on element to copy.`;
    displayNumbers(result);
    globalResult.push(result);
}

generateNumber();