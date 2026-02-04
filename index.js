  const storeObject = {
    stone: 0,
    trunk: 0,
    ground: 0,
    grass: 0,
    bush: 0,
  };
const rowsNumber = 30;
const colsNumber = 100;

const createBoard = () => {
  for (let r = 1; r <= rowsNumber; r++) {
    for (let c = 1; c <= colsNumber; c++) {
      const block = document.createElement("div");
      block.classList.add("cell");
      if (r < 10) {
        if ((r > 4 && c === 8) || (r > 4 && c === 17) || (r > 4 && c === 25)) {
          block.classList.add("trunk");
        } else if (
          (r == 1 && c > 7 && c < 9) ||
          (r == 2 && c > 6 && c < 10) ||
          (r == 3 && c > 5 && c < 11) ||
          (r == 4 && c > 5 && c < 11) ||
          (r == 1 && c > 16 && c < 18) ||
          (r == 2 && c > 15 && c < 19) ||
          (r == 3 && c > 14 && c < 20) ||
          (r == 4 && c > 14 && c < 20) ||
          (r == 1 && c > 24 && c < 26) ||
          (r == 2 && c > 23 && c < 27) ||
          (r == 3 && c > 22 && c < 28) ||
          (r == 4 && c > 22 && c < 28)
        ) {
          block.classList.add("bush");
        }
      }
      if (r == 10) {
        block.classList.add("grass");
      } else if (r > 10 && r <= 15) {
        block.classList.add("ground");
      } else if (r > 15 && r <= 28) {
        block.classList.add("stone");
      } else if (r > 28) {
        block.classList.add("bedrock");
      }
      document.body.appendChild(block);
    }
  }
};

const addSideBar = () => {
  const sideBar = document.createElement("div");
  sideBar.classList.add("sideBar");
  document.body.appendChild(sideBar);
  ["pickaxe", "axe", "shovel", "shears"].forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("tool");
    div.classList.add(element);
    sideBar.appendChild(div);
  });
  sideBar.addEventListener("click", (event) => {
    if (event.target.classList.contains("tool")) {
      if (event.target.classList.contains("pickaxe")) {
        document.body.style.cursor = `url("./images/pickaxe-icon.jpg") ,pointer`;
      }
      if (event.target.classList.contains("axe")) {
        document.body.style.cursor = `url("./images/axe-icon.jpg") ,pointer`;
      }
      if (event.target.classList.contains("shovel")) {
        document.body.style.cursor = `url("./images/shovel-icon.jpg") ,pointer`;
      }
      if (event.target.classList.contains("shears")) {
        document.body.style.cursor = `url("./images/shears-icon.jpg") ,pointer`;
      }
    }
  });

  const storeSideBar = document.createElement("div");
  storeSideBar.classList.add("side");
  storeSideBar.classList.add("none");
  document.body.appendChild(storeSideBar);
};

const addEventListenerToRemoveCellByClick = () => {


  document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("cell")) {
      if (
        document.body.style.cursor.includes("pickaxe-icon") &&
        event.target.classList.contains("stone")
      ) {
        event.target.className = "cell";
        storeRemovedCell("stone");
      }
      if (
        document.body.style.cursor.includes("axe-icon") &&
        event.target.classList.contains("trunk")
      ) {
        event.target.className = "cell";
        storeRemovedCell("trunk");
      }
      if (
        document.body.style.cursor.includes("shovel-icon") &&
        event.target.classList.contains("ground")
      ) {
        event.target.className = "cell";
        storeRemovedCell("ground");
      }
      if (
        document.body.style.cursor.includes("shovel-icon") &&
        event.target.classList.contains("grass")
      ) {
        event.target.className = "cell";
        storeRemovedCell("grass");
      }
      if (
        document.body.style.cursor.includes("shears-icon") &&
        event.target.classList.contains("bush")
      ) {
        event.target.className = "cell";
        storeRemovedCell("bush");
      }
    }
  });
};

const storeRemovedCell = (cellClass) => {
  const storeSideBar = document.querySelector(".side");
  storeSideBar.innerHTML = "";

  storeObject[cellClass]++;

  if (storeSideBar.classList.contains("none")) {
    storeSideBar.classList.remove("none");
  }
  for (let key in storeObject) {
    if (storeObject[key] > 0) {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add(`side-${key}`);
      cellDiv.classList.add("side-div");
      cellDiv.innerText = storeObject[key];
      storeSideBar.append(cellDiv);
    }
  }
  storeSideBar.addEventListener("click", (event) => {
    if (event.target.classList.contains("side-div")) {
      if (event.target.classList.contains("side-stone")) {
        document.body.style.cursor = `url("./images/stone_40x40.jpg") ,pointer`;
      }
       if (event.target.classList.contains("side-grass")) {
        document.body.style.cursor = `url("./images/grass_40x40.jpg") ,pointer`;
      }
         if (event.target.classList.contains("side-ground")) {
        document.body.style.cursor = `url("./images/dirt_40x40.jpg") ,pointer`;
      }
         if (event.target.classList.contains("side-bush")) {
        document.body.style.cursor = `url("./images/oak-leaves_40x40.jpg") ,pointer`;
      }
        if (event.target.classList.contains("side-trunk")) {
        document.body.style.cursor = `url("./images/wood1_40x40.jpg") ,pointer`;
      }
    }
  });
};
const returnRemovedCall = () => {
  document.body.addEventListener("click", (event) => {
    if (!event.target.classList.contains("cell")) return;

    if (event.target.classList.length > 1) return;

    if (document.body.style.cursor.includes("stone") && storeObject.stone > 0) {
      event.target.classList.add("stone");
      storeObject.stone--;if(storeObject.stone==0){
                document.body.style.cursor = `auto`;

      }
    }


    if (document.body.style.cursor.includes("grass") && storeObject.grass > 0) {
      event.target.classList.add("grass");
      storeObject.grass--;if(storeObject.grass==0){
                document.body.style.cursor = `auto`;

      }
    }

    if (document.body.style.cursor.includes("dirt") && storeObject.ground > 0) {
      event.target.classList.add("ground");
      storeObject.ground--;if(storeObject.ground==0){
                document.body.style.cursor = `auto`;

      }
    }

    if (document.body.style.cursor.includes("oak-leaves") && storeObject.bush > 0) {
      event.target.classList.add("bush");
      storeObject.bush--;if(storeObject.bush==0){
                document.body.style.cursor = `auto`;

      }
    }

    if (document.body.style.cursor.includes("wood1") && storeObject.trunk > 0) {
      event.target.classList.add("trunk");
      storeObject.trunk--;if(storeObject.trunk==0){
                document.body.style.cursor = `auto`;

      }
    }

    storeRemovedCell();

  });
};

const playGame = () => {
  createBoard();
  addSideBar();
  addEventListenerToRemoveCellByClick();
  returnRemovedCall()
};

playGame();


