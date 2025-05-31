document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Procura o próximo irmão do botão (ex: <pre>, <p>, etc.)
    const codeContainer = button.nextElementSibling;

    // Verifica se tem um <code> dentro ou se já pode pegar o innerText direto
    const codeText = codeContainer.querySelector('code') 
      ? codeContainer.querySelector('code').innerText
      : codeContainer.innerText;

    // Copia para a área de transferência
    navigator.clipboard.writeText(codeText).then(() => {
      const originalText = button.innerText;
      button.innerText = '✅ Copiado!';
      setTimeout(() => {
        button.innerText = originalText;
      }, 1500);
    });
  });
});
