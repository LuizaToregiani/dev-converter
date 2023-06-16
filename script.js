const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputvalue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result'); 
let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();

    if (!inputvalue.value || inputvalue.value < 0) {
        alert('Informe um valor correto!');
        return;
    } else if (!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    } 
 
    converter ()
};


function converter() {
    if(selectedCurrency.value === 'eur') {
        valueConverted = inputvalue.value / 5.20;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');

        animateResult();

    } else if(selectedCurrency.value === 'dol') {
        valueConverted = inputvalue.value / 4.81;
        result.innerHTML = valueFormatter('en-US', 'USD');

        animateResult();
    }

    inputvalue.value = '';
    selectedCurrency.value = '';
};

function valueFormatter(locale,currency) {
    const value = valueConverted.toLocaleString(`${locale}` , {style: 'currency', currency: `${currency}` });
    return `<span>🤑</span> ${value} <span>🤑</span>`;
};

function animateResult() {
    return result.animate([
     { transform: 'translateY(-150px)'},
     { transform: 'translateY(0px)'},
    ],{ duration: 500 });
}