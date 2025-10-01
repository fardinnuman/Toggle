function limitToggles(current) {
  const toggles = document.querySelectorAll('.toggle input');
  const checkedToggles = Array.from(toggles).filter(toggle => toggle.checked);

  if (checkedToggles.length > 2) {
    checkedToggles.find(toggle => toggle !== current).checked = false;
  }

  if (current.id === 'toggle1' && current.checked) {
    document.getElementById('toggle2').checked = false;
    document.getElementById('toggle3').checked = false;
  } else if (current.id === 'toggle2' && current.checked) {
    if (document.getElementById('toggle3').checked) {
      document.getElementById('toggle1').checked = false;
    }
  } else if (current.id === 'toggle3' && current.checked) {
    if (document.getElementById('toggle2').checked) {
      document.getElementById('toggle1').checked = false;
    }
  }
}

const music = document.getElementById("bg-music");
document.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });
