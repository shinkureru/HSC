const textArea = document.getElementById('inputText');
const charCount = document.getElementById('char-count');

textArea.addEventListener('input', function() {
    const currentLength = textArea.value.length;
    const maxLength = textArea.getAttribute('maxlength');
    charCount.textContent = `(${currentLength}/${maxLength})`;
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // 平滑滾動到最頂部
    });
  });