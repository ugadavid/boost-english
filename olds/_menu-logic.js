// === Script DOM dynamique Boost'English ===
// Ce fichier gère l'interaction entre boutons familles, affichage de briques et visibilité de l'aside.

document.addEventListener('DOMContentLoaded', () => {
  const familyButtons = document.querySelectorAll('.family-btn');
  const brickList = document.getElementById('brickList');
  const iframe = document.querySelector('.brick-content');
  const searchBox = document.getElementById('searchBox');

  const hideSidebarOn = ["accueil.html", "home.html", "welcome.html"];

  function toggleSidebarVisibility(currentPage) {
    
    if (!brickList) { 
      alert('passe ici');
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

    // Générer la liste des briques
    brickList.innerHTML = `<h2>${family.label}</h2><ul>` +
      family.bricks.map(b => `<li data-page="${b.page}">${b.title}</li>`).join('') +
      '</ul>';

    // Activation du clic sur chaque brique
    brickList.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        iframe.src = li.dataset.page;
        toggleSidebarVisibility(li.dataset.page);
        brickList.querySelectorAll('li').forEach(e => e.classList.remove('active'));
        li.classList.add('active');
      });
    });
  }

  // Gestion des boutons familles
  familyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      familyButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.dataset.family;
      loadFamily(key);
    });
  });

  // Recherche dans toutes les briques
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

  // Lancement auto au chargement
  const activeBtn = document.querySelector('.family-btn.active');
  if (activeBtn) {
    const key = activeBtn.dataset.family;
    loadFamily(key);
  }

  // Vérifier la page actuelle dans l'iframe
  if (iframe) toggleSidebarVisibility(iframe.src);
});