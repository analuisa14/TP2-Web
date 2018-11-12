const textInput = document.getElementById('box');
const chat = document.getElementById('chat');

let context = {};

const templateChatMessage = (message, lado) => `
  <div class=".${lado}">
    <div class="mensagem">
      <p>${message}</p>
    </div>
  </div>
  `;

const InsertTemplateInTheChat = (template) => {
  const p = document.createElement('p');
  p.innerHTML = template;

  chat.appendChild(p);
};

const getWatsonMessageAndInsertTemplate = async (text = '') => {
  const uri = 'http://localhost:3000/conversation/';

  const response = await (await fetch(uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text,
      context,
    }),
  })).json();

  context = response.context;

  const template = templateChatMessage(response.output.text, 'watson');

  InsertTemplateInTheChat(template);
};

textInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && textInput.value) {
    getWatsonMessageAndInsertTemplate(textInput.value);

    const template = templateChatMessage(textInput.value, 'user');
    InsertTemplateInTheChat(template);
    
    textInput.value = '';
  }
});

getWatsonMessageAndInsertTemplate();