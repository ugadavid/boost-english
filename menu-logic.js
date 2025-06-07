// === Script DOM dynamique Boost'English avec accordéon et chargement iframe ===

document.addEventListener('DOMContentLoaded', () => {
  const familyButtons = document.querySelectorAll('.family-btn');
  const brickList = document.getElementById('brickList');
  const iframe = document.querySelector('.brick-content');
  const searchBox = document.getElementById('searchBox');

  const hideSidebarOn = ["accueil.html", "home.html", "welcome.html"];

  function toggleSidebarVisibility(currentPage) {
    //alert(currentPage);
    if (!brickList) return;
    if (hideSidebarOn.some(name => currentPage.includes(name))) {
      brickList.style.display = "none";
    } else {
      brickList.style.display = "";
    }
  }

  function insertContextMenu(li, brickPage) {
    //alert(li + " || " + brickPage);
    const brickKey = brickPage.split('/').pop().replace('.html', '').replace('-', '').replace(':', '');
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
    //alert(familyKey);
    const family = families[familyKey];
    if (!family) return;

    brickList.innerHTML = `<h2>${family.label}</h2><ul class="category-list">`;

    for (const [catKey, category] of Object.entries(family.categories)) {
      brickList.innerHTML += `<li class="category-item">
        <div class="category-header" data-cat="${catKey}">${category.label}</div>
        <ul class="brick-sublist" style="display:none">
          ${category.bricks.map(b => `<li class="brick-link" data-page="${b.page}">${b.title}</li>`).join('')}
        </ul>
      </li>`;
    }

    brickList.innerHTML += `</ul>`;

    document.querySelectorAll('.category-header').forEach(header => {
      header.addEventListener('click', () => {
        const sublist = header.nextElementSibling;
        const isVisible = sublist.style.display === "block";
        document.querySelectorAll('.brick-sublist').forEach(ul => ul.style.display = "none");
        sublist.style.display = isVisible ? "none" : "block";
      });
    });

    document.querySelectorAll('.brick-link').forEach(li => {
      li.addEventListener('click', () => {
        iframe.src = li.dataset.page;
        toggleSidebarVisibility(li.dataset.page);
        document.querySelectorAll('.context-submenu').forEach(el => el.remove());
        insertContextMenu(li, li.dataset.page);
        document.querySelectorAll('.brick-link').forEach(e => e.classList.remove('active'));
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
        Object.values(f.categories).forEach(cat => {
          cat.bricks.forEach(b => {
            if (b.title.toLowerCase().includes(term)) results.push(b);
          });
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
