import './main.scss';

const formViewElement = window.document.getElementById('form-view');
const sendButtonElement = window.document.getElementById('sendButton');

sendButtonElement.addEventListener('click', function(){
    sendButtonElement.disabled = true;
    formViewElement.classList = 'form-view submitted';
});
