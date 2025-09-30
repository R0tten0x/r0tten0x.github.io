(function() {
  // Element selection
  const terminal = document.getElementById('terminal-content');
  const aboutContent = document.getElementById('about-content');
  const projectContent = document.getElementById('project-content')
  const socialContent = document.getElementById('social-content')
  const tabs = document.querySelectorAll('.terminal-tab');
  const allTabContents = document.querySelectorAll('.terminal-content');


  const prompt = '<span class="terminal-prompt">root@ThinkpadP14Fedora:~$ </span>';
  const command = 'less ~/.R0ttenOx/whoIsThis.md';
  const output = '<span class="terminal-output">- R0tten0x | Robert<br>- Mobile App Developer<br>- IT Professional</span>';
    const about = '<span class="terminal-prompt">root@ThinkpadP14Fedora:~$ </span>';
  const about_command = 'less ~/.R0ttenOx/aboutRobert.md';
const about_output = `<span class="terminal-output-about"> <p><div style="text-align: center;"><pre style="font-size: 10px; color=#ffff;">
██████╗  ██████╗ ████████╗████████╗███████╗███╗   ██╗ ██████╗ ██╗  ██╗
██╔══██╗██╔═████╗╚══██╔══╝╚══██╔══╝██╔════╝████╗  ██║██╔═████╗╚██╗██╔╝
██████╔╝██║██╔██║   ██║      ██║   █████╗  ██╔██╗ ██║██║██╔██║ ╚███╔╝ 
██╔══██╗████╔╝██║   ██║      ██║   ██╔══╝  ██║╚██╗██║████╔╝██║ ██╔██╗ 
██║  ██║╚██████╔╝   ██║      ██║   ███████╗██║ ╚████║╚██████╔╝██╔╝ ██╗
╚═╝  ╚═╝ ╚═════╝    ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝
</div>
Robert is an experienced IT professional with 27 years in the industry. He has developed strong leadership skills through extensive work in research, technology strategy, and implementation. Currently focused on mobile software development, Robert brings depth of expertise to modern application design and engineering. Originally from San Diego, California, he continues to apply his technical knowledge and leadership experience to drive innovation and deliver results.<br></span>`;
  const typingSpeed = 50;
  const pauseShort = 400;
  const pauseLong = 300;

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

  function typeAboutCommand() {
  if (!tabs[1].classList.contains('active')) return; // only type if About tab is active
  aboutContent.innerHTML = about + about_command.slice(0, about_i) + '<span class="cursor"></span>';
  if (about_i < about_command.length) {
    about_i++;
    setTimeout(typeAboutCommand, typingSpeed);
  } else {
    setTimeout(showAboutOutput, pauseLong);
  }
}

function showAboutOutput() {
  if (!tabs[1].classList.contains('active')) return;
  aboutContent.innerHTML = about + about_command + '<br>' + about_output;
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
      about_i = 0; // reset
typeAboutCommand();
    } else if (tab.dataset.tab === 'project') {
      document.getElementById('project-content').classList.remove('hidden');
    } else if (tab.dataset.tab === 'social') {
      document.getElementById('social-content').classList.remove('hidden');
    }
  });
});

  window.onload = typeCommand;
})();
