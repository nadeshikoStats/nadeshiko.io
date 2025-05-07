/*
 * Simple recursive function to find the path to an object in the leaderboards object. Only shows the indexes of objects in arrays, so will return something like [5, 1, 0]. Returns null if not found
 * @param {Object} leaderboards The leaderboards object
 * @param {string} id The ID of the object to find
 * @returns {Array} The path to the object in the leaderboards object
 */
function findPathById(leaderboards, id) {
  function recursiveSearch(obj, id, path) {
    if (Array.isArray(obj)) {
      for (let a = 0; a < obj.length; a++) {
        // Skip the favorites object
        if (obj[a].translation === "home.favorites") {
          continue;
        }
        let result = recursiveSearch(obj[a], id, path.concat(a));
        if (result) return result;
      }
    } else if (typeof obj === "object" && obj !== null) {
      if (obj["id"] === id) {
        return path;
      }
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          let result = recursiveSearch(obj[key], id, path);
          if (result) return result;
        }
      }
    }
    return null;
  }

  let result = recursiveSearch(leaderboards, id, []);
  return result;
}

/*
 * Gets full translated name of a leaderboard using its ID and findPathById.
  * @param {string} id The ID of the leaderboard
  * @returns {Object} The full translated name of the leaderboard
  * @property {string} game
  * @property {string} name
  * @property {string} format
  */
function getFullTranslationById(id) {
  let path = findPathById(leaderboards, id);
  let leaderboardInfo = {
    game: "",
    name: ""
  }
  let filteredLeaderboard = leaderboards;
  if (path) {
    for (let a = 0; a < path.length; a++) {
      filteredLeaderboard = filteredLeaderboard[path[a]];

      if (filteredLeaderboard["id"]) {
        if (!(filteredLeaderboard["include_name_in_full_translation"] === false)) {
          leaderboardInfo["name"] += getTranslationByGameObject(filteredLeaderboard);
        }
        leaderboardInfo["format"] = filteredLeaderboard["format"];
        break; // We've reached a leaderboard
      }

      if (filteredLeaderboard["leaderboards"]) {
        if (!(filteredLeaderboard["include_name_in_full_translation"] === false)) {
          if (a == 0) {
            leaderboardInfo["game"] += getTranslationByGameObject(filteredLeaderboard);
          } else {
            leaderboardInfo["name"] += getTranslationByGameObject(filteredLeaderboard) + " • "; // The space needs to be internationalized; other languages might have different spacing rules
          }
        }

        filteredLeaderboard = filteredLeaderboard["leaderboards"];
      } else {
        console.warn(`No leaderboards found for ${id} (how?)`);
        break;
      }
    }
  } else {
    console.warn(`No path found for ${id} (how?)`);
  }

  return leaderboardInfo;
}

function getTranslationByGameObject(game) {
  let gameTranslation = "";
  if (game["translation"] == "multi") {
    let gameTranslations = [];
    for (let translation of game["translations"]) {
      gameTranslations.push(getTranslation(translation));
    }
    gameTranslation = gameTranslations.join(" – ");
  } else {
    gameTranslation = getTranslation(game["translation"]);
  }

  return gameTranslation;
}

function formatLeaderboardStatistic(format, value) {
  if (!isNaN(value)) { // if value can be turned into a number, turn it into a number
    value = Number(value);
  }

  switch (format) {
    case "decimal_2":
      return checkAndFormat(Number(value), 2);
    case "bedwars_experience":
      return generateMinecraftText(formatBedWarsLevel(getBedWarsLevel(value)), true);
    case "pit_experience":
      return generateMinecraftText(pitXpToLevel(value));
    case "buildbattle_experience":
      return `${getBuildBattleTitle(value)["title"]} / ${checkAndFormat(Number(value))}`;
    case "skywars_experience":
      return generateMinecraftText(formatSkyWarsLevel(getSkyWarsLevel(value)), true);
    case "skywars_kit_xp":
      return `${calculateSkyWarsKitPrestige(value)}${checkAndFormat(Number(value))}`;
    case "woolgames_experience":
      return formatWoolGamesLevel(getWoolGamesLevel(value));
    case "warlords_wins":
      let warlordsTitles = [
        { req: 0, color: "§8", altName: getTranslation("games.modes.warlords.titles.rookie") },
        { req: 5, color: "§7", altName: getTranslation("games.modes.warlords.titles.recruit") },
        { req: 25, color: "§e", altName: getTranslation("games.modes.warlords.titles.novice") },
        { req: 50, color: "§a", altName: getTranslation("games.modes.warlords.titles.apprentice") },
        { req: 125, color: "§2", altName: getTranslation("games.modes.warlords.titles.soldier") },
        { req: 250, color: "§b", altName: getTranslation("games.modes.warlords.titles.captain") },
        { req: 500, color: "§9", altName: getTranslation("games.modes.warlords.titles.general") },
        { req: 1000, color: "§d", altName: getTranslation("games.modes.warlords.titles.vanquisher") },
        { req: 2500, color: "§5", altName: getTranslation("games.modes.warlords.titles.gladiator") },
        { req: 5000, color: "§c", altName: getTranslation("games.modes.warlords.titles.champion") },
        { req: 7500, color: "§6", altName: getTranslation("games.modes.warlords.titles.warlord") },
        { req: 10000, color: "rainbow", colorArray: ["§c§l", "§6§l", "§e§l", "§a§l", "§2§l", "§9§l", "§d§l", "§5§l"], altName: getTranslation("games.modes.warlords.titles.overlord") },
      ];

      let warlordsTitleObject = getGenericWinsPrefix({
        wins: value,
        winsObject: warlordsTitles,
        useToGo: false,
        useBrackets: false,
        alternativeNaming: true,
      });

      return `${warlordsTitleObject["title"]} / ${checkAndFormat(Number(value))}`;
    case "copsandcrims_score":
      return `<span class="mf">Lv. ${Math.floor(getCopsAndCrimsLevel(value))}</span> / ${checkAndFormat(Number(value))}`;
    case "paintball_kills":
      return getPaintballTitle(value);
    case "tkr_trophies":
      return getTKRTitle(Number(value));
    case "arena_wins":
      return getArenaBrawlTitle(value);
    case "quakecraft_kills":
      return getQuakecraftTitle(value);
    case "uhc_score":
      return `${getUHCTitle(value, false)} / ${checkAndFormat(Number(value))}`;
    case "speed_uhc_score":
      return `${getSpeedUHCTitle(value, false)} / ${checkAndFormat(Number(value))}`;
    case "vampirez_human":
      return getVampireZTitle(value, "human");
    case "vampirez_vampire":
      return getVampireZTitle(value, "vampire");
    case "tnt_high":
      return getTNTGamesTitle(value, true);
    case "tnt_low":
      return getTNTGamesTitle(value, false);
    case "large_number":
      return veryLargeNumber(Number(value));
    case "duration_minutes":
      return smallDuration(Number(value) * 60);
    case "duration_seconds":
      return smallDuration(Number(value));
    case "duration_seconds_ms":
      return smallDuration(Number(value), true);
    case "duration_milliseconds":
      return smallDuration(Number(value / 1000), true);
    case "date_and_time":
      return mediumDateFormat(Number(value));
    case "kilograms":
      return `${checkAndFormat(Number(value))} kg`;
    case "number":
      return checkAndFormat(Number(value));
    case "string":
      return value;
    default:
      if (!isNaN(value)) {
        return checkAndFormat(Number(value));
      } else {
        return value;
      }
  }
}