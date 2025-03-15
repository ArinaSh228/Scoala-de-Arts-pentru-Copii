const professors = [
  {
    name: "A. Alexeeva",
    position: "Учитель",
    experience: "Стаж 15+ лет",
    description: "А. Алексеев – талантливый преподаватель художественной школы в Бельцах, выпускник Академии искусств Молдовы и Бухарестского университета. Ее опыт и навыки помогают студентам развивать талант и творческое мышление.",
    image: "../images/AAlexeeva.png"
  },
  {
    name: "G. Turcan",
    position: "Учитель",
    experience: "Стаж 20+ лет",
    description: "Г. Цуркан – опытный преподаватель Художественной школы в Бельцах, выпускник Академии искусств Молдовы и Клужского университета. Ее профессионализм и творческий подход вдохновляют студентов проявлять себя и развивать свои художественные способности.",
    image: "../images/G. Turcan.png"
  },
  {
    name: "N. Vîlciu",
    position: "Учитель",
    experience: "Стаж 5+ лет",
    description: "Н. Вылчу – преподаватель художественной школы в Бельцах, с богатым опытом и страстью к искусству. Выпускница Академии художеств из Молдовы, она привносит творческий подход в обучение, помогает студентам раскрыть свои таланты, усовершенствовать технику и найти свой собственный стиль в искусстве.",
    image: "../images/N. Vîlciu.png"
  },
  {
    name: "I. Romanciuc",
    position: "Учитель",
    experience: "Стаж 9+ лет",
    description: "И. Романчук пытный преподаватель Художественной школы в Бельцах, выпускник Академии искусств Молдовы и Университета искусств в Кишиневе. Его мастерство, креативность и целеустремленность вдохновляют студентов развивать свои художественные навыки, находить свой собственный стиль и смело выражать себя через искусство.",
    image: "../images/I. Romancic.png"
  },
  {
    name: "L. Caraiman",
    position: "Учитель",
    experience: "Стаж 17+ лет",
    description: "Л. Карайман – выпускница Академии искусств Молдовы, а также выпускница Университета искусств СССР. Профессионализм, творческий подход и любовь к искусству помогают студентам раскрыть свой творческий потенциал, совершенствовать технику и найти собственное художественное выражение.",
    image: "../images/L. Caraiman.png"
  },
  {
    name: "Iu. Povar",
    position: "Учитель",
    experience: "Стаж 10+ лет",
    description: "Повар является выпускником Академии художеств Молдовы, а также выпускницей Государственного университета промышленных технологий в Санкт-Петербурге. Его профессионализм, творческий подход и любовь к искусству помогают ученикам совершенствовать свою технику и находить собственное художественное выражение.",
    image: "../images/Iu. Povar.png"
  },
  {
    name: "L. Ananii",
    position: "Учитель",
    experience: "Стаж 15+ лет",
    description: "Л. Ананией – выпускница Академии искусств Молдовы, а также Национального университета искусств в Бухаресте. Его профессионализм, креативность и преданность искусству помогают его ученикам раскрыть свой потенциал, улучшить технику и найти уникальные способы самовыражения.",
    image: "../images/L. Ananii.png"
  },
  {
    name: "T. Pintea",
    position: "Учитель",
    experience: "Стаж 7+ лет",
    description: "Т. Пинтя – выпускница Академии искусств Молдовы, а также Национальной академии изобразительного искусства и архитектуры в Киеве. Профессионализм, творческий подход и преданность искусству помогают студентам раскрыть свой творческий потенциал, усовершенствовать технику и найти собственный стиль в художественном выражении.",
    image: "../images/T. Pintea.png"
  },
  {
    name: "O. Carp",
    position: "Директор",
    experience: "Стаж 15+ лет",
    description: "О. Карп – выпускник Академии искусств Молдовы, а также Национальной академии искусств во Львове. Будучи директором художественной школы, он сочетает административный талант с глубоким пониманием искусства, вдохновляя учеников и преподавателей создавать, совершенствовать и исследовать новые формы искусства.",
    image: "../images/O. Carp.png"
  },
  {
    name: "R. Stefanovici",
    position: "Учитель",
    experience: "Стаж 15+ лет",
    description: "Р. Стефанович является выпускником Академии искусств Молдовы, а также Национального университета искусств в Бухаресте. Помимо преподавания, он является автором книг по искусству, в которых делится своими знаниями, исследует художественные тенденции и помогает читателям лучше понять мир живописи и скульптуры.",
    image: "../images/R. Stefanovici.png"
  },
  {
    name: "L. Tabarcea",
    position: "Учитель",
    experience: "Стаж 7+ лет",
    description: "Л. Табарча училась в Академии музыки, театра и изобразительных искусств в Кишиневе и в Национальном университете искусств имени Джордже Энеску в Яссах, Румыния.",
    image: "../images/L. Tabarcea.png"
  },
  {
    name: "L. Carp",
    position: "Учитель",
    experience: "Стаж 15+ лет",
    description: "Л. Карп – профессиональный преподаватель живописи и графики, выпускник Академии художеств Рериха и курсов современного дизайна Бухарестского университета искусств.",
    image: "../images/L. Carp.png"
  },
  {
    name: "M. Andrușco",
    position: "Учитель",
    experience: "Стаж 11+ лет",
    description: "М. Андрушко — профессор рисунка и академической композиции, выпускник Бухарестского национального университета искусств и курса иллюстрации в Лондонской школе дизайна.",
    image: "../images/M. Andrușco.png"
  }
];

function renderProfessors() {
  const container = document.querySelector(".professors-container");
  container.innerHTML = "";

  professors.forEach(professor => {
    const card = document.createElement("div");
    card.classList.add("professor-card");

    card.innerHTML = `
      <img src="${professor.image}" alt="${professor.name}" />
      <h2>${professor.name}</h2>
      <h3>${professor.position}</h3>
      <p class="experience">${professor.experience}</p>
      <p>${professor.description}</p>
    `;

    container.appendChild(card);
  });
}

renderProfessors();

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navContent = document.querySelector('.nav-content');
  burger.addEventListener('click', function () {
    navContent.classList.toggle('active');
  });
});