const chars = 'ABCDEFGIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codeNumber = 1000;
const charNumber = 10;

btn.addEventListener("click", function() {
  for (let i = 0 ; i < codeNumber; i++) {
    let code = "";
    for (let i = 0 ; i < charNumber; i++) {
      const index = Math.floor(Math.random()* chars.length);
      code += chars[index];
    }
    const div = document.createElement('div');
    section.appendChild(div);
    div.textContent = code;
  }
})
