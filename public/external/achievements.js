function modernifyGameName(game) {
  let modernGameNames = {
    christmas2017: "holiday",
    halloween2017: "halloween",
    walls3: "megawalls",
    supersmash: "smashheroes",
    gingerbread: "tkr",
    quake: "quakecraft",

    truecombat: "crazywalls",
  };

  if (modernGameNames[game]) {
    return modernGameNames[game];
  }

  return game;
}

function demodernifyGameName(game) {
  let demodernGameNames = {
    holiday: "christmas2017",
    halloween: "halloween2017",
    megawalls: "walls3",
    smashheroes: "supersmash",
    tkr: "gingerbread",
    quakecraft: "quake",

    crazywalls: "truecombat",
  };

  if (demodernGameNames[game]) {
    return demodernGameNames[game];
  }

  return game;
}

let secretAchievements = {
  general_code_breaker: "Enter the Hypixel Vault room.",
  general_hot_potato: "Hot, hot, hot!",
  general_keep_quiet: "Keep your noise down in the Castle Library",
  general_hypixel_historian: "View all historical records in the Castle Library",
  general_crash_landed: "Join SkyBlock through the crashed portal",
  arcade_dropper_well_well_well: "Find the hidden frog on the Floating Islands map",
  woolgames_magician: "Capture 2 wools in one game",
  arcade_hypixel_says_movement: "Jump off the Platform instead of standing still",
  arcade_snake: "Earn 50 points in the lobby Snake minigame",
  arcade_ender_spleef_no_powerhouse: "Win a game of Ender Spleef without using any powerups",
  arcade_dw_void: "Get out of the map and into the void in a game of Dragon Wars",
  murdermystery_secret_chamber: "Find and enter the combination to open the secret chamber on Gold Rush",
  walls3_configuration: "Finish a game having final killed exactly 3 players from one team, 2 from another, and 1 from the third",
  uhc_one_pound_slap: "Hit a player off a cliff using the Slap Fish",
  woolgames_enderman: "Travel through 15 portals in a single game",
  skyblock_i_am_superior: "Take down a Superior Dragon",
  skyblock_jakes_mystery: "Complete Beth's Quest",
  skyblock_defeating_death: "Slay a Deathmite",
  skyblock_rebirth: "Kill a Fairy while you are a Ghost",
  skyblock_royal_resident_dialogue: "Finish talking to the Royal Resident",
  skyblock_nightmare: "Complete Bednom's secret quest",
  skyblock_fallen_star_cult: "Wear the Fallen Star Helmet to a cult meeting",
  skyblock_this_is_the_way: "Find the Belly of the Beast",
  skyblock_existential_revelations: "Find the mushroom dream in the Catacombs",
  skyblock_the_itsy_bitsy_spider: "Feed a player to Aranya",
  skyblock_empty_flower_pot: "Why is it there? Why are we all here?",
  skyblock_responsible_pet_owner: "Have your rabbit get squashed in the Half-Eaten Cave",
  skyblock_shrimp: "Obtain Shrimp the Traveler Fish",
  skyblock_eternal_flame_ring: "Throw the Eternal Flame Ring into a specific pool of lava",
  skyblock_secret_end_place: "Enter the secret room in The End",
  skyblock_dragon_slayer: "Kill an Ender Dragon",
  skyblock_geronimo: "Get launched into the air by the Blazing Volcano",
  skyblock_meal_fit_for_a_king: "Put a Trophy Fish into the Melancholic Viking's furnace",
  skyblock_i_knew_it: "Unlock a Secret Armor Set",
  skyblock_wasted_potential: "Feed a Staff of the Volcano to a Cow",
  skyblock_sirius_business: "Participate in the Dark Auction",
  skyblock_end_credits: "Face your demise with the Temporal Pillar in the Rift",
  christmas2017_new_years_celebrations: "Watch the fireworks go off in the SkyBlock Hub or Main lobby",
  halloween2017_that_time_of_year: "Find the dancing Spooky Scary Skeleton in the Main Lobby",
  legacy_collectors_edition: "Collect all Special Fish while fishing in the Main Lobby",
  arcade_zombies_prison_secret_beyond: "Find the Black Hole Gun",
  arcade_zombies_prison_computers: "In one game, interact with all the computers in the Prison Map",
  woolgames_shopping_for_wool: "Shoot every Magic Wool that spawns in a single game",
  buildbattle_perfectceptionception: "Be the first to complete every round with 100% accuracy in a game of Speed Builders",

  skyblock_tragedy_reversed: "Murder your past self",
  skyblock_zoop: "Pop a link of 10 Puffs",
  skyblock_watchful_presence: "Secure the final Timecharm in the Rift",
  skyblock_not_the_exit: "Help Ikrus",
  skyblock_maximum_power: "Defeat Sun Gecko with all 7 modifiers enabled",
  skyblock_return_from_breach: "Return back from the breach",
  skyblock_defeat_sun_gecko: "Defeat Sun Gecko",
  skyblock_wizard_food_chain: "Become Wizardman",
  skyblock_genius: "Obtain a Free Will from Ubik",
  skyblock_hasta_la_vista: "Receive a Postcard from your minion",
  skyblock_finally_over: "Murder Special Agent Amog",
};

function updateFilters() {
  let filterStorage = localStorage.getItem("achievement-filters") || "";
  // is filters an array? parse
  try {
    filters = JSON.parse(filterStorage);
  } catch (e) {
    filters = [];
  }

  const filterGames = [
    { id: "general", name: getTranslation(["games", "general"]), minecraftId: "book" },

    { id: "arcade", name: getTranslation(["games", "arcade"]), minecraftId: "slime_ball" },
    { id: "arena", name: getTranslation(["games", "arena"]), minecraftId: "blaze_powder" },
    { id: "bedwars", name: getTranslation(["games", "bedwars"]), minecraftId: "red_bed" },
    { id: "blitz", name: getTranslation(["games", "blitz"]), minecraftId: "diamond_sword" },
    { id: "buildbattle", name: getTranslation(["games", "buildbattle"]), minecraftId: "crafting_table" },
    { id: "copsandcrims", name: getTranslation(["games", "copsandcrims"]), minecraftId: "iron_bars" },
    { id: "duels", name: getTranslation(["games", "duels"]), minecraftId: "fishing_rod" },
    { id: "housing", name: getTranslation(["games", "housing"]), minecraftId: "dark_oak_door" },
    { id: "megawalls", name: getTranslation(["games", "megawalls"]), minecraftId: "soul_sand" },
    { id: "murdermystery", name: getTranslation(["games", "murdermystery"]), minecraftId: "bow" },
    { id: "paintball", name: getTranslation(["games", "paintball"]), minecraftId: "snowball" },
    { id: "pit", name: getTranslation(["games", "pit"]), minecraftId: "dirt" },
    { id: "quakecraft", name: getTranslation(["games", "quakecraft"]), minecraftId: "firework_rocket" },
    { id: "skyblock", name: getTranslation(["games", "skyblock"]), minecraftId: "head_skyblock" },
    { id: "skywars", name: getTranslation(["games", "skywars"]), minecraftId: "ender_eye" },
    { id: "smashheroes", name: getTranslation(["games", "smashheroes"]), minecraftId: "head_smashheroes" },
    { id: "speeduhc", name: getTranslation(["games", "speeduhc"]), minecraftId: "golden_carrot" },
    { id: "tkr", name: getTranslation(["games", "tkr"]), minecraftId: "minecart" },
    { id: "tntgames", name: getTranslation(["games", "tntgames"]), minecraftId: "tnt" },
    { id: "uhc", name: getTranslation(["games", "uhc"]), minecraftId: "golden_apple" },
    { id: "vampirez", name: getTranslation(["games", "vampirez"]), minecraftId: "wither_skeleton_skull" },
    { id: "walls", name: getTranslation(["games", "walls"]), minecraftId: "sand" },
    { id: "warlords", name: getTranslation(["games", "warlords"]), minecraftId: "stone_axe" },
    { id: "woolgames", name: getTranslation(["games", "woolgames"]), minecraftId: "white_wool" },

    { id: "easter", name: getTranslation(["games", "easter"]), minecraftId: "head_easter" },
    { id: "halloween", name: getTranslation(["games", "halloween"]), minecraftId: "head_halloween" },
    { id: "holiday", name: getTranslation(["games", "holiday"]), minecraftId: "head_seasonal" },
    { id: "summer", name: getTranslation(["games", "summer"]), minecraftId: "head_summer" },
  ];

  // sort games by name
  filterGames.sort((a, b) => a.name.localeCompare(b.name));

  filterGames.unshift({ id: "all", name: getTranslation(["achievements", "select_all"]), minecraftId: null });

  const filterContainers = document.querySelectorAll(".filter-container");
  filterContainers.forEach(container => {
    container.innerHTML = "";

    for (let game of filterGames) {
      const filter = document.createElement("span");
      filter.className = "filter-game multicolor-badge";
      if (game.minecraftId) {
        filter.innerHTML = `<img src="/img/icon/minecraft/${game.minecraftId}.png" class="leaderboard-icon icon" alt="">`;
      }

      filter.dataset.game = game.id;
      filter.innerHTML += game.name;

      if (!filters.includes(game.id)) {
        if (game.id == "all") {
          if (filters.length == 0) {
            filter.classList.add("selected");
          }
        } else {
          filter.classList.add("selected");
        }
      }

      filter.addEventListener("click", () => onClickFilter(filter, game.id));
      container.appendChild(filter);
    }

    let filtersEmpty = filters.length == 0;

    const filterIcons = document.querySelectorAll(".filter");
    filterIcons.forEach(icon => {
      if (filtersEmpty) {
        icon.classList.remove("selected");
      } else {
        icon.classList.add("selected");
      }
    });
  });

  function onClickFilter(filter, gameId) {
    if (gameId == "all") {
      if (filters.length == 0) {
        filters = filterGames.map(game => game.id).filter(id => id !== "all");
      } else {
        filters = [];
      }
    } else {
      if (filters.includes(gameId)) {
        filters = filters.filter(filter => filter !== gameId);
      } else {
        filters.push(gameId);
      }
    }

    localStorage.setItem("achievement-filters", JSON.stringify(filters));

    // update toggles for each instance of filterContainers
    const filterContainers = document.querySelectorAll(".filter-container");
    filterContainers.forEach(container => {
      let children = container.children;
      for (let child of children) {
        let childGameId = child.dataset.game;

        if (gameId === "all") {
          // update every filter
          if (childGameId !== "all") {
            child.classList.toggle("selected", !filters.includes(childGameId));
          }
        } else {
          // only update that one filter
          if (childGameId == gameId) {
            child.classList.toggle("selected", !filters.includes(gameId));
          }
        }
      }

      // handle the "all" button state
      const allButton = container.querySelector('[data-game="all"]');
      if (allButton) {
        const allGames = filterGames.filter(g => g.id !== "all").map(g => g.id);
        const allSelected = allGames.every(g => !filters.includes(g));
        allButton.classList.toggle("selected", allSelected);
      }
    });

    updateClosestTiered();
    updateEasiestOneTime();
    updateRecentlyCompleted();

    let filtersEmpty = filters.length == 0;

    const filterIcons = document.querySelectorAll(".filter");
    filterIcons.forEach(icon => {
      if (filtersEmpty) {
        icon.classList.remove("selected");
      } else {
        icon.classList.add("selected");
      }
    });
  }
}

function getSecretAchievement(achievement) {
  if (secretAchievements[achievement]) {
    return secretAchievements[achievement];
  } else {
    console.warn(`No description found for secret achievement ${achievement}`);
    return getTranslation(["achievements", "secret_achievement"]);
  }
}

function getGameTier(gameName) { // The tier represents how hard a game is to "max" (get 100% of the achievements in it)
  let gameDifficulties = {
    general: 1,
    bedwars: 3,
    duels: 4,
    skywars: 7,
    arcade: 4,
    buildbattle: 2,
    murdermystery: 3,
    tntgames: 4,
    pit: 7,
    tkr: 2,
    arena: 6,
    quakecraft: 5,
    walls: 3,
    vampirez: 2,
    paintball: 5,
    megawalls: 7,
    copsandcrims: 5,
    uhc: 7,
    speeduhc: 4,
    blitz: 6,
    woolgames: 4,
    warlords: 6,
    smashheroes: 5,
    skyblock: 5,
    housing: 1,
    holiday: 1,
    easter: 1,
    halloween: 1,
    summer: 1,
  };

  if (gameDifficulties[gameName] == undefined) {
    console.warn(`Game ${gameName} does not have a tier assigned`);
  }
  return gameDifficulties[gameName] || -1;
}

function generateNetwork() {
  let playerProfileStats = achievementsStats["player"]["profile"] || {};

  var playerRank = playerProfileStats["tag"];
  var playerRankCute = cuteRank(playerRank, 1);

  document.getElementById("card-rank").classList.add("rank-" + playerRankCute[0]); // Changes the rank to the player's rank colour
  document.getElementById("card-name").style.color = `var(--mc` + playerRankCute[0] + `)`; // Changes the player's name to the player's rank colour
  updateElement("header-name", cuteRank(playerProfileStats["tagged_name"], 0), true);

  updateElement("card-uuid", playerProfileStats["uuid"]);
  updateElement("card-ranktext", playerRankCute[1], true); // Adds player's rank

  if (playerRankCute[1] == "") {
    document.getElementById("card-rank").style.display = "none";
  }

  updateElement("card-name", deformatName(playerProfileStats["tagged_name"]));

  let playerBadge = achievementsStats["player"]["badge"] || "NONE";
  checkBadge(playerBadge);

  const quickModeGames = [
    { id: "overall", name: getTranslation(["games", "overall"]), minecraftId: "diamond" },
    { id: "legacy", name: getTranslation(["games", "legacy"]), minecraftId: "diamond_block" },
    { id: "general", name: getTranslation(["games", "general"]), minecraftId: "book" },

    { id: "arcade", name: getTranslation(["games", "arcade"]), minecraftId: "slime_ball" },
    { id: "arena", name: getTranslation(["games", "arena"]), minecraftId: "blaze_powder" },
    { id: "bedwars", name: getTranslation(["games", "bedwars"]), minecraftId: "red_bed" },
    { id: "blitz", name: getTranslation(["games", "blitz"]), minecraftId: "diamond_sword" },
    { id: "buildbattle", name: getTranslation(["games", "buildbattle"]), minecraftId: "crafting_table" },
    { id: "copsandcrims", name: getTranslation(["games", "copsandcrims"]), minecraftId: "iron_bars" },
    { id: "duels", name: getTranslation(["games", "duels"]), minecraftId: "fishing_rod" },
    { id: "housing", name: getTranslation(["games", "housing"]), minecraftId: "dark_oak_door" },
    { id: "megawalls", name: getTranslation(["games", "megawalls"]), minecraftId: "soul_sand" },
    { id: "murdermystery", name: getTranslation(["games", "murdermystery"]), minecraftId: "bow" },
    { id: "paintball", name: getTranslation(["games", "paintball"]), minecraftId: "snowball" },
    { id: "pit", name: getTranslation(["games", "pit"]), minecraftId: "dirt" },
    { id: "quakecraft", name: getTranslation(["games", "quakecraft"]), minecraftId: "firework_rocket" },
    { id: "skyblock", name: getTranslation(["games", "skyblock"]), minecraftId: "head_skyblock" },
    { id: "skywars", name: getTranslation(["games", "skywars"]), minecraftId: "ender_eye" },
    { id: "smashheroes", name: getTranslation(["games", "smashheroes"]), minecraftId: "head_smashheroes" },
    { id: "speeduhc", name: getTranslation(["games", "speeduhc"]), minecraftId: "golden_carrot" },
    { id: "tkr", name: getTranslation(["games", "tkr"]), minecraftId: "minecart" },
    { id: "tntgames", name: getTranslation(["games", "tntgames"]), minecraftId: "tnt" },
    { id: "uhc", name: getTranslation(["games", "uhc"]), minecraftId: "golden_apple" },
    { id: "vampirez", name: getTranslation(["games", "vampirez"]), minecraftId: "wither_skeleton_skull" },
    { id: "walls", name: getTranslation(["games", "walls"]), minecraftId: "sand" },
    { id: "warlords", name: getTranslation(["games", "warlords"]), minecraftId: "stone_axe" },
    { id: "woolgames", name: getTranslation(["games", "woolgames"]), minecraftId: "white_wool" },

    { id: "easter", name: getTranslation(["games", "easter"]), minecraftId: "head_easter" },
    { id: "halloween", name: getTranslation(["games", "halloween"]), minecraftId: "head_halloween" },
    { id: "holiday", name: getTranslation(["games", "holiday"]), minecraftId: "head_seasonal" },
    { id: "summer", name: getTranslation(["games", "summer"]), minecraftId: "head_summer" },

    { id: "secret", name: getTranslation(["games", "secret"]), minecraftId: "barrier" },
    //{ id: "stats", name: getTranslation(["games", "modes", "all", "stats"]) },
    //{ id: "quests", name: getTranslation(["quests", "quests"]), minecraftId: "writable_book" },
  ];

  const gameSwitchMobileContainer = document.getElementById("game-switch-mobile");
  const gameSwitchContainer = document.getElementById("game-switch");
  const otherSwitchContainer = document.getElementById("other-switch");
  const seasonalSwitchContainer = document.getElementById("seasonal-switch");

  let headerObjectTypes = {
    games: ["overall", "legacy", "general"],
    other: ["secret", "stats", "quests", "guild"],
    seasonal: ["easter", "halloween", "holiday", "summer"],
    special: ["stats", "quests", "guild"],
  };

  quickModeGames.forEach((game, index) => {
    let container;

    if (headerObjectTypes["special"].includes(game.id)) {
      container = document.createElement("a");
      container.setAttribute("target", "_blank");

      /*if (game.id == "stats") { // not in backend api
        container.setAttribute("href", `/achievements/${achievementsStats["profile"]["uuid"]}`);
      } else if (game.id == "quests") {
        container.setAttribute("href", `/quests/${achievementsStats["profile"]["uuid"]}`);
      }*/
    } else {
      container = document.createElement("div");
      container.setAttribute("onclick", `switchStats('${game.id}')`);
      container.setAttribute("data-game", game.id);
    }

    container.setAttribute("aria-label", `View ${game.name} stats`);

    let span = document.createElement("span");
    span.className = "logo-container";

    let img = document.createElement("img");
    img.src = `/img/icon/minecraft/${game.minecraftId}.${imageFileType}`;

    img.alt = "";
    img.classList.add("social-media-dropdown", "icon");

    span.appendChild(img);
    container.appendChild(span);

    let text = document.createTextNode(game.name);
    container.appendChild(text);

    if (headerObjectTypes["special"].includes(game.id)) {
      let externalIcon = document.createElement("img");
      externalIcon.src = "/img/svg/external.svg";
      externalIcon.alt = "";
      externalIcon.classList.add("verytinyicon");
      externalIcon.classList.add("mleft-5");
      container.appendChild(externalIcon);
    }

    if (headerObjectTypes["games"].includes(game.id)) {
      gameSwitchMobileContainer.appendChild(container);
    } else if (headerObjectTypes["other"].includes(game.id)) {
      otherSwitchContainer.appendChild(container);
    } else if (headerObjectTypes["seasonal"].includes(game.id)) {
      seasonalSwitchContainer.appendChild(container);
    } else {
      gameSwitchContainer.appendChild(container);
    }
  });
}

function getOneTimeStats(fullName) {
  let underscoreIndex = fullName.indexOf("_");

  let gameName = demodernifyGameName(fullName.substring(0, underscoreIndex));
  let achievementName = fullName.substring(underscoreIndex + 1).toUpperCase();

  let gameStats = globalAchievements[gameName] || {};
  let oneTimeAchievementStats = gameStats["one_time"] || {};
  let achievementStats = oneTimeAchievementStats[achievementName] || {};

  let oneTimeAchievementObject = {
    game: gameName,

    name: achievementStats["name"] || "",
    description: achievementStats["description"] || "",
    points: achievementStats["points"] || 0,
    gamePercentUnlocked: achievementStats["gamePercentUnlocked"] || 0,
    globalPercentUnlocked: achievementStats["globalPercentUnlocked"] || 0,
    legacy: achievementStats["legacy"] || false,
    secret: achievementStats["secret"] || false,
  };

  oneTimeAchievementObject["unlocked"] = playerOneTimeAchievements.includes(fullName) || false;

  return oneTimeAchievementObject;
}

function getTieredStats(fullName) {
  let underscoreIndex = fullName.indexOf("_");
  let gameName = demodernifyGameName(fullName.substring(0, underscoreIndex));
  let achievementName = fullName.substring(underscoreIndex + 1).toUpperCase();

  let gameStats = globalAchievements[gameName] || {};
  let tieredAchievementStats = gameStats["tiered"] || {};
  let achievementStats = tieredAchievementStats[achievementName] || {};

  let tieredAchievementsObject = {
    game: gameName,

    name: achievementStats["name"] || "",
    description: achievementStats["description"] || "",
    tiers: achievementStats["tiers"] || {},
    amount: getValue(achievementsStats, ["player", "achievements", fullName]) || 0,
    legacy: achievementStats["legacy"] || false,
  };

  // determine highest unlocked tier based on amount
  let highestUnlockedTier = 0;
  let unlockedPoints = 0;
  let totalPoints = 0;
  for (let tier of tieredAchievementsObject["tiers"]) {
    if (tieredAchievementsObject["amount"] >= tier["amount"]) {
      highestUnlockedTier += 1;
      unlockedPoints += tier["points"];
    }

    totalPoints += tier["points"];
  }

  tieredAchievementsObject["total_points"] = totalPoints;
  tieredAchievementsObject["total_tiers"] = tieredAchievementsObject["tiers"].length;
  tieredAchievementsObject["unlocked_points"] = unlockedPoints;
  tieredAchievementsObject["unlocked_tiers"] = highestUnlockedTier;

  // determine if highest unlocked tier is the last tier
  if (highestUnlockedTier == tieredAchievementsObject["tiers"].length) {
    tieredAchievementsObject["unlocked"] = true;
  } else {
    tieredAchievementsObject["unlocked"] = false;
  }

  return tieredAchievementsObject;
}

function getAllAchievements(game) {
  let allAchievements = {};
  //let legacyAchievements = {};
  allAchievements["tiered"] = {};
  allAchievements["one_time"] = {};

  //legacyAchievements["tiered"] = {};
  //legacyAchievements["one_time"] = {};

  allAchievements["tier"] = getGameTier(game);

  game = demodernifyGameName(game);

  let gameStats = globalAchievements[game] || {};
  let oneTimeAchievementStats = gameStats["one_time"] || {};
  let tieredAchievementStats = gameStats["tiered"] || {};

  for (let achievement in oneTimeAchievementStats) {
    let selectedAchievement = getOneTimeStats(game + "_" + achievement.toLowerCase());

    if (selectedAchievement["legacy"] == true) {
      //legacyAchievements["one_time"][achievement.toLowerCase()] = selectedAchievement;
      achievementsDatabase["legacy"]["one_time"][achievement.toLowerCase()] = selectedAchievement;
      //console.log(JSON.stringify(achievementsDatabase["legacy"]));
    } else {
      allAchievements["one_time"][achievement.toLowerCase()] = selectedAchievement;

      if (selectedAchievement["secret"] == true) {

        achievementsDatabase["secret"]["one_time"][game + "_" + achievement.toLowerCase()] = selectedAchievement;
      }
    }


  }

  for (let achievement in tieredAchievementStats) {
    let selectedAchievement = getTieredStats(game + "_" + achievement.toLowerCase());

    if (selectedAchievement["legacy"] == true) {
      //legacyAchievements["tiered"][achievement.toLowerCase()] = selectedAchievement;
      achievementsDatabase["legacy"]["tiered"][achievement.toLowerCase()] = selectedAchievement;
    } else {
      allAchievements["tiered"][achievement.toLowerCase()] = selectedAchievement;
    }
  }

  return allAchievements;
}

/*
 * Counts the number of unlocked achievements in a game
 * @param {string} game - The game to count the unlocked achievements for
 * @returns {number} The number of unlocked achievements
 */
function gameProgress(game) {
  let allAchievementsGame = achievementsDatabase[game];
  let unlockedAchievements = 0;
  let totalAchievements = 0;

  let unlockedPoints = 0;
  let totalPoints = 0;

  for (let achievement in allAchievementsGame["one_time"]) {
    let specificAchievementPoints = und(allAchievementsGame["one_time"][achievement]["points"]);

    if (allAchievementsGame["one_time"][achievement]["unlocked"]) {
      unlockedAchievements += 1;
      unlockedPoints += specificAchievementPoints;
      if (game != "legacy" && game != "secret") {
        globalAchievementStats["player"]["achievements"] += 1;
        globalAchievementStats["player"]["points"] += specificAchievementPoints;
      }
    } else {
      if (game != "legacy" && game != "secret") {
        lockedFormattedOneTimeAchievements.push([
          `${game}_${achievement}`,
          {
            game: game,
            name: allAchievementsGame["one_time"][achievement]["name"],
            description: allAchievementsGame["one_time"][achievement]["description"],
            points: specificAchievementPoints,
            max_unlocked: Math.max(und(allAchievementsGame["one_time"][achievement]["globalPercentUnlocked"]), und(allAchievementsGame["one_time"][achievement]["gamePercentUnlocked"])),
          },
        ]);
      }
    }

    totalAchievements += 1;
    totalPoints += specificAchievementPoints;
    if (game != "legacy" && game != "secret") {
      globalAchievementStats["total"]["achievements"] += 1;
      globalAchievementStats["total"]["points"] += specificAchievementPoints;
    }
  }

  for (let achievement in allAchievementsGame["tiered"]) {
    let specificAchievement = allAchievementsGame["tiered"][achievement];

    let achievementUnlockedTiers = und(specificAchievement["unlocked_tiers"]);
    let achievementUnlockedPoints = und(specificAchievement["unlocked_points"]);
    let achievementTotalPoints = und(specificAchievement["total_points"]);
    let achievementTotalTiers = und(specificAchievement["total_tiers"]);

    unlockedAchievements += achievementUnlockedTiers;

    totalAchievements += achievementTotalTiers;

    unlockedPoints += achievementUnlockedPoints;

    totalPoints += achievementTotalPoints;

    if (game != "legacy" && game != "secret") {
      globalAchievementStats["player"]["achievements"] += achievementUnlockedTiers;
      globalAchievementStats["total"]["achievements"] += achievementTotalTiers;
      globalAchievementStats["player"]["points"] += achievementUnlockedPoints;
      globalAchievementStats["total"]["points"] += achievementTotalPoints;

      for (let a = 0; a < specificAchievement["tiers"].length; a++) {
        playerFormattedTierAchievements.push([
          `${game}_${achievement}-${a}`,
          {
            game: game,
            name: specificAchievement["name"] + " " + convertToRoman(a + 1),
            description: specificAchievement["description"],
            points: specificAchievement["tiers"][a]["points"],
            requirement: specificAchievement["tiers"][a]["amount"],
            current: specificAchievement["amount"],
            progress: specificAchievement["amount"] / specificAchievement["tiers"][a]["amount"],
          },
        ]);
      }
    }
  }

  if (unlockedAchievements == totalAchievements && game != "secret") {
    maxedGames.push(game);
  }

  allAchievementsGame["unlocked_achievements"] = unlockedAchievements;
  allAchievementsGame["total_achievements"] = totalAchievements;
  allAchievementsGame["unlocked_points"] = unlockedPoints;
  allAchievementsGame["total_points"] = totalPoints;

  return {
    unlocked_achievements: unlockedAchievements,
    total_achievements: totalAchievements,
    unlocked_points: unlockedPoints,
    total_points: totalPoints,
  };
}

function updateHeaderGameProgress() {
  let gameDropdownChildren = document.querySelectorAll(".dropdown-games div");

  for (let a = 0; a < gameDropdownChildren.length; a++) {
    let dropdownItem = gameDropdownChildren[a];
    let game = dropdownItem.getAttribute("data-game");

    let achievementsDatabaseGame = achievementsDatabase[game];
    if (achievementsDatabaseGame == undefined) continue;

    let gameProgress = und(achievementsDatabaseGame["unlocked_achievements"] / achievementsDatabaseGame["total_achievements"]) * 100;

    let badge = document.createElement("span");
    badge.classList.add("dropdown-item-badge");

    if (gameProgress != 100) {
      let badgeColor = `color-mix(in srgb, var(--accent) ${gameProgress}%, white)`;
      let badgeColorTransparent = `color-mix(in srgb, var(--accent) ${gameProgress}%, #ffffff80)`;

      badge.style.background = `linear-gradient(108deg, ${badgeColor} ${gameProgress}%, ${badgeColorTransparent} ${gameProgress}%, ${badgeColorTransparent} 100%)`;
      badge.style.border = `1px solid color-mix(in srgb, var(--accent) ${gameProgress}%, white)`;
    } else {
      badge.style.background = `linear-gradient(108deg, #cec2a1 33%, #feeebe 66%, #775730 100%)`;
      badge.style.border = `1px solid #cfc09f`;
    }

    badge.textContent = Math.floor(gameProgress) + "%";

    dropdownItem.appendChild(badge);
  }
}

function updateClosestTiered() {
  document.getElementById("achievements-closest-tiers").innerHTML = "";

  // Removing achievements with progress >= 1
  let filteredPlayerFormattedTierAchievements = playerFormattedTierAchievements.filter((achievement) => achievement[1].progress < 1);
  filteredPlayerFormattedTierAchievements = filteredPlayerFormattedTierAchievements.filter((achievement) => !filters.includes(achievement[1]["game"]));

  // Sorting the remaining achievements by progress value, highest to lowest
  filteredPlayerFormattedTierAchievements.sort((a, b) => b[1].progress - a[1].progress);

  let maximumIndex = Math.min(50, filteredPlayerFormattedTierAchievements.length);
  for (let i = 0; i < maximumIndex; i++) {
    let achievement = filteredPlayerFormattedTierAchievements[i];
    let achievementElement = formatTieredAchievement(achievement, "closestTiered");
    document.getElementById("achievements-closest-tiers").appendChild(achievementElement);
  }

  if (filteredPlayerFormattedTierAchievements.length == 0) {
    document.getElementById("achievements-closest-tiers").innerHTML = `<p class="no-achievements">${getTranslation("achievements.none_matching")}</p>`;
  }
}

function updateEasiestOneTime() {
  document.getElementById("achievements-easiest-uncompleted").innerHTML = "";

  let filteredLockedFormattedOneTimeAchievements = lockedFormattedOneTimeAchievements.filter((achievement) => !filters.includes(achievement[1]["game"]));
  filteredLockedFormattedOneTimeAchievements.sort((a, b) => b[1]["max_unlocked"] - a[1]["max_unlocked"]);

  let maximumIndex = Math.min(50, filteredLockedFormattedOneTimeAchievements.length);
  for (let i = 0; i < maximumIndex; i++) {
    let achievement = filteredLockedFormattedOneTimeAchievements[i];
    let achievementElement = formatTieredAchievement(achievement, "easiestUncompleted");
    document.getElementById("achievements-easiest-uncompleted").appendChild(achievementElement);
  }

  if (filteredLockedFormattedOneTimeAchievements.length == 0) {
    document.getElementById("achievements-easiest-uncompleted").innerHTML = `<p class="no-achievements">${getTranslation("achievements.none_matching")}</p>`;
  }
}

function updateRecentlyCompleted() {
  document.getElementById("achievements-recently-completed").innerHTML = "";

  let filteredPlayerOneTimeAchievements = playerOneTimeAchievements.filter((achievement) => !filters.includes(modernifyGameName(achievement.replace(/_.*/g, ""))));
  let recentAchievements = filteredPlayerOneTimeAchievements.reverse().slice(0, 50);

  for (let a = 0; a < recentAchievements.length; a++) {
    let achievement = getOneTimeStats(recentAchievements[a]);
    let achievementElement = formatTieredAchievement(achievement, "recentlyCompleted");
    document.getElementById("achievements-recently-completed").appendChild(achievementElement);
  }

  if (recentAchievements.length == 0) {
    document.getElementById("achievements-recently-completed").innerHTML = `<p class="no-achievements">${getTranslation("achievements.none_matching")}</p>`;
  }
}

let gameIcons = {
  general: "book",

  arcade: "slime_ball",
  arena: "blaze_powder",
  bedwars: "red_bed",
  blitz: "diamond_sword",
  buildbattle: "crafting_table",
  copsandcrims: "iron_bars",
  duels: "fishing_rod",
  housing: "dark_oak_door",
  megawalls: "soul_sand",
  murdermystery: "bow",
  paintball: "snowball",
  pit: "dirt",
  quakecraft: "firework_rocket",
  skyblock: "head_skyblock",
  skywars: "ender_eye",
  smashheroes: "head_smashheroes",
  speeduhc: "golden_carrot",
  tkr: "minecart",
  tntgames: "tnt",
  uhc: "golden_apple",
  vampirez: "wither_skeleton_skull",
  walls: "sand",
  warlords: "stone_axe",
  woolgames: "white_wool",
  easter: "head_easter",
  halloween: "head_halloween",
  holiday: "head_seasonal",
  summer: "head_summer",

  secret: "barrier",

  crazywalls: "head_crazywalls",
  skyclash: "fire_charge",
};

function formatTieredAchievement(achievementObject, type) {
  let secondColumnTemplates = {
    closestTiered: `
    <span data-i="tier-current" class="w700"></span> / <span data-i="tier-requirement"></span> (<span data-i="tier-percentage"></span>)
  `,
    easiestUncompleted: `
    <span data-i="tier-percentage" class="tabular"></span>
    `,
    recentlyCompleted: `
    <span data-i="tier-points" class="tabular"></span>
    `,
  };

  let template = `
    <div class="row-header">
      <div class="achievement column achievement-icon-container">
        <img data-i="achievement-icon" class="icon smallicon" alt="">
      </div>
      <div class="achievement column">
        <span class="w700" data-i="achievement-game"></span> – <span data-i="achievement-name"></span><p></p>
      </div>
      <p class="column">
        ${secondColumnTemplates[type]}
      </p>
    </div>
    <div class="row-content">
      <div class="achievement-description" data-i="tier-description" style="font-style: italic; opacity: 0.8; margin: 0px 10px 10px 10px"></div>
    </div>`;

  let row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = template;

  if (type == "closestTiered" || type == "easiestUncompleted") {
    achievementObject = achievementObject[1];
  } else {
    achievementObject["game"] = modernifyGameName(achievementObject["game"]);
  }

  let icon = row.querySelector("[data-i='achievement-icon']");
  icon.src = `/img/icon/minecraft/${gameIcons[achievementObject["game"]]}.${imageFileType}`;

  updateTag(row, "achievement-game", getTranslation(["games", achievementObject["game"]]));
  updateTag(row, "achievement-name", achievementObject["name"]);
  updateTag(row, "tier-description", achievementObject["description"].replace("%%value%%", checkAndFormat(achievementObject["requirement"])));

  if (type == "closestTiered") {
    updateTag(row, "tier-current", checkAndFormat(achievementObject["current"]));
    updateTag(row, "tier-requirement", simplifyNumber(achievementObject["requirement"]));
    updateTag(row, "tier-percentage", checkAndFormat(Math.floor(achievementObject["progress"] * 1000) / 10, 1) + "%");
  } else if (type == "easiestUncompleted") {
    updateTag(row, "tier-percentage", checkAndFormat(achievementObject["max_unlocked"], 2) + "%");
  } else if (type == "recentlyCompleted") {
    updateTag(row, "tier-points", `${checkAndFormat(achievementObject["points"])}`);
  }

  return row;
}

function replaceAchievementPlaceholder(string, value, tiers) {
  let highestTier = 0;
  for (let tier of tiers) {
    if (value >= tier["amount"]) {
      highestTier += 1;
    } else {
      break;
    }
  }

  if (highestTier == tiers.length) {
    return string.replace("%%value%%", checkAndFormat(value) + " / " + checkAndFormat(tiers[highestTier - 1]["amount"]));
  } else {
    return string.replace("%%value%%", checkAndFormat(value) + " / " + checkAndFormat(tiers[highestTier]["amount"]));
  }
}

function sortTable(game, type) {
  let table = document.getElementById(game + "-" + type);
}

// Generates page, gets stats, inserts into DOM
function generateAchievementPage(game) {
  let template = DOMPurify.sanitize(`

      <div class="chip-container">
        <div class="chip-small but-big">
          <div class="chip-small-background-filter"></div>
          <div class="chip-small-title flex-two-item-basic">${getTranslation(`games.${game}`)}<img src="/img/svg/crown.svg" class="crown" data-i="maxed"></div>
          <div class="chip-small-container">
            <p class="margin10">
              <span>${getTranslation("statistics.achievement_points")}</span> <span class="statistic" data-i="achievement-points"><span class="mc">Unknown</span></span> / <span data-i="total-points"><span class="mc">Unknown</span></span>
            </p>
            <div class="progress-bar">
              <span class="progress-number" data-i="achievement-points-progress-number"><span class="mc">Unknown</span></span>
              <div class="progress" style="width: 0%;" data-i="achievement-points-progress-bar"></div>
            </div>
            <p class="margin10">
              <span>${getTranslation("achievements.achievements")}</span> <span class="statistic" data-i="achievements"><span class="mc">Unknown</span></span> / <span data-i="total-achievements"><span class="mc">Unknown</span></span>
            </p>
            <div class="progress-bar">
              <span class="progress-number" data-i="achievements-progress-number"><span class="mc">Unknown</span></span>
              <div class="progress" style="width: 0%;" data-i="achievements-progress-bar"></div>
            </div>
          </div>
        </div>
        <div class="chip-small but-big no-overflow" data-i="tiered">
          <div class="chip-small-top">
            <p class="chip-small-title">${getTranslation(`achievements.tiered`)}</p>
            <span class="flex-two-item">
              <div class="dropdown">
                <p class="dropdown-button chip-dropdown-button"><span>${getTranslation("achievements.all")}</span></p>
                <div class="dropdown-content unloaded dropdown-chip" data-i="filter-tiered" data-game="achievements">

                <div class="dropdown-item selected" data-item="all"><span class="dropdown-item-text">${getTranslation("achievements.all")}</span></div>
                <div class="dropdown-item" data-item="locked"><span class="dropdown-item-text">${getTranslation("achievements.locked")}</span></div>
                <div class="dropdown-item" data-item="unlocked"><span class="dropdown-item-text">${getTranslation("achievements.unlocked")}</span></div>
              </div>
              </div>
            </span>
          </div>
          <div class="list achievements-container tiered-container" data-i="tiered-container">

            <div class="row header-row">
              <div class="row-header">
                <div class="achievement column pointer" data-i="sort-game_tiered">${getTranslation(`statistics.game`)}</div>
                <div class="achievement column pointer" data-i="sort-name_tiered">${getTranslation(`statistics.name`)}</div>
                <div class="column tiers pointer" data-i="sort-tiers">${getTranslation("achievements.tiers")}</div>
              </div>
            </div>

          </div>
        </div>
        <div class="chip-small but-big no-overflow" data-i="one-time">
          <div class="chip-small-top">
            <p class="chip-small-title">${getTranslation(`achievements.one_time`)}</p>
            <span class="flex-two-item">
              <div class="dropdown">
                <p class="dropdown-button chip-dropdown-button"><span>${getTranslation("achievements.all")}</span></p>
                <div class="dropdown-content unloaded dropdown-chip" data-i="filter-one-time" data-game="achievements">

                <div class="dropdown-item selected" data-item="all"><span class="dropdown-item-text">${getTranslation("achievements.all")}</span></div>
                <div class="dropdown-item" data-item="locked"><span class="dropdown-item-text">${getTranslation("achievements.locked")}</span></div>
                <div class="dropdown-item" data-item="unlocked"><span class="dropdown-item-text">${getTranslation("achievements.unlocked")}</span></div>
              </div>
              </div>
            </span>
          </div>
          <div class="list achievements-container one-time-container" data-i="one-time-container">

            <div class="row header-row">
              <div class="row-header">
                <div class="achievement column faded transitionable-small pointer" data-i="sort-game_one_time">${getTranslation(`statistics.game`)}</div>
                <div class="achievement column faded transitionable-small pointer" data-i="sort-name_one_time">${getTranslation(`statistics.name`)}</div>
                <p class="column tabular faded transitionable-small pointer" data-i="sort-points">
                  <span class="tooltip pointer">
                    <img class="smallicon" src="/img/svg/trophy.svg">
                    <span class="tooltiptext">${getTranslation("statistics.achievement_points")}</span>
                  </span>
                </p>
                <p class="column value-percentage tabular faded transitionable-small" data-i="sort-game">
                  <span class="tooltip pointer">
                    <img class="smallicon" src="/img/svg/console.svg">
                    <span class="tooltiptext">${insertPlaceholders(getTranslation("achievements.game"), {
                      game: getTranslation(`games.${game}`),
                    })}</span>
                  </span>
                </p>
                <p class="column value-percentage tabular faded transitionable-small" data-i="sort-global">
                  <span class="tooltip pointer">
                    <img class="smallicon" src="/img/svg/earth.svg">
                    <span class="tooltiptext">${getTranslation("achievements.global")}</span>
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>`);

  let gameElement = document.createElement("div");
  // <div class="flex-container unloaded minigame-flex-container" data-i="flex-container" id="flex-container-TODO">
  gameElement.innerHTML = template;
  gameElement.classList.add("flex-container");
  gameElement.classList.add("unloaded");
  gameElement.classList.add("minigame-flex-container");
  gameElement.setAttribute("id", "flex-container-" + game);

  gameElement.querySelector("[data-i='filter-tiered']").setAttribute("data-modify", `${game}-tiered`);
  gameElement.querySelector("[data-i='filter-one-time']").setAttribute("data-modify", `${game}-one-time`);

  gameElement.querySelector("[data-i='sort-game_one_time']").setAttribute("onclick", `sortData("${game}", "one-time", "game_one_time")`);

  gameElement.querySelector("[data-i='sort-name_one_time']").setAttribute("onclick", `sortData("${game}", "one-time", "name_one_time")`);
  gameElement.querySelector("[data-i='sort-points']").setAttribute("onclick", `sortData("${game}", "one-time", "points")`);
  gameElement.querySelector("[data-i='sort-game']").setAttribute("onclick", `sortData("${game}", "one-time", "game")`);
  gameElement.querySelector("[data-i='sort-global']").setAttribute("onclick", `sortData("${game}", "one-time", "global")`);

  gameElement.querySelector("[data-i='sort-game_tiered']").setAttribute("onclick", `sortData("${game}", "tiered", "game_tiered")`);
  gameElement.querySelector("[data-i='sort-name_tiered']").setAttribute("onclick", `sortData("${game}", "tiered", "name_tiered")`);
  gameElement.querySelector("[data-i='sort-tiers']").setAttribute("onclick", `sortData("${game}", "tiered", "tiers")`);

  let gameStats = gameProgress(game);

  updateTag(gameElement, "achievement-points", checkAndFormat(gameStats["unlocked_points"]));
  updateTag(gameElement, "achievements", checkAndFormat(gameStats["unlocked_achievements"]));
  updateTag(gameElement, "total-points", checkAndFormat(gameStats["total_points"]));
  updateTag(gameElement, "total-achievements", checkAndFormat(gameStats["total_achievements"]));

  if (gameStats["unlocked_achievements"] == gameStats["total_achievements"]) {
    gameElement.querySelector("[data-i='maxed']").style.display = "inline";
  }

  let pointsPercentage = gameStats["unlocked_points"] / gameStats["total_points"];
  updateTag(gameElement, "achievement-points-progress-number", Math.floor(pointsPercentage * 100) + "%");
  gameElement.querySelector("[data-i='achievement-points-progress-bar']").style.width = pointsPercentage * 100 + "%";

  let achievementsPercentage = gameStats["unlocked_achievements"] / gameStats["total_achievements"];
  updateTag(gameElement, "achievements-progress-number", Math.floor(achievementsPercentage * 100) + "%");
  gameElement.querySelector("[data-i='achievements-progress-bar']").style.width = achievementsPercentage * 100 + "%";

  document.getElementById("games").appendChild(gameElement);

  let allAchievements = achievementsDatabase[game];
  let tieredContainer = gameElement.querySelector("[data-i='tiered-container']");
  tieredContainer.id = game + "-tiered";

  let tieredAchievementTemplate = `
    <div class="achievement column flex-two-item-basic flex-display-text">
      <img data-i="achievement-icon" class="icon smallicon">
      <span class="w700" data-i="achievement-game"></span>
    </div>
    <div class="achievement column">
      <span class="w700" data-i="achievement-name"></span> – <span data-i="achievement-description"></span></p>
    </div>
    <div class="column tiers">
    </div>
    `;

  let tierTemplate = `
    <div class="tier-container">
      <div data-i="tier-quantity" class="tier-quantity"></div>
      <div data-i="tier-points" class="tier-points"></div>
    </div>
`;

  if (game == "legacy") {
    tieredContainer.classList.add("game-legacy");
  }

  if (Object.keys(allAchievements["tiered"]).length == 0) {
    gameElement.querySelector("[data-i='tiered']").style.display = "none";
  } else {
    for (let achievement in allAchievements["tiered"]) {
      let achievementStats = allAchievements["tiered"][achievement];

      let row = document.createElement("div");
      row.classList.add("row");

      let achievementElement = document.createElement("div");
      achievementElement.classList.add("row-header");
      achievementElement.innerHTML = tieredAchievementTemplate;

      for (let a = 0; a < achievementStats["tiers"].length; a++) {
        let tier = document.createElement("div");
        tier.innerHTML = tierTemplate;
        tier.classList.add("tier");

        let tierStats = achievementStats["tiers"][a];

        if (achievementStats["unlocked_tiers"] > a) {
          tier.classList.add("unlocked");
        } else if (achievementStats["unlocked_tiers"] < a) {
          tier.classList.add("locked");
        }

        updateTag(tier, "tier-quantity", simplifyNumber(tierStats["amount"]));
        updateTag(tier, "tier-points", `+${checkAndFormat(tierStats["points"])}`);

        achievementElement.querySelector(".tiers").appendChild(tier);
      }

      if (game == "legacy") {
        updateTag(achievementElement, "achievement-game", getTranslation(`games.${modernifyGameName(achievementStats["game"])}`));

        let icon = achievementElement.querySelector("[data-i='achievement-icon']");
        icon.src = `/img/icon/minecraft/${gameIcons[modernifyGameName(achievementStats["game"])]}.${imageFileType}`;

        row.setAttribute("data-game_tiered", getTranslation(`games.${modernifyGameName(achievementStats["game"])}`));
      }

      if (achievementStats["unlocked"]) {
        row.classList.add("unlocked");
      } else {
        row.classList.add("locked");
      }

      let formattedAchievementDescription = replaceAchievementPlaceholder(achievementStats["description"], achievementStats["amount"], achievementStats["tiers"]);

      updateTag(achievementElement, "achievement-name", achievementStats["name"]);
      updateTag(achievementElement, "achievement-description", formattedAchievementDescription);

      updateAllTags(achievementElement, "achievement-points", checkAndFormat(achievementStats["points"]));
      updateAllTags(achievementElement, "achievement-percentage-unlocked-game", checkAndFormat(achievementStats["gamePercentUnlocked"], 2) + "%");
      updateAllTags(achievementElement, "achievement-percentage-unlocked-global", checkAndFormat(achievementStats["globalPercentUnlocked"], 2) + "%");

      row.setAttribute("data-name_tiered", achievementStats["name"]);
      row.setAttribute("data-tiers", achievementStats["unlocked_tiers"]);

      row.appendChild(achievementElement);

      tieredContainer.appendChild(row);
    }
  }

  let oneTimeAchievementTemplate = `
    <div class="achievement column flex-two-item-basic flex-display-text">
      <img data-i="achievement-icon" class="icon smallicon">
      <span class="w700" data-i="achievement-game"></span>
    </div>
    </div>
    <div class="achievement column">
      <span data-i="achievement-check"></span><span class="w700" data-i="achievement-name"></span> – <span data-i="achievement-description"></span></p>
    </div>
    <p class="column tabular">
      <span data-i="achievement-points"></span>
    </p>
    <p class="column value-percentage tabular">
      <span data-i="achievement-percentage-unlocked-game"></span>
    </p>
    <p class="column value-percentage tabular">
      <span data-i="achievement-percentage-unlocked-global"></span>
    </p>
    <p class="column tabular">
      <span data-i="achievement-points"></span> <span style="opacity: 50%">pt</span><br>
      <span data-i="achievement-percentage-unlocked-game"></span> <span style="opacity: 50%">game</span><br>
      <span data-i="achievement-percentage-unlocked-global"></span> <span style="opacity: 50%">global</span></span>
    </p>`;

  let oneTimeContainer = gameElement.querySelector("[data-i='one-time-container']");
  oneTimeContainer.id = game + "-one-time";

  let generalGames = ["general", "halloween", "holiday", "summer", "easter"];
  if (generalGames.includes(game)) {
    oneTimeContainer.classList.add("game-general");
  }

  if (game == "legacy") {
    oneTimeContainer.classList.add("game-legacy");
  }

  if (game == "secret") {
    oneTimeContainer.classList.add("game-secret");
  }

  for (let achievement in allAchievements["one_time"]) {
    let achievementStats = allAchievements["one_time"][achievement];

    let row = document.createElement("div");
    row.classList.add("row");

    let achievementElement = document.createElement("div");
    achievementElement.classList.add("row-header");
    achievementElement.innerHTML = oneTimeAchievementTemplate;

    let achievementCheck = achievementElement.querySelector("[data-i='achievement-check']");

    if (achievementStats["unlocked"]) {
      row.classList.add("unlocked");
      achievementCheck.textContent = getTranslation("achievements.check");
      achievementCheck.classList.add("achievement-check");
    } else {
      row.classList.add("locked");
      achievementCheck.textContent = getTranslation("achievements.cross");
      achievementCheck.classList.add("achievement-cross");
    }

    achievementCheck.style.visibility = "visible";

    if (game == "legacy" || game == "secret") {
      updateTag(achievementElement, "achievement-game", getTranslation(`games.${modernifyGameName(achievementStats["game"])}`));

      let icon = achievementElement.querySelector("[data-i='achievement-icon']");
      icon.src = `/img/icon/minecraft/${gameIcons[modernifyGameName(achievementStats["game"])]}.${imageFileType}`;

      row.setAttribute("data-game_one_time", getTranslation(`games.${modernifyGameName(achievementStats["game"])}`));
    }
    updateTag(achievementElement, "achievement-name", achievementStats["name"]);

    if (achievementStats["description"] == "???") {
      if (game == "secret") {
        achievementElement.querySelector("[data-i='achievement-description']").textContent = getSecretAchievement(`${achievement}`);
      } else {
        let secretAchievementTemplate = `<label class="spoiler"><input type="checkbox"><span class="spoiler-text" data-i="secret-achievement-text"></span></label>`;

        achievementElement.querySelector("[data-i='achievement-description']").innerHTML = secretAchievementTemplate;
        achievementElement.querySelector("[data-i='secret-achievement-text']").textContent = getSecretAchievement(`${demodernifyGameName(game)}_${achievement}`);
      }
    } else {
      updateTag(achievementElement, "achievement-description", achievementStats["description"]);
    }

    updateAllTags(achievementElement, "achievement-points", checkAndFormat(achievementStats["points"]));
    updateAllTags(achievementElement, "achievement-percentage-unlocked-game", checkAndFormat(achievementStats["gamePercentUnlocked"], 2) + "%");
    updateAllTags(achievementElement, "achievement-percentage-unlocked-global", checkAndFormat(achievementStats["globalPercentUnlocked"], 2) + "%");

    row.setAttribute("data-name_one_time", achievementStats["name"]);
    row.setAttribute("data-points", achievementStats["points"]);
    row.setAttribute("data-game", achievementStats["gamePercentUnlocked"]);
    row.setAttribute("data-global", achievementStats["globalPercentUnlocked"]);

    row.appendChild(achievementElement);

    oneTimeContainer.appendChild(row);
  }
}

function compareAttributes(attribute, reverse = false) {
  let reverseMultiplier = reverse ? -1 : 1;

  let attributeClassifications = {
    name_tiered: {
      type: "string",
      reverse: false,
    },
    name_one_time: {
      type: "string",
      reverse: false,
    },
    game_tiered: {
      type: "string",
      reverse: false,
    },
    game_one_time: {
      type: "string",
      reverse: false,
    },
    points: {
      type: "number",
      reverse: false,
    },
    game: {
      type: "number",
      reverse: true,
    },
    global: {
      type: "number",
      reverse: true,
    },
    tiers: {
      type: "number",
      reverse: false,
    },
  };

  let attributeClassification = attributeClassifications[attribute];

  if (attributeClassification["reverse"] == true) {
    reverseMultiplier *= -1; // This is here because certain attributes should have their sorting reversed, such as name where lower values should be at the top (A-Z)
  }

  return function (a, b) {
    let aValue, bValue;
    if (attributeClassification["type"] == "string") {
      aValue = und(a.dataset[attribute], "");
      bValue = und(b.dataset[attribute], "");

      console.warn([aValue, bValue]);

      return aValue.localeCompare(bValue, userLanguage, { sensitivity: "base" }) * reverseMultiplier;
    } else if (attributeClassification["type"] == "number") {
      aValue = und(Number(a.dataset[attribute]));
      bValue = und(Number(b.dataset[attribute]));

      if (aValue < bValue) {
        return 1 * reverseMultiplier;
      } else if (aValue > bValue) {
        return -1 * reverseMultiplier;
      }
    }

    return 0;
  };
}

let currentSort = {};
let currentReverse = false;

/*
 * Sorts the achievement table data by a certain attribute
 * @param {string} game - The game to sort the data for
 * @param {string} type - The type of achievement to sort (like "one-time" or "tiered")
 * @param {string} attribute - The attribute to sort by (like "points")
 * @param {boolean} reverse - Whether to reverse the sorting
 */
function sortData(game, type, attribute = "points", reverse = false) {
  if (currentSort["game"] == game && currentSort["type"] == type && currentSort["attribute"] == attribute) {
    reverse = !currentReverse;
    currentReverse = reverse;
  } else {
    reverse = false;
    currentReverse = false;
  }

  currentSort = {
    game: game,
    type: type,
    attribute: attribute,
  };

  let achievementTable = document.getElementById(`${game}-${type}`);
  let achievementTableRows = achievementTable.querySelectorAll(".row:not(.header-row)");
  let achievementTableRowsArray = Array.from(achievementTableRows);

  console.log("Sorting by " + attribute + " in " + game + " " + type + " with reverse " + reverse);

  let achievementHeaderElements;
  if (type == "one-time") {
    achievementHeaderElements = ["sort-name_one_time", "sort-points", "sort-game", "sort-global"];
  } else if (type == "tiered") {
    achievementHeaderElements = ["sort-name_tiered", "sort-tiers"];
  }

  achievementHeaderElements.forEach((dataI) => {
    let element = achievementTable.querySelector(`[data-i="${dataI}"]`);
    element.classList.add("faded");
  });

  achievementTable.querySelector(`[data-i="sort-${attribute}"]`).classList.remove("faded");

  achievementTableRowsArray.sort(compareAttributes(attribute, reverse));

  achievementTableRowsArray.forEach((element) => {
    achievementTable.appendChild(element);
  });
}

function filterData(id, filterBy = "all") {
  let element = document.getElementById(id);
  let rows = element.querySelectorAll(".row:not(.header-row)");

  rows.forEach((row) => {
    let isUnlocked = row.classList.contains("unlocked");
    let shouldHide = (filterBy == "locked" && isUnlocked) || (filterBy == "unlocked" && !isUnlocked);

    row.classList.toggle("display-none", shouldHide);
  });
}

function updateOverall() {
  updateElement("achievement-points", checkAndFormat(globalAchievementStats["player"]["points"]));
  updateElement("achievements", checkAndFormat(globalAchievementStats["player"]["achievements"]));

  updateElement("total-achievement-points", checkAndFormat(globalAchievementStats["total"]["points"]));
  updateElement("total-achievements", checkAndFormat(globalAchievementStats["total"]["achievements"]));

  function formatMaxedGame(game) {
    let gameElement = document.createElement("span");
    gameElement.classList.add("multicolor-badge");

    let tier, gameName;
    if (game == "hypixel") {
      tier = 8;
      gameName = `Hypixel`; // shouldn't be translated
    } else {
      tier = achievementsDatabase[game]["tier"];
      gameName = getTranslation(["games", game]);
    }

    gameElement.textContent = insertPlaceholders(getTranslation(["achievements", "maxed_game"]), { game: gameName });
    gameElement.classList.add(`tier-${tier}`);
    gameElement.setAttribute("onclick", `switchStats("${game}")`);

    return gameElement;
  }

  if (globalAchievementStats["player"]["achievements"] == globalAchievementStats["total"]["achievements"]) {
    document.getElementById("maxed-games").appendChild(formatMaxedGame("hypixel"));
    document.getElementById("max-hypixel").style.display = "block";
  }

  maxedGames.sort((a, b) => achievementsDatabase[b]["tier"] - achievementsDatabase[a]["tier"]);
  for (let a = 0; a < maxedGames.length; a++) {
    let game = maxedGames[a];
    document.getElementById("maxed-games").appendChild(formatMaxedGame(game));
  }

  let pointsPercentage = globalAchievementStats["player"]["points"] / globalAchievementStats["total"]["points"];
  updateElement("achievement-points-progress-number", Math.floor(pointsPercentage * 100) + "%");
  document.getElementById("achievement-points-progress-bar").style.width = pointsPercentage * 100 + "%";

  let achievementsPercentage = globalAchievementStats["player"]["achievements"] / globalAchievementStats["total"]["achievements"];
  updateElement("achievements-progress-number", Math.floor(achievementsPercentage * 100) + "%");
  document.getElementById("achievements-progress-bar").style.width = achievementsPercentage * 100 + "%";
}
