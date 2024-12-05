export function navStyle(openingValue) {
  if (openingValue.style.display === "flex") {
    openingValue.style.animation = "slideOut 1s ease";
    setTimeout(() => {
      openingValue.style.display = "none";
    }, 1000);
  } else {
    openingValue.style.display = "flex";
    openingValue.style.animation = "slideIn 1s ease";
  }
}

async function fetchData(category, pageName, type) {
  try {
    const fetching = await fetch("./Scripts/data/data.json");

    if (!fetching.ok) return console.error("error occured");

    const data = await fetching.json();
    const page = type
      ? data[category].find((item) => item.roles === pageName)
      : data[category].find((item) => item.name === pageName);
    return page;
  } catch (err) {
    console.error("Error: ", err.message);
  }
}

export async function contentDeliver(category, pageName, elementToEmbed) {
  const data = await fetchData(category, pageName);

  return (elementToEmbed.innerHTML = `
  ${loadHeader()}
<main class="container">
  <section class="planet"> 
    <p class="intro"><span class="planet-num">${pageNum(
      category
    )}</span> PICK YOUR ${category.toUpperCase()}</p>
    <img src=${data.images.png} />
    </section>
    <section class="about">
    <nav class="planet-nav"> 
    <a href="destination-moon.html">Moon</a>
    <a href="destination-mars.html">Mars</a> 
    <a href="destination-europa.html">Europa</a>
    <a href="destination-titan.html">Titan</a>
    </nav>
    <p class="planet-name">${data.name.toUpperCase()}</p>
    <p class="description">${data.description}</p>
    <hr>
    <div class="time-and-distance">
    <div> 
    <p class="distance"> 
    AVG. DISTANCE 
    </p>
    <span class="units">${data.distance}</span>
    </div>
    <div> 
    <p class="time">
    EST. TRAVEL TIME 
    </p>
    <span class="units">${data.travel}</span>
    </div>
    </div>
    </section>
    </main>`);
}

function pageNum(category) {
  switch (category) {
    case "destinations":
      return "01";
    case "crew":
      return "02";
    case "technology":
      return "03";
  }
}

export function loadHeader() {
  return ` <header>
    <img src="./assets/shared/logo.svg" alt="logo" />
    <nav class="main-nav">
      <a href="index.html"><span class="num">00</span> HOME</a>
      <a href="destination-moon.html" class="dest"
        ><span class="num">01</span> DESTINATION</a
      >
      <a href="crew-pilot.html"><span class="num">02</span> CREW</a>
      <a href="technology-vehicle.html" class="tech"
        ><span class="num">03</span> TECHNOLOGY</a
      >
    </nav>
    <img
      src="./assets/shared/icon-hamburger.svg"
      alt="menu"
      class="nav-open" 
    />
  </header>
  <hr class="hr">`;
}

export async function crewContent(category, pageName, elementToEmbed, type) {
  const data = await fetchData(category, pageName, type);

  return (elementToEmbed.innerHTML = `
    ${loadHeader()}
    <p class="intro"><span>${pageNum(category)}</span> MEET YOUR CREW</p>
    <main class="container">
    <section class="description"> 
    <p class="role">${data.role}</p>
    <p class="name">${data.name}</p>
    <p class="bio">${data.bio}</p>
    </section>
    <section class="image">
    <img src=${data.images.png} alt="Picture of ${data.role} ${pageName}" />
    </section>
    </main>
    <a href="" class="right-arrow"><img src="./Icons/Arrow Icon.png" alt="Go to the right" /></a>
    <a href="" class="left-arrow"><img src="./Icons/Arrow Icon.png" alt="Go to the left" /></a>
    <div class="indicator">
    <div class="dots"></div>
    <div class="dots"></div>
    <div class="dots"></div>
    <div class="dots"></div>
    </div>
    `);
}

function isActive(changeClass, type) {
  if (type === "secondary") {
    if (window.location.href === changeClass.href) {
      changeClass.classList.add("active");
    } else {
      changeClass.classList.remove("active");
    }
  } else {
    if (splitLink(window.location.href) === splitLink(changeClass.href)) {
      changeClass.classList.add("active");
    } else {
      changeClass.classList.remove("active");
    }
  }
}

export function getValues(nav, type) {
  const a = document.querySelectorAll(`${nav} > a`);
  a.forEach((item) => {
    isActive(item, type);
  });
}

export function splitLink(linkToSplit, type) {
  const url = linkToSplit.split("/");
  const values = url[url.length - 1].split(".")[0].split("-");
  return type ? values : values[0];
}

export async function techContent(category, pageName, elementToEmbed) {
  const data = await fetchData(category, pageName, true);
  console.log(data.name);
  return (elementToEmbed.innerHTML = `
  ${loadHeader()}
  <p class="intro"><span>${pageNum(category)}</span> SPACE LAUNCH 101</p>
  <main class="container">
    <section class="description">
      <nav class="page-nav">
        <a href="technology-vehicle.html">1</a>
        <a href="technology-spaceport.html">2</a>
        <a href="technology-capsule.html">3</a>
      </nav>
      <div class="about">
        <p class="s-intro">SO THE TECHNOLOGY</p>
        <h2 class="name">${data.name.toUpperCase()}</h2>
        <p class="detailed-desc">
         ${data.description}
        </p>
      </div>
    </section>
    <section class="image">
     <img src=${data.images.portrait} alt="photo of ${
    data.name
  }" class="desktop-mode" />
     <img src=${data.images.landscape} alt="photo of ${
    data.name
  }" class="mobile-mode" />
    </section>
  </main>
  `);
}

export function setLink(rArrow, lArrow) {
  const links = [
    "crew-pilot.html",
    "crew-commander.html",
    "crew-engineer.html",
    "crew-specialist.html",
  ];
  links.forEach((link) => {
    if (window.location.href.includes(link)) {
      links[links.indexOf(link) + 1] !== undefined
        ? (rArrow.href = links[links.indexOf(link) + 1])
        : (rArrow.style.display = "none");
      links[links.indexOf(link) - 1] !== undefined
        ? (lArrow.href = links[links.indexOf(link) - 1])
        : (lArrow.style.display = "none");
    }
  });
}

export function setActiveClass(valueToSet) {
  const dots = document.querySelectorAll(`${valueToSet}`);
  const a = [
    "crew-pilot.html",
    "crew-commander.html",
    "crew-engineer.html",
    "crew-specialist.html",
  ];

  a.forEach((link) => {
    if (window.location.href.includes(link)) {
      dots[a.indexOf(link)].classList.add("active");
    }
  });
}
