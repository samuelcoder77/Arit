const form = document.getElementById('form-media');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const media = (num1 + num2 + num3 + num4) / 4;
    resultado.textContent = `A média aritmética é: ${media.toFixed(2)}`;
});