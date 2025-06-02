// === Script DOM dynamique Boost'English ===

document.addEventListener('DOMContentLoaded', () => {
  const familyButtons = document.querySelectorAll('.family-btn');
  const brickList = document.getElementById('brickList');
  const iframe = document.querySelector('.brick-content');
  const searchBox = document.getElementById('searchBox');

  const hideSidebarOn = ["accueil.html", "home.html", "welcome.html"];

  function toggleSidebarVisibility(currentPage) {
    if (!brickList) {
      alert('pas de brickList!')
      return
    };
    if (hideSidebarOn.some(name => currentPage.includes(name))) {
      brickList.style.display = "none";
    } else {
      brickList.style.display = "block";
    }
  }

  function loadFamily(familyKey) {
    const family = families[familyKey];
    if (!family) return;

    brickList.innerHTML = `<h2>${family.label}</h2><ul>` +
      family.bricks.map(b => `<li data-page="${b.page}">${b.title}</li>`).join('') +
      '</ul>';

    brickList.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        iframe.src = li.dataset.page;
        toggleSidebarVisibility(li.dataset.page);
        brickList.querySelectorAll('li').forEach(e => e.classList.remove('active'));
        li.classList.add('active');
      });
    });
  }

  familyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      familyButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.dataset.family;
      toggleSidebarVisibility(key);
      loadFamily(key);
    });
  });

  if (searchBox) {
    searchBox.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      let results = [];
      Object.values(families).forEach(f => {
        f.bricks.forEach(b => {
          if (b.title.toLowerCase().includes(term)) results.push(b);
        });
      });

      brickList.innerHTML = `<h2>Search Results</h2><ul>` +
        results.map(b => `<li data-page="${b.page}">${b.title}</li>`).join('') +
        '</ul>';

      brickList.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
          iframe.src = li.dataset.page;
          toggleSidebarVisibility(li.dataset.page);
          brickList.querySelectorAll('li').forEach(e => e.classList.remove('active'));
          li.classList.add('active');
        });
      });
    });
  }

  const activeBtn = document.querySelector('.family-btn.active');
  if (activeBtn) {
    const key = activeBtn.dataset.family;
    loadFamily(key);
  }

  if (iframe) toggleSidebarVisibility(iframe.src);
});