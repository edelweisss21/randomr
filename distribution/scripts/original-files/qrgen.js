const qrCodeContainer = document.getElementById('qrcode');
const generateButton = document.querySelector('.main__button');
const errorNote = document.querySelector('.error-note');
const mainDesc = document.querySelector('.description');
const mainContainer = document.getElementById('main-container');

const handleGenerateButtonClick = () => {
    qrCodeContainer.style.backgroundColor = 'transparent';
    qrCodeContainer.innerHTML = '';
    mainContainer.innerHTML = '';
    const text = document.getElementById('textarea').value.trim();
    const bgColor = document.getElementById('bg-color').value;
    const mColor = document.getElementById('m-color').value;

    if (!text) {
        errorNote.textContent = 'Write something in textarea.';
        return;
    }

    generateQRCode(text, bgColor, mColor);
    qrCodeContainer.style.backgroundColor = bgColor;

    const qrCodeImage = qrCodeContainer.querySelector('img');
    const downloadButton = createDownloadButton(qrCodeImage);
    mainContainer.appendChild(downloadButton);
};

const generateQRCode = (text, bgColor, mColor) => {
    const qrCode = new QRCode(document.getElementById('qrcode'), {
        text: text,
        width: 192,
        height: 192,
        colorDark: mColor,
        colorLight: bgColor,
        correctLevel: QRCode.CorrectLevel.H
    });
}

const createDownloadButton = (qrCodeImage) => {
    const button = document.createElement('button');
    button.classList.add('main__button', 'copy');
    button.textContent = 'Download (.png)';
    button.addEventListener('click', function () {
        downloadQRCode(qrCodeImage.src, 'randomr_qrCode.png');
    });
    return button;
}

const downloadQRCode = (imageData, fileName) => {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = imageData;
    link.click();
}

document.addEventListener('DOMContentLoaded', function () {
    qrCodeContainer.style.backgroundColor = 'transparent';
    generateButton.addEventListener('click', handleGenerateButtonClick);
});