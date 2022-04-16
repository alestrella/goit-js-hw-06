// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

let counterValue = 0;

const ref = {
    counterSpan: document.querySelector('#value'),
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
}

const updateCounter = (value) => {
    ref.counterSpan.textContent = value;
} 

ref.btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter(counterValue);
});

ref.btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    updateCounter(counterValue);
})