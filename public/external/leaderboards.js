
const PLAYERS_PER_PAGE = 100;

function getLeaderboardGames() {
  generateGameSelectorChildren(leaderboards, 0, false);

  // Determine if there's a leaderboard/page num in the URL
  let queryParams = new URLSearchParams(window.location.search);
  let leaderboard = queryParams.get("leaderboard");
  let page = queryParams.get("page") || 1;

  page = parseInt(page);

  if (page < 1) {
    page = 1;
  }

  if (leaderboard) {
    getLeaderboardFromQuery(leaderboard, page);
  }
}

function generateGameSelectorChildren(leaderboardObject = {}, layer, event) {
  const MAX_LAYER = 4;

  for (let b = layer; b <= MAX_LAYER; b++) {
    document.getElementById(`selector-layer-${b}`).innerHTML = "";
    document.getElementById(`selector-layer-${b}`).classList.add("display-none");
  }

  if (event) {
    highlightButton(event.target);
  }

  for (let a in leaderboardObject) {
    let game = leaderboardObject[a];

    let gameButton = document.createElement("span");
    gameButton.classList.add("leaderboard-selector-button");
    gameButton.classList.add("multicolor-badge");

    let gameTranslation = getTranslationByGameObject(game);

    gameButton.innerText = gameTranslation;
    gameButton.setAttribute("data-i", game["id"]);

    if (!game["id"]) {
      gameButton.addEventListener("click", function (event) {
        generateGameSelectorChildren(game["leaderboards"], layer + 1, event);
      });
    } else {
      gameButton.addEventListener("click", function (event) {
        selectLeaderboard(game, event);
      });
    }

    if (game["icon"]) {
      let gameImage = document.createElement("img");
      gameImage.src = `img/${game["icon"]}.png`;
      gameImage.classList.add("leaderboard-icon");
      gameImage.classList.add("icon");
      gameImage.alt = "";

      gameButton.prepend(gameImage);
    }

    document.getElementById(`selector-layer-${layer}`).appendChild(gameButton);
    document.getElementById(`selector-layer-${layer}`).classList.remove("display-none");
  }
}

function highlightButton(button) {
  let eventSiblings = button.parentElement.children;
  for (let a of eventSiblings) {
    a.classList.remove("selected");
  }

  button.classList.add("selected");
}

function selectLeaderboard(leaderboardObject, event) {
  highlightButton(event.target);
  currentLeaderboardInformation["leaderboard"] = leaderboardObject["id"];
  currentLeaderboardInformation["format"] = leaderboardObject["format"];
  getLeaderboardData(leaderboardObject["id"]);
}

let leaderboardRowTemplate = `
    <div class="flex-two-item-basic">
      <span data-i="ranking" class="leaderboard-rank"></span>
      <img class="leaderboard-head" data-i="head">
      <a class="leaderboard-rank-name" data-i="rank-name" target="_blank">
        <span data-i="rank"></span>
        <span data-i="name"></span>
      </a>
    </div>
    <div data-i="quantity" class="tabular" style="text-align: right"></div>
`;

async function getLeaderboardData(leaderboard, page = 1) {
  // connect to leaderboard at /leaderboard?leaderboard=LEADERBOARD_NAME&page=1
  // fetch json data

  // Update query params with leaderboard name and page number
  let queryParams = new URLSearchParams(window.location.search);
  queryParams.set("leaderboard", leaderboard);
  queryParams.set("page", page);
  window.history.replaceState({}, "", `${window.location.pathname}?${queryParams.toString()}`);

  let leaderboardPromise = await fetch(`/leaderboard?leaderboard=${leaderboard}&page=${page}`);
  let leaderboardData = await leaderboardPromise.json();

  if (leaderboardData["success"] == false) {
    return;
  }

  let leaderboardInfo = getFullTranslationById(leaderboard);
  document.getElementById("leaderboard-title-game").innerText = leaderboardInfo["game"];
  document.getElementById("leaderboard-title-name").innerText = leaderboardInfo["name"];
  document.getElementById("leaderboard-title").style.display = "flex";

  let leaderboardTable = document.getElementById("leaderboard");
  leaderboardTable.innerHTML = "";
  currentLeaderboardInformation["total_players"] = leaderboardData["count"];
  currentLeaderboardInformation["total_pages"] = Math.ceil(leaderboardData["count"] / PLAYERS_PER_PAGE);
  currentLeaderboardInformation["page"] = page;

  for (let a of leaderboardData["data"]) {
    let row = document.createElement("div");
    row.innerHTML = leaderboardRowTemplate;
    row.classList.add("flex-two-item");
    row.classList.add("row-header");
    row.classList.add("leaderboard-row");
    row.classList.add("no-column-header");

    row.querySelector("[data-i='ranking']").innerText = checkAndFormat(a["ranking"]);

    let playerName = a["tagged_name"];
    /* rank: (\[.*\] ) */
    let playerRankColor;
    if (playerName.substring(0, 1) == "§") {
      playerRankColor = playerName.substring(0, 2);
    } else {
      playerRankColor = "§7";
    }

    let playerRank = "";

    let playerNameWithoutRank = playerName.replace(/(\[.*\] )/, (substring) => {
      playerRank = substring.trim();
      return "";
    });

    playerRank = playerRankColor + playerRank;

    updateTag(row, "rank", generateMinecraftText(playerRank), true);
    updateTag(row, "name", generateMinecraftText(playerNameWithoutRank), true);

    let playerBadge = a["badge"] || "NONE";
    checkBadgeInList(playerBadge, row);

    // differ based on if it's a player or guild leaderboard
    if (leaderboard.startsWith("GUILD_")) {
      row.querySelector(`[data-i="head"]`).style.display = "none";
      row.querySelector("[data-i='rank-name']").href = `/guild/${a["name"]}`;
    } else {
      head = row.querySelector(`[data-i="head"]`);

      head.style.display = "block";
      head.src = `https://h.matdoes.dev/2d/${a["uuid"].replaceAll("-", "")}`;
      head.alt = "";

      row.querySelector("[data-i='rank-name']").href = `/player/${a["uuid"]}`;
    }
    updateTag(row, "quantity", formatLeaderboardStatistic(currentLeaderboardInformation["format"], a["value"]), true);

    leaderboardTable.appendChild(row);
  }

  if (currentLeaderboardInformation["page"] == 1) {
    document.getElementById("pagination-previous").classList.add("disabled");
  } else {
    document.getElementById("pagination-previous").classList.remove("disabled");
  }

  if (currentLeaderboardInformation["page"] == currentLeaderboardInformation["total_pages"]) {
    document.getElementById("pagination-next").classList.add("disabled");
  } else {
    document.getElementById("pagination-next").classList.remove("disabled");
  }

  document.getElementById("pagination").style.display = "flex";
  document.getElementById("page-number").innerText = insertPlaceholders(getTranslation(["leaderboards", "page_number"]), { page: checkAndFormat(page), total: checkAndFormat(Math.ceil(leaderboardData["count"] / PLAYERS_PER_PAGE)) });
}

const icons = {
  network: "logo/hypixel_logo",
  arcade: "icon/minecraft/slime_ball",
  bedwars: "icon/minecraft/red_bed",
  blitz: "icon/minecraft/diamond_sword",
  buildbattle: "icon/minecraft/crafting_table",
  copsandcrims: "icon/minecraft/iron_bars",
  duels: "icon/minecraft/fishing_rod",
  megawalls: "icon/minecraft/soul_sand",
  murdermystery: "icon/minecraft/bow",
  pit: "icon/minecraft/dirt",
  skywars: "icon/minecraft/ender_eye",
  smashheroes: "icon/minecraft/head_smashheroes",
  tntgames: "icon/minecraft/tnt",
  uhc: "icon/minecraft/golden_apple",
  warlords: "icon/minecraft/stone_axe",
  woolgames: "icon/minecraft/white_wool",

  arena: "icon/minecraft/blaze_powder",
  vampirez: "icon/minecraft/wither_skeleton_skull",
  walls: "icon/minecraft/sand",
  paintball: "icon/minecraft/snowball",
  quakecraft: "icon/minecraft/firework_rocket",
  tkr: "icon/minecraft/minecart",
};

function showNewPage(jump) {
  let currentPage = currentLeaderboardInformation["page"];
  let totalPages = currentLeaderboardInformation["total_pages"];
  let currentLeaderboard = currentLeaderboardInformation["leaderboard"];

  if (jump == "next") {
    if (currentPage < totalPages) {
      currentPage += 1;
      getLeaderboardData(currentLeaderboard, currentPage);
    } else {
      console.log("Can't go to next page");
    }
  } else if (jump == "previous") {
    if (currentPage > 1) {
      currentPage -= 1;

      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      getLeaderboardData(currentLeaderboard, currentPage);
    } else {
      console.log("Can't go to previous page");
    }
  }
}

function getLeaderboardFromQuery(query, page = 1) {
  // Determine if leaderboard exists, i.e. it has an ID in the leaderboards variable
  let path = findPathById(leaderboards, query);
  let filteredLeaderboard = leaderboards;
  if (path) {
    for (let a = 0; a < path.length; a++) {
      let layer = a;
      let button = document.querySelector(`#selector-layer-${layer} span:nth-child(${path[a] + 1})`);
      if (button) {
        highlightButton(button);
      }

      filteredLeaderboard = filteredLeaderboard[path[a]];

      if (filteredLeaderboard["id"]) {
        break; // We've reached a leaderboard
      }

      if (filteredLeaderboard["leaderboards"]) {
        filteredLeaderboard = filteredLeaderboard["leaderboards"];
        generateGameSelectorChildren(filteredLeaderboard, layer + 1, false);
      } else {
        console.warn("No leaderboards found (how?)");
        break;
      }
    }

    currentLeaderboardInformation["leaderboard"] = query;
    currentLeaderboardInformation["format"] = filteredLeaderboard["format"];
    getLeaderboardData(query, page);
  } else {
    console.warn(`Leaderboard ${query} not found!`);
  }
}