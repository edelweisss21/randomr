const button = document.querySelector('.main__button');
const updateArrow = document.querySelector('.update-arrow');

const switchBlocks = document.getElementById('switch-blocks');
const switchList = document.getElementById('switch-list');

let globalResult = [];

let prevInputLength, prevInputQty, prevInputUppercase, prevInputLowercase, prevInputNumbers, prevInputSeparators, prevInputSpecialSymbols;

const mainTime = document.querySelector('.main__time');
const errorNote = document.querySelector('.error-note');
const note = document.querySelector('.note');
const mainContainer = document.getElementById('main-container');
const mainSubtitle = document.querySelector('.main__subtitle');

const switchListGen = (passwords) => {
    mainContainer.innerHTML = '';
    note.innerHTML = '';

    const textareaEl = document.createElement('textarea');
    textareaEl.classList.add('main__textarea');
    textareaEl.classList.add('created__textarea');
    textareaEl.setAttribute('rows', '10');
    textareaEl.textContent = passwords.join(', ').replace(/,/g, ', ');
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

const updateExamplePassword = () => {
    const inputQty = parseInt(document.querySelector('.qty').value);
    const inputLength = parseInt(document.querySelector('.length').value);
    const inputUppercase = document.getElementById('uppercase-pass').checked;
    const inputLowercase = document.getElementById('lowercase-pass').checked;
    const inputNumbers = document.getElementById('numbers').checked;
    const inputSeparators = document.getElementById('separators').checked;
    const inputSpecialSymbols = document.getElementById('special-symbols').checked;
    const errorNote = document.querySelector('.error-note');

    const availableChars = (inputUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
        (inputLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') +
        (inputNumbers ? '0123456789' : '') +
        (inputSeparators ? '-_' : '') +
        (inputSpecialSymbols ? '!#$%&()*+./:;=>?@[\\]^`{|}~\'' : '');

    if ((inputQty >= 1 && inputQty <= 100) && (inputLength >= 4 && inputLength <= 30)
        && (inputUppercase || inputLowercase || inputNumbers || inputSeparators || inputSpecialSymbols)) {
        errorNote.innerHTML = '';
        let examplePassword = '';

        for (let i = 0; i < inputLength; i++) {
            let randomIndex = Math.floor(Math.random() * availableChars.length);
            examplePassword += availableChars.charAt(randomIndex);
        }
        document.querySelector('.example-password').textContent = examplePassword;
    }
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

switchList.addEventListener('click', createSwitchLink);
switchBlocks.addEventListener('click', createSwitchBlocks);

document.querySelector('.length').addEventListener('input', updateExamplePassword);
document.querySelectorAll('.options input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateExamplePassword);
});

button.addEventListener('click', function () {
    globalResult = [];
    generatePassword();
});

updateArrow.addEventListener('click', () => {
    document.querySelector('.length').value = prevInputLength;
    document.querySelector('.qty').value = prevInputQty;
    document.getElementById('uppercase-pass').checked = prevInputUppercase;
    document.getElementById('lowercase-pass').checked = prevInputLowercase;
    document.getElementById('numbers').checked = prevInputNumbers;
    document.getElementById('separators').checked = prevInputSeparators;
    document.getElementById('special-symbols').checked = prevInputSpecialSymbols;
    generatePassword();
});

const displayPasswords = (passwords) => {
    mainContainer.innerHTML = '';

    if (!passwords) return;

    if (switchList.classList.contains('active')) {
        switchListGen(passwords);
    } else {
        passwords.forEach(el => {
            const spanElement = document.createElement("span");
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

const generatePassword = () => {
    const inputQty = parseInt(document.querySelector('.qty').value);
    const inputLength = parseInt(document.querySelector('.length').value);
    const inputUppercase = document.getElementById('uppercase-pass').checked;
    const inputLowercase = document.getElementById('lowercase-pass').checked;
    const inputNumbers = document.getElementById('numbers').checked;
    const inputSeparators = document.getElementById('separators').checked;
    const inputSpecialSymbols = document.getElementById('special-symbols').checked;

    const availableChars = (inputUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
        (inputLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') +
        (inputNumbers ? '0123456789' : '') +
        (inputSeparators ? '-_' : '') +
        (inputSpecialSymbols ? '!#$%&()*+./:;=>?@[\\]^`{|}~\'' : '');

    const contentHeight = document.body.scrollHeight;
    contentHeight > 750 ? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden";

    prevInputLength = inputLength;
    prevInputQty = inputQty;
    prevInputUppercase = inputUppercase;
    prevInputLowercase = inputLowercase;
    prevInputNumbers = inputNumbers;
    prevInputSeparators = inputSeparators;
    prevInputSpecialSymbols = inputSpecialSymbols;

    mainContainer.innerHTML = '';
    const passwords = [];

    if ((inputQty >= 1 && inputQty <= 100) && (inputLength >= 4 && inputLength <= 30)
        && (inputUppercase || inputLowercase || inputNumbers || inputSeparators || inputSpecialSymbols)) {
        errorNote.innerHTML = '';
        note.innerHTML = 'Click on element to copy.'

        for (let i = 0; i < inputQty; i++) {
            let password = '';
            for (let j = 0; j < inputLength; j++) {
                let randomIndex = Math.floor(Math.random() * availableChars.length);
                password += availableChars.charAt(randomIndex);
            }
            passwords.push(password);
        }

        mainSubtitle.classList.remove('hidden');
        mainTime.innerHTML = formatTime(new Date());
        displayPasswords(passwords);

    } else {
        note.innerHTML = '';
        errorNote.innerHTML = `<p class = 'red'>We were unable to generate passwords.</p>
        The length of the characters should be from 4 to 30. The number of passwords is from 1 to 100. Select at least one group of characters that the password will consist of.`;
    };

    switchBlocks.classList.remove('hidden');
    switchList.classList.remove('hidden');

    globalResult.push(passwords);
}

generatePassword();
updateExamplePassword();