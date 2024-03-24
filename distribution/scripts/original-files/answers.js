const button = document.querySelector('.main__button');
const contentHeight = document.body.scrollHeight;
contentHeight > 750 ? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden";
tippy('[data-tippy-content]');

const genAnswers = () => {
    const textarea = document.querySelector('.main__textarea').value;
    const inputSelect = document.querySelector('.dropdown__input-hidden').value;
    const mainContainer = document.getElementById('main-container');
    const mainText = document.querySelector('.description');
    const mainSubtitle = document.querySelector('.main__subtitle');
    const mainTime = document.querySelector('.main__time');
    const note = document.querySelector('.note');

    const yesNoRandom = ['Yes', 'No', 'Maybe', 'It\'s hard to say', 'Depends on the circumstances', 'Not sure', 'Don\'t know', 'Rather yes', 'Rather no', 'More yes than no', 'More no than yes', 'Sure'];
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const numbers = ['1', '2', '3', '4', '5'];

    mainContainer.innerHTML = '';
    mainText.innerHTML = '';

    let result = '';

    const optionsMap = new Map([
        ['yesno', yesNoRandom.slice(0, 2)],
        ['yesnorandom', yesNoRandom],
        ['threeoptlet', letters.slice(0, 3)],
        ['fiveoptlet', letters],
        ['threeoptnum', numbers.slice(0, 3)],
        ['fivenum', numbers],
    ]);

    if (optionsMap.has(inputSelect)) {
        const selectedArray = optionsMap.get(inputSelect);
        const randomIndex = Math.floor(Math.random() * selectedArray.length);
        result += selectedArray[randomIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        result += numbers[randomIndex];
    }

    mainSubtitle.classList.remove('hidden');
    mainTime.innerHTML = formatTime(new Date());

    note.innerHTML = textarea;
    note.classList.remove('hidden');
    const spanElement = document.createElement('span');
    spanElement.classList.add('numbers-span');
    spanElement.textContent = result;
    mainContainer.appendChild(spanElement);

    return result;
}

button.addEventListener('click', genAnswers);
