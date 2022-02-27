let defaults = {
    showLastVisited: true,
    useISODate: false,
    lastVisitedInFront: false,
    prefixVisited: "✩ ",
    prefixBookmarked: "⌘ ",
    lastVisitedOlderThan: 0,
    lastVisitedTwoDates: false,
    showCurrentlyOpen: false,
    prefixCurrentlyOpen: "🗁 ",
    useCustomFormat: false,
    customPrefix: "%+[%+<%O%+>%B%+]%-[%+<%O%+>%-<%+(%V%+)%->%-]",
    customURL: "%u",
    customPostfix: "%+(  (%T%+{; %t%+})%+)",
    customDateDefault: "%a, %Y-%m-%d %H:%M",
    customWeekdayNames: browser.i18n.getMessage("customWeekdayNames_default"),
    customMonthNames: browser.i18n.getMessage("customMonthNames_default"),
    customLimit0: 60,
    customDate0: browser.i18n.getMessage("customDate0_default"),
    customLimit1: 3600,
    customDate1: browser.i18n.getMessage("customDate1_default"),
    customLimit2: 86400,
    customDate2: browser.i18n.getMessage("customDate2_default"),
    customLimit3: 648000,
    customDate3: browser.i18n.getMessage("customDate3_default"),
    customLimit4: 0,
    customDate4: browser.i18n.getMessage("customDate4_default"),
    customLimit5: 0,
    customDate5: browser.i18n.getMessage("customDate5_default"),
    customLimit6: 0,
    customDate6: browser.i18n.getMessage("customDate6_default"),
    mode: "left",
    bottomOffset: 24,
    mouseOrigin: 0,
    mouseOffsetX: 0,
    mouseOffsetY: 30,
    maxLines: 2,
    colorText: "#333333",
    colorBackground: "#f0f0f0",
    colorBorder: "#cccccc",
    useCustomCSS: false,
    customCSS: "",

    featureLevel: 0
};
