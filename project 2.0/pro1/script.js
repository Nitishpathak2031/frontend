const editor = document.getElementById('code-editor');
const preview = document.getElementById('code-preview');

editor.addEventListener('input', () => {
    const content = editor.value;
    preview.srcdoc = content;
});
