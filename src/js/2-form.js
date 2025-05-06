let formData = {
    email: '',
    message: ''
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('.email');
const messageTextarea = form.querySelector('.message');


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    try {
        const parsedData = JSON.parse(savedData);

    if (parsedData.email !== undefined) {
        form.email.value = parsedData.email;
        formData.email = parsedData.email;
    }
    if (parsedData.message !== undefined) {
        form.message.value = parsedData.message;
        formData.message = parsedData.message;
    }
    } catch (error) {
        console.error('Error parsing local storage data:', error);
    }
}

function updateLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', (evt) => {
    const target = evt.target;
    if (target.name === 'email') {
        formData.email = target.value.trim();
    } else if (target.name === 'message') {
        formData.message = target.value.trim();
    }
    updateLocalStorage();
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const { email, message } = formData;

    if (!email || !message) {
    alert("Fill please all fields");
    return;
}

console.log({ email, message });

localStorage.removeItem(STORAGE_KEY);
formData = { email: "", message: "" };
form.reset();
});