import appMessages from "./app-messages";
import bookmarksMessages from "./bookmarks-messages";
import factCheckMessages from "./fact-check-messages";
import generalMessages from "./general-messages";
import homeMessages from "./home-messages";
import missionMessages from "./mission-messages";
import navigationMessages from "./navigation-messages";
import supportMessages from "./support-messages";
import userMessages from "./user-messages";

export default {
  "en-US": {
    ...appMessages["en-US"],
    ...bookmarksMessages["en-US"],
    ...factCheckMessages["en-US"],
    ...generalMessages["en-US"],
    ...homeMessages["en-US"],
    ...missionMessages["en-US"],
    ...navigationMessages["en-US"],
    ...supportMessages["en-US"],
    ...userMessages["en-US"],
  },
  "fr-FR": {
    ...appMessages["fr-FR"],
    ...bookmarksMessages["fr-FR"],
    ...factCheckMessages["fr-FR"],
    ...generalMessages["fr-FR"],
    ...homeMessages["fr-FR"],
    ...missionMessages["fr-FR"],
    ...navigationMessages["fr-FR"],
    ...supportMessages["fr-FR"],
    ...userMessages["fr-FR"],
  },
  "zh-CN": {
    ...appMessages["zh-CN"],
    ...bookmarksMessages["zh-CN"],
    ...factCheckMessages["zh-CN"],
    ...generalMessages["zh-CN"],
    ...homeMessages["zh-CN"],
    ...missionMessages["zh-CN"],
    ...navigationMessages["zh-CN"],
    ...supportMessages["zh-CN"],
    ...userMessages["zh-CN"],
  },
  "zh-TW": {
    ...appMessages["zh-TW"],
    ...bookmarksMessages["zh-TW"],
    ...factCheckMessages["zh-TW"],
    ...generalMessages["zh-TW"],
    ...homeMessages["zh-TW"],
    ...missionMessages["zh-TW"],
    ...navigationMessages["zh-TW"],
    ...supportMessages["zh-TW"],
    ...userMessages["zh-TW"],
  },
  "ja-JP": {
    ...appMessages["ja-JP"],
    ...bookmarksMessages["ja-JP"],
    ...factCheckMessages["ja-JP"],
    ...generalMessages["ja-JP"],
    ...homeMessages["ja-JP"],
    ...missionMessages["ja-JP"],
    ...navigationMessages["ja-JP"],
    ...supportMessages["ja-JP"],
    ...userMessages["ja-JP"],
  },
};
