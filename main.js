
(function() {
  // Element selection
  const terminal = document.getElementById('terminal-content');
  const aboutContent = document.getElementById('about-content');
  const projectContent = document.getElementById('project-content')
  const socialContent = document.getElementById('social-content')
  const tabs = document.querySelectorAll('.terminal-tab');
  const allTabContents = document.querySelectorAll('.terminal-content');


  const prompt = '<span class="terminal-prompt">root@RobertsMacbookPro:~$ </span>';
  const command = 'cat ~/.R0ttenOx/whoIsThis.txt';
  const output = '<span class="terminal-output">R0tten0x | Indie Swift Dev.</span>';
//   const comingSoon = '# Coming soon...';

  const typingSpeed = 80;
  const pauseShort = 500;
  const pauseLong = 400;

  // Terminal animation
  let i = 0;
  function typeCommand() {
    if (!tabs[0].classList.contains('active')) return; // stop typing if not terminal tab
    terminal.innerHTML = prompt + command.slice(0, i) + '<span class="cursor"></span>';
    if (i < command.length) {
      i++;
      setTimeout(typeCommand, typingSpeed);
    } else {
      setTimeout(showOutput, pauseLong);
    }
  }

  let j = 0;
  function showOutput() {
    if (!tabs[0].classList.contains('active')) return;
    terminal.innerHTML = prompt + command + '\n' + output + '\n' + prompt;
    setTimeout(typeComingSoon, pauseShort);
  }

  function typeComingSoon() {
    if (!tabs[0].classList.contains('active')) return;
    if (j < comingSoon.length) {
      terminal.innerHTML = prompt + command + '\n' + output + '\n' + prompt + comingSoon.slice(0, j) + '<span class="cursor"></span>';
      j++;
      setTimeout(typeComingSoon, typingSpeed);
    } else {
      terminal.innerHTML = prompt + command + '\n' + output + prompt + '<span class="cursor"></span>';
    }
  }

  // Tab switching logic
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('active')) return;
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Hide all tab contents first
    allTabContents.forEach(content => content.classList.add('hidden'));

    // Now show the correct one
    if (tab.dataset.tab === 'terminal') {
      document.getElementById('terminal-content').classList.remove('hidden');
      // (add any terminal animation reset here if you need)
    } else if (tab.dataset.tab === 'about') {
      document.getElementById('about-content').classList.remove('hidden');
    } else if (tab.dataset.tab === 'project') {
      document.getElementById('project-content').classList.remove('hidden');
    } else if (tab.dataset.tab === 'social') {
      document.getElementById('social-content').classList.remove('hidden');
    }
  });
});

  window.onload = typeCommand;
})();
