// === Ce fichier contient les menus principaux et contextuels ===
// === Les professeurs peuvent modifier les titres ou ajouter des briques ===

const families = {
  everyday: {
    label: "Everyday Communication",
    bricks: [
      { title: "Numbers", page: "briques/numbers.html" },
      { title: "Telling the Time", page: "briques/time.html" },
      { title: "Way Finding", page: "briques/wayfinding.html" }
    ]
  },
  professional: {
    label: "Professional Communication",
    bricks: [
      { title: "Job Hunting", page: "briques/job.html" },
      { title: "Presentations", page: "briques/presentations.html" }
    ]
  },
  specialist: {
    label: "Specialist Communication",
    bricks: [
      { title: "Green Engineering", page: "briques/green.html" },
      { title: "Electronics", page: "briques/electronics.html" }
    ]
  },
  learning: {
    label: "Learning Focus",
    bricks: [
      { title: "Autonomy", page: "briques/autonomy.html" },
      { title: "Tools", page: "briques/tools.html" }
    ]
  }
};

// Menu contextuel à l'intérieur d'une brique (exemple pour 'Numbers')
const contextMenusbis = {
  numbers: [
    "Introduction",
    "I start",
    "I learn – Listen & Write",
    "I say – Voicework",
    "I practise – Grouping",
    "I practise – Ordering",
    "I practise – Language work",
    "I practise – Monty Python",
    "I do – Use numbers",
    "I share"
  ]
};

const contextMenus = {
  numbers: [
    { label: "Introduction", link: "numbers/intro.html" },
    { label: "I start", link: "numbers/start.html" },
    
  ]
}