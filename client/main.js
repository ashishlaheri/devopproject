const root = document.getElementById('root');

let darkMode = false;
const toggleTheme = () => {
  darkMode = !darkMode;
  document.body.className = darkMode ? 'dark' : '';
  render();
};

const render = () => {
  root.innerHTML = `
    <div style="text-align: center;">
      <h1>🚀 Welcome to my Portfolio!</h1>
      <p>Click the button below to toggle between light and dark mode.</p>
      <button onclick="toggleTheme()">Toggle Theme</button>
    </div>
  `;
};

window.toggleTheme = toggleTheme;
render();
