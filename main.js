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
    const about = '<span class="terminal-prompt">root@RobertsMacbookPro:~$ </span>';
  const about_command = 'cat ~/.R0ttenOx/aboutRobert.txt';
const about_output = `
  <span class="terminal-output">
    <p><strong>About Robert | R0tten0x</strong></p>
    <p>Robert doesn’t build for the mainstream—he breaks it. An indie iOS/macOS dev who refuses to compromise, he’s spent 27 years in tech tearing down bloat and hype, chasing what actually works.<br>
    Every app is a middle finger to the status quo: sharp UI, ruthless performance, and a finish that’s all killer, no filler.<br><br>
    Design is clean because clutter is the enemy. Features are lean, nothing tacked on for trend-chasing. If it’s not fun, not fast, or not real—it’s trashed.<br>
    When Robert isn’t unleashing new builds, he’s plugged into hardcore music, deep tech rabbit holes, or hunting down the next perfect cup of coffee.<br><br>
    This is indie development with teeth. No gatekeepers. No compromises. Never apologizing for doing shit his own way.
    </span>
`;
//   const comingSoon = '# Coming soon...';

  const typingSpeed = 100;
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
