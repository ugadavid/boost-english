// === Script DOM dynamique Boost'English avec accordéon et chargement iframe ===

document.addEventListener('DOMContentLoaded', () => {
  const familyButtons = document.querySelectorAll('.family-btn');
  const brickList = document.getElementById('brickList');
  const iframe = document.querySelector('.brick-content');
  const searchBox = document.getElementById('searchBox');

  const hideSidebarOn = ["accueil.html", "home.html", "welcome.html"];

  function toggleSidebarVisibility(currentPage) {
    if (!brickList) return;
    if (hideSidebarOn.some(name => currentPage.includes(name))) {
      brickList.style.display = "none";
    } else {
      brickList.style.display = "";
    }
  }

  function insertContextMenu(li, brickPage) {
    const brickKey = brickPage.split('/').pop().replace('.html', '');
    const contextItems = contextMenus[brickKey];
    if (!contextItems || contextItems.length === 0) return;

    const submenu = document.createElement('ul');
    submenu.classList.add('context-submenu');
    submenu.innerHTML = contextItems
      .map(item => `<li class="context-link" data-page="${item.link}">${item.label}</li>`)
      .join('');
    li.insertAdjacentElement('afterend', submenu);

    submenu.querySelectorAll('.context-link').forEach(link => {
      link.addEventListener('click', () => {
        iframe.src = link.dataset.page;
      });
    });
  }

  function loadFamily(familyKey) {
    const family = families[familyKey];
    if (!family) return;

    brickList.innerHTML = `<h2>${family.label}</h2><ul>` +
      family.bricks.map(b => `<li data-page="${b.page}" class="brick-link">${b.title}</li>`).join('') +
      '</ul>';

    brickList.querySelectorAll('.brick-link').forEach(li => {
      li.addEventListener('click', () => {
        iframe.src = li.dataset.page;
        toggleSidebarVisibility(li.dataset.page);
        document.querySelectorAll('.context-submenu').forEach(el => el.remove());
        insertContextMenu(li, li.dataset.page);
        brickList.querySelectorAll('.brick-link').forEach(e => e.classList.remove('active'));
        li.classList.add('active');
      });
    });
  }

  familyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      familyButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.dataset.family;
      brickList.style.display = "";
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
        results.map(b => `<li data-page="${b.page}" class="brick-link">${b.title}</li>`).join('') +
        '</ul>';

      brickList.querySelectorAll('.brick-link').forEach(li => {
        li.addEventListener('click', () => {
          iframe.src = li.dataset.page;
          toggleSidebarVisibility(li.dataset.page);
          document.querySelectorAll('.context-submenu').forEach(el => el.remove());
          insertContextMenu(li, li.dataset.page);
          brickList.querySelectorAll('.brick-link').forEach(e => e.classList.remove('active'));
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

  if (iframe) {
    const src = iframe.src.split('/').pop();
    toggleSidebarVisibility(src);
  }
});