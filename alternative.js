(function() {
    let contrastEnabled = true;
    const contrastValue = 110;
    const saturateValue = 120;

    function toggleContrast() {
        const body = document.body;
        if (contrastEnabled) {
            body.style.filter = "none";
        } else {
            body.style.filter = `contrast(${contrastValue}%) saturate(${saturateValue}%)`;
        }
        contrastEnabled = !contrastEnabled;
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "=") {
            toggleContrast();
        }
    });
})();



document.title = "Can";

const styleElement = document.createElement("style");
document.head.appendChild(styleElement);
styleElement.textContent = `

    .fastpick:hover {
    box-shadow: rgb(255, 255, 255) 0em 0em 0em 0.125em;
    border-radius: 0.5em;
    cursor: pointer;
    }
    .fastpick {
    margin-top: 0.6%;
    margin-right: 0.3%;
    cursor: pointer;
    display: block;
    }
    .fastpick:hover img {
        width: 30px;
        height: 30px;
        display: block;
            padding: 15px;
    }
    .fastpick img {
        width: 30px;
        height: 30px;
        display: block;
            padding: 15px;
    }
`;

async function pickMode(modeIndex) {
    const playbtn = document.querySelector(".MainScreenComponentStyle-buttonPlay");
    playbtn.click();
    playbtn.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    playbtn.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
    await sleep(50);
    if (modeIndex == 10) document.querySelector(".BattlePickComponentStyle-cardContentRight > div > div")?.click();
    else if (modeIndex == 9) document.querySelector(".BattlePickComponentStyle-cardContentRight > :nth-child(2) > :nth-child(2)")?.click();
    else {
        document.querySelector(".BattlePickComponentStyle-cardContentLeft > :nth-child(2) > div")?.click();
        await sleep(50);
        if (modeIndex < 5) document.querySelector(`.BattleModesComponentStyle-cardContentUp > :nth-child(${modeIndex})`)?.click();
        else document.querySelector(`.BattleModesComponentStyle-cardDown > :nth-child(${modeIndex - 4})`)?.click();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const elem = node.querySelector(`.UserInfoContainerStyle-blockForIconTankiOnline`);
                    if (elem) {
                        elem.innerHTML = `
<div class="fastpick mode1"><img src="https://tankionline.com/play/static/images/qb_mode.71a6ec19.svg"></div>
<div class="fastpick mode2"><img src="https://tankionline.com/play/static/images/tdm_mode.ef239dba.svg"></div>
<div class="fastpick mode3"><img src="https://tankionline.com/play/static/images/cp_mode.9d327fbc.svg"></div>
<div class="fastpick mode4"><img src="https://tankionline.com/play/static/images/ctf_mode.fba37902.svg"></div>
<div class="fastpick mode5"><img src="https://tankionline.com/play/static/images/sge_mode.4a6035e8.svg"></div>
<div class="fastpick mode6"><img src="https://tankionline.com/play/static/images/jg_mode.025a9047.svg"></div>
<div class="fastpick mode7"><img src="https://tankionline.com/play/static/images/rgb_mode.66312ba3.svg"></div>
<div class="fastpick mode8"><img src="https://tankionline.com/play/static/images/asl_mode.42f836ca.svg"></div>
<div class="fastpick mode9"><img src="https://tankionline.com/play/static/images/params/Overdrives.381f9a26.svg"></div>
<div class="fastpick mode10"><img src="https://tankionline.com/play/static/images/rating.4b7ee4c0.svg"></div>
`
                        for (let i = 1; i < 11; i++) elem.querySelector(`.mode${i}`).addEventListener("click", () => {pickMode(i)});
                    }
                }
            });
        }
    });
});
const observerConfig = { childList: true, subtree: true };
observer.observe(document.body, observerConfig);

(() => {
    var tankResistances = [
      {
        name: "Броненосец",
        shitPicture: "https://tankionline.com/play/static/images/crit_resistance.7fb68893.svg",
        picture: "https://tankionline.com/play/static/images/resistances/crit_resistance.3f4d1cc2.svg"
      },
      {
        name: "Огнемёт",
        shitPicture: "https://tankionline.com/play/static/images/firebird_resistance.785a9d6b.svg",
        picture: "https://tankionline.com/play/static/images/resistances/firebird_resistance.00ac2221.svg"
      },
      {
        name: "Фриз",
        shitPicture: "https://tankionline.com/play/static/images/freeze_resistance.33bdf642.svg",
        picture: "https://tankionline.com/play/static/images/resistances/freeze_resistance.d26eb338.svg"
      },
      {
        name: "Изида",
        shitPicture: "https://tankionline.com/play/static/images/isis_resistance.30a69ffc.svg",
        picture: "https://tankionline.com/play/static/images/resistances/isis_resistance.5b05887a.svg"
      },
      {
        name: "Тесла",
        shitPicture: "https://tankionline.com/play/static/images/tesla_resistance.3e686c8e.svg",
        picture: "https://tankionline.com/play/static/images/resistances/tesla_resistance.663d3597.svg"
      },
      {
        name: "Молот",
        shitPicture: "https://tankionline.com/play/static/images/hammer_resistance.6c549d29.svg",
        picture: "https://tankionline.com/play/static/images/resistances/hammer_resistance.28e73097.svg"
      },
      {
        name: "Твинс",
        shitPicture: "https://tankionline.com/play/static/images/twins_resistance.ad189f61.svg",
        picture: "https://tankionline.com/play/static/images/resistances/twins_resistance.fbbc4d72.svg"
      },
      {
        name: "Рикошет",
        shitPicture: "https://tankionline.com/play/static/images/ricochet_resistance.8247beaa.svg",
        picture: "https://tankionline.com/play/static/images/resistances/ricochet_resistance.69c6c7ee.svg"
      },
      {
        name: "Смоки",
        shitPicture: "https://tankionline.com/play/static/images/smoky_resistance.845afc14.svg",
        picture: "https://tankionline.com/play/static/images/resistances/smoky_resistance.c4c202ca.svg"
      },
      {
        name: "Страйкер",
        shitPicture: "https://tankionline.com/play/static/images/rocket_launcher_resistance.b7dfd64f.svg",
        picture: "https://tankionline.com/play/static/images/resistances/rocket_launcher_resistance.5772cbaa.svg"
      },
      {
        name: "Вулкан",
        shitPicture: "https://tankionline.com/play/static/images/vulcan_resistance.824f6f0e.svg",
        picture: "https://tankionline.com/play/static/images/resistances/vulcan_resistance.9aebf267.svg"
      },
      {
        name: "Гром",
        shitPicture: "https://tankionline.com/play/static/images/thunder_resistance.6d7f4531.svg",
        picture: "https://tankionline.com/play/static/images/resistances/thunder_resistance.9dab2abf.svg"
      },
      {
        name: "Скорпион",
        shitPicture: "https://tankionline.com/play/static/images/scorpio_resistance.e8f1787f.svg",
        picture: "https://tankionline.com/play/static/images/resistances/scorpio_resistance.d40f8fbb.svg"
      },
      {
        name: "Рельса",
        shitPicture: "https://tankionline.com/play/static/images/railgun_resistance.636a554f.svg",
        picture: "https://tankionline.com/play/static/images/resistances/railgun_resistance.7577c7a1.svg"
      },
      {
        name: "Магнум",
        shitPicture: "https://tankionline.com/play/static/images/artillery_resistance.9b4cbc34.svg",
        picture: "https://tankionline.com/play/static/images/resistances/artillery_resistance.bd49fc96.svg"
      },
      {
        name: "Гаусс",
        shitPicture: "https://tankionline.com/play/static/images/gauss_resistance.bb8f409c.svg",
        picture: "https://tankionline.com/play/static/images/resistances/gauss_resistance.acf358ed.svg"
      },
      {
        name: "Шафт",
        shitPicture: "https://tankionline.com/play/static/images/shaft_resistance.0778fd3e.svg",
        picture: "https://tankionline.com/play/static/images/resistances/shaft_resistance.7e58bc19.svg"
      },
      {
        name: "Мины",
        shitPicture: "https://tankionline.com/play/static/images/mine_resistance.dd581c90.svg",
        picture: "https://tankionline.com/play/static/images/resistances/mine_resistance.0d0d3c98.svg"
      }
    ];
    new MutationObserver((e) => {
        e.forEach(({ addedNodes: e, target: t }) => {
            e.length &&
                ("tbody" === t.localName || t.className.includes("BattleComponentStyle-canvasContainer")) &&
                t.querySelectorAll(".Common-maskImage").forEach((e) => {
                    let t = window.getComputedStyle(e).getPropertyValue("-webkit-mask-image")?.split('"')?.[1],
                        a = tankResistances.find(({ shitPicture: e }) => t === e);
                    a && (e.style.cssText = `-webkit-mask-image: none;background: url(${a.picture}) center center / 1em 1em no-repeat;width: 1em;height: 1em;`);
                });
        });
    }).observe(document, { childList: !0, subtree: !0 });
})();

const css = `
html {
    font-size: max(min(1.48148vh, 1vw)* 1, 3px);
}
.BattleMessagesComponentStyle-message {
    background: rgb(0 25 38 / 30%) !important;
    backdrop-filter: blur(10px) !important;
    border-radius: 10px !important;
    }
.NewsComponentStyle-closeArea,
.ChatComponentStyle-closeArea {
background-color: rgb(0 25 38 / 50%);
    backdrop-filter: blur(10px);
}
.BattlePickComponentStyle-commonStyleBlock:hover {
    transition: 500ms;
}
.BattlePickComponentStyle-commonStyleBlock {
    transition: 500ms;
    border-radius: 15px;
}
#modal-root > div {
    background: rgb(0 25 38 / 50%);
    backdrop-filter: blur(10px);
    pointer-events: auto;
}
.BattlePickComponentStyle-modeCards {
    font-size: max(min(1vh, 1vw)* 1.6, 3px);
}
.MatchmakingWaitComponentStyle-container,.MatchmakingWaitComponentStyle-container *{
background-image: none;
}
.MatchmakingWaitComponentStyle-cancelButton {
    margin-top: 0em;
}
.MatchmakingWaitComponentStyle-contentContainer {
    margin-top: 0em;
}
.MatchmakingWaitComponentStyle-container {
    backdrop-filter: blur(10px);
    height: 7.5em;
    border-radius: 15px;
    background-color: rgba(0, 25, 38, 0.1);
    border: 0.063em solid rgba(255, 255, 255, 0.1);
    background-image: none;
    top: 93% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
}
.UserGroupTitleButtonComponentStyle-commonBlockGroup, .InvitationWindowsComponentStyle-usersScroll > div > div > div:nth-child(2), .ProBattleCommonStyleMobile-blockModesFilter > div.Common-flexCenterAlignCenter > div.Common-flexStartAlignCenter > p, .BattleModesComponentStyle-button > div.Common-flexStartAlignCenter.BattleModesComponentStyle-fund > div.Common-flexStartAlignCenter:nth-child(2), .BattleModesComponentStyle-button > .Common-flexCenterAlignCenter, .BattleCreateComponentStyle-mainContainer.ProBattlesComponentStyle-mainContainer.Common-flexStartAlignStart > div.Common-flexStartAlignCenterColumn > div, .MapCardComponentStyle-message > span, .MapCardComponentStyle-imgSelectCard {
    filter: saturate(0) !important;
}
.HotKey-commonBlockForHotKey {
    background-color: rgb(0 0 0 / 0%);
    color: rgb(255 255 255);
}
.Common-buttonQE:hover,
.Common-buttonQE{
background-color: rgb(255 255 255 / 0%);
}
.Common-buttonQE span {
    color: rgb(255 255 255);
}
.ContextMenuStyle-menu {
    backdrop-filter: blur(10px);
    border-radius: 10px;
    background-color: rgb(0 25 38 / 20%);
}
.NewsComponentStyle-newsContainer > :first-child,
.Common-flexStartAlignCenter.Common-whiteSpaceNoWrap.nickNameClass,
.ClanCommonStyle-rowEmpty,
.ClanCommonStyle-row,
.DropDownStyle-dropdownControl,
.FriendRequestComponentStyle-buttonDeclineAllInvisible,
.TableComponentStyle-table thead tr th,
.FriendListComponentStyle-blockList {
    border-radius: 7px;
}
.NotificationViewStyle-progressNotification {
    border: 0.5px solid rgba(255, 255, 255, 0.25) !important;
    box-shadow: rgb(255, 255, 255) 0em 0em 0em 0.03em !important;
}
.DialogContainerComponentStyle-container {
    border-radius: 10px;
}
.Common-container .HotKey-commonBlockForHotKey {
    border-radius: 8.1875em;
    color: white !important;
    background-color: rgb(0 25 38 / 0%) !important;
}
.wrapper .ApplicationLoaderComponentStyle-container > div[style*="linear-gradient"] {
    display: none;
}
.SuppliesComponentStyle-cellAdd{
box-shadow: rgb(255 255 255 / 25%) 0em 0em 0em 0.063em;
}
.ModalStyle-rootHover > .Common-displayFlex {
    background-color: rgb(0 25 38 / 25%) !important;
    border-radius: 10px !important;
    box-shadow: rgb(255 255 255 / 25%) 0em 0em 0em 0.05em;
}
.GarageCommonStyle-animatedBlurredLeftBlock {
    animation: 200ms ease-out 0s 1 normal none running ksc-keyframe-61;
    backdrop-filter: blur(0em);
}
.VerticalScrollStyle-outerContainerStyle.DropDownStyle-outerContainerStyle.DropDownStyle-dropdownMenu.Common-displayFlex > div > div > div {
    border-radius: 7px;
    background: rgb(0 25 38 / 25%);
    backdrop-filter: blur(5px);
    margin: 2px;
    outline: 1px solid rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.7s !important;
    box-shadow: unset !important;
}
.Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon:hover, .Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon {
width: 99%;
}
.TooltipStyle-tooltip, .Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon:hover, .Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon {
    border-radius: 5px;
    background-color: rgb(0 25 38 / 25%);
    box-shadow: rgb(255 255 255 / 41%) 0em 0em 0em 0.5px;
}
.ContainersComponentStyle-description {
    box-shadow: rgb(255 255 255 / 25%) 0em 0em 0em 1px !important;
    background: rgb(20 20 20 / 25%) !important;
}
.ContainersComponentStyle-possibleRewardsBlock {
    box-shadow: rgb(255 255 255 / 25%) 0em 0em 0em 1px;
    background-color: rgb(0 25 38 / 25%);
}
.ContainersComponentStyle-possibleRewardsBlock:hover {
    box-shadow: rgb(255 255 255) 0em 0em 0em 2px;
}
.Common-itemStyle {
    background-color: rgb(0 25 38 / 15%);
    box-shadow: rgb(255 255 255 / 30%) 0em 0em 0em 0.063em;
    border-radius: 0.7em;
}
.DropDownStyle-dropdownControl {
    background-color: rgb(0 25 38 / 25%);
}
.Common-flexCenterAlignCenterColumn {
    background-color: rgb(0 0 0 / 0%) !important;
}
.ListItemsComponentStyle-itemsListContainer {
    background: linear-gradient(rgba(0, 25, 38, 0) 0%, rgb(0 25 38 / 55%) 100%);
}
.SuppliesComponentStyle-cellAdd {
    background-color: rgb(0 25 38 / 25%);
}
.SuppliesComponentStyle-blocksCell {
    width: 27%;
}
.SuppliesComponentStyle-cellAdd {
    width: 5em;
    height: 5em;
    margin-right: 0.625em;
}
.CssCommonAnimations-appearFromLeft {
    top: 35%;
}
.SuppliesComponentStyle-cellAdd:hover {
    box-shadow: rgb(255 255 255) 0em 0em 0em 0.125em;
}
.ContractCardComponentStyle-base {
    background-color: rgb(0 25 38 / 50%) !important;
}
.MainQuestComponentStyle-cardPlay {
    background-color: rgb(0 25 38 / 25%);
}
.MainQuestComponentStyle-cardPlay:hover {
    background-color: rgb(0 25 38 / 25%);
    box-shadow: rgb(255 255 255) 0px 0px 0px 0.125em;
}
.UsersTableStyle-rowBattleEmpty {
    border-radius: 0.5em !important;
    background-color: rgb(0 30 45 / 25%)!important;
}
.UsersTableStyle-rowBattle {
    border-radius: 0.5em!important;
    background-color: rgb(0 25 38 / 25%)!important;
}
.BattleHudComponentStyle-tabButton, .BattleHudComponentStyle-pauseButton, .BattleHudComponentStyle-fullScreenButton {
    background-color: rgb(0 25 38 / 30%) !important;
    backdrop-filter: blur(10px);
    border-radius: 0.3em !important;
}
.BattleTabStatisticComponentStyle-dmTableContainer table tbody {
    --row-background-color: rgb(0 25 38 / 10%);
    --selected-row-background-color: rgb(0 25 38 / 20%);
}
.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody {
    --row-background-color: rgb(0 25 38 / 10%);
    --selected-row-background-color: rgb(0 25 38 / 20%);
}
.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody {
    --row-background-color: rgb(0 25 38 / 10%);
    --selected-row-background-color: rgb(0 25 38 / 20%);
}
.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr,
.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr,
.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr {
    border-radius: 0.5em;
}
.BattlePauseMenuComponentStyle-blackGlobalWrapper {
    backdrop-filter: blur(10px);
    background-color: rgb(0 25 38 / 50%);
}
.BattleTabStatisticComponentStyle-containerInsideResults, .BattleTabStatisticComponentStyle-containerInsideTeams {
    backdrop-filter: blur(10px);
    background-color: rgb(0 25 38 / 50%);
    border-radius: 1em;
}
.Common-flexStartAlignCenterColumn {
    background-color: rgb(0 25 38 / 0%);
}
.DialogContainerComponentStyle-container{
    background: radial-gradient(100% 100% at 0% 0%, rgba(254, 38, 74, 0.75) 0%, rgba(255, 38, 74, 0) 100%), rgb(0 25 38 / 75%);
}
.ContainersComponentStyle-countBlock > div {
    box-shadow: rgb(25 129 0) 0em 0em 1em 0em !important;
    background: rgb(25 129 0);
}
.ProBattlesComponentStyle-borderLineCell {
    border-left: 0px solid rgba(255, 255, 255, 0.15);
}
.MainSectionComponentStyle-linearGradientImgCard {
    background: linear-gradient(rgb(0 0 0 / 0%) 0%, rgba(0, 0, 0, 0) 100%);
}
.MainSectionComponentStyle-transformLinearGradientImgCard {
    background: linear-gradient(rgb(0 0 0 / 0%) 0%, rgba(0, 0, 0, 0) 100%);
}
.SaleByKitStyle-commonBlockModal,
.ChatComponentStyle-channelSelect, .TutorialModalComponentStyle-contentWrapper, .ItemDescriptionComponentStyle-commonBlockModal, .UserProgressComponentStyle-modalWrapper, .ChatComponentStyle-chatWindow, .NewsComponentStyle-newsWindow, .Common-entranceGradient, html, body, .ClanInvitationsComponentStyle-invitationContent, .Common-container {
    background: rgb(0 25 38 / 80%);
}
.BreadcrumbsComponentStyle-rightButtonsContainer > div.BreadcrumbsComponentStyle-exitGameButton:hover,
.BreadcrumbsComponentStyle-rightButtonsContainer > div > div.HeaderCommonStyle-icons:hover,
.BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.BreadcrumbsComponentStyle-backButton:hover,
.BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.Common-flexStartAlignCenter:hover,
.ProBattlesComponentStyle-commonBlockHotkeyV:hover {
    background-color: rgb(255 255 255 / 0%);
}
.ClanStatisticsComponentStyle-areCommon,
.ClanHeaderComponentStyle-blockInform,
.ClanInfoComponentStyle-messageClan,
.FormatsSectionComponentStyle-card {
    border-radius: 1em;
}
.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr td:nth-child(n+7) {
    border-left: 0em solid rgba(255, 255, 255, 0.15);
}
    .BattleTabStatisticComponentStyle-dmTableContainer table tbody tr td:nth-child(n+6) {
    border-left: 0em solid rgba(255, 255, 255, 0.15);
    }
.ScrollingCardsComponentStyle-scrollCard {
    border-radius: 2em;
}
.LobbyLoaderComponentStyle-loaderContainer {
	visibility: hidden !important;
}
.LobbyLoaderComponentStyle-container{
    backdrop-filter: blur(10px);
    background: rgb(0 25 38 / 50%);
}
.LobbyLoaderComponentStyle-logo {
						animation: logoAnim 1.5s infinite;
						position: relative;
					}
@keyframes logoAnim {
						0%, 100% {
							transform: scale(1);
                            filter: drop-shadow(0rem 0rem 0.5rem rgba(255, 255, 255, 1))
						}
						50% {
							transform: scale(0.8);
                            filter: drop-shadow(0rem 0rem 0.5rem rgba(0,25,38, 0.5))
						}
					}

td.BattleTabStatisticComponentStyle-gsCell > span.GearScoreStyle-bestGS.bgClipText, div.TankParametersStyle-marginBlockGear > span.GearScoreStyle-bestGS, span.GearScoreStyle-bestGS.bgClipText {
    color: rgba(255, 255, 255, 0.1);
    background: #ed8080;
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, #ed8080), color-stop(16%, #2a77d6), color-stop(32%, #5eb524), color-stop(48%, #eacd25), color-stop(64%, #ed8080), color-stop(80%, #2a77d6), color-stop(100%, #5eb524));
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    background-position: top left;
    background-color: #222;
    animation: LGBT infinite 3s linear;
}
@keyframes LGBT {
						0% {
							background-position: top left;
						}
						100% {
							background-position: top right;
						}
					}
.MainScreenComponentStyle-playButtonContainer span{
color: rgb(255 255 255);
}
.Common-flexSpaceBetweenAlignStartColumn{
border: 0em solid rgb(255 255 255 / 0%);
}
.MainScreenComponentStyle-playButtonContainer h3 {
    display: none;
}
.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenterColumn {
    background: rgba(255, 255, 255, 0);
}
.ProBattlesComponentStyle-rightPanel {
    border-left: 0px solid rgba(255, 255, 255, 0.25);
}
div.UserInfoContainerStyle-containerProgressMainScreen > div.Common-flexStartAlignStartColumn {
    filter: saturate(0);
    backdrop-filter: blur(0.1rem);
}
div.UserInfoContainerStyle-containerProgressMainScreen > div.Common-flexStartAlignStartColumn::after {
    filter: saturate(0) drop-shadow(0rem 0rem 0.2rem rgba(99, 99, 99, 1));
    box-shadow: rgb(0 0 0) 0em 0em 0.275em 0em;
}
.UserInfoContainerStyle-progressValue,
.UserInfoContainerStyle-xpIcon {
    filter: saturate(0);
}
.AnnouncementHomeScreenComponentStyle-mainContainer:hover {
    border: 0em solid rgb(191, 213, 255);
}
.AnnouncementHomeScreenComponentStyle-mainContainer > div:nth-child(2) {
    background: rgb(0 0 0 / 0%) !important;
}
.AnnouncementHomeScreenComponentStyle-mainContainer {
    backdrop-filter: blur(0em);
    background-color: rgb(0 25 38 / 0%);
    border: 0em solid rgba(255, 255, 255, 0);
}
.EventBattlePassLobbyComponentStyle-commonBlockProgressBar {
    background-color: rgb(0 25 38 / 0%);
}
.AnnouncementHomeScreenComponentStyle-mainContainer:hover,
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover{
box-shadow: rgb(255, 255, 255) 0em 0em 0em 0.125em;
}
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass {
    background: radial-gradient(106.67% 100% at 0% 0%, rgb(212 127 255 / 0%) 0%, rgb(0 25 38 / 0%) 100%);
    backdrop-filter: blur(0em);
    box-shadow: rgb(213 128 255 / 0%) 0em 0em 0em 0px;
}
.BattlePassLobbyComponentStyle-menuBattlePass:hover{
box-shadow: rgb(255, 255, 255) 0em 0em 0em 0.125em;
}
.BattlePassLobbyComponentStyle-menuBattlePass,
.BattlePassLobbyComponentStyle-menuBattlePass:hover{
    background: linear-gradient(0deg, rgb(25 25 25 / 0%) 0%, rgb(25 25 25 / 0%) 100%);
}
.MainQuestComponentStyle-cardPlayCommon:hover,
.SkinCellStyle-widthHeight:hover,
.MainQuestComponentStyle-cardPlay:hover,
.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenter:hover,
.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenterColumn:hover,
.UserScoreComponentStyle-blockRightPanel > div.BreadcrumbsComponentStyle-logout:hover,
.HeaderCommonStyle-icons:hover,
.BattlePassLobbyComponentStyle-menuBattlePass:hover,
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover,
.AnnouncementHomeScreenComponentStyle-mainContainer:hover,
.FooterComponentStyle-containerMenu:hover,
.MainScreenComponentStyle-buttonPlay:hover,
.fastpick:hover,
.PrimaryMenuItemComponentStyle-itemCommonLi:hover {
    transition: 500ms;
}
.MainQuestComponentStyle-cardPlayCommon,
.SkinCellStyle-widthHeight,
.MainQuestComponentStyle-cardPlay,
.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenter,
.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenterColumn,
.UserScoreComponentStyle-blockRightPanel > div.BreadcrumbsComponentStyle-logout,
.HeaderCommonStyle-icons,
.fastpick,
.BattlePassLobbyComponentStyle-menuBattlePass,
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass,
.AnnouncementHomeScreenComponentStyle-mainContainer,
.FooterComponentStyle-footer li,
.MainScreenComponentStyle-buttonPlay,
.PrimaryMenuItemComponentStyle-menuItemContainer {
    transition: 500ms;
}
.QuestsChallengesComponentStyle-maxTierBlock {
    border-left: 0px solid rgba(255, 255, 255, 0.25);
}
.MainScreenComponentStyle-blockMainMenu ul {
    margin-top: -35% !important;
}
.MainScreenComponentStyle-playButtonContainer{
box-shadow: rgb(255, 255, 255) 0em 0em 0em 0;
    border-radius: 0.5em;
}
.MainScreenComponentStyle-playButtonContainer:hover{
box-shadow: rgb(255, 255, 255) 0em 0em 0em 0.125em;
    border-radius: 0.5em;
}
.MainScreenComponentStyle-buttonPlay {
    backdrop-filter: blur(0em);
    background-color: rgb(0 0 0 / 0%);
    background-image: none;
    background-size: cover;
    background-repeat: no-repeat;
    width: 10.875em;
    height: 4.75em;
}
.MainScreenComponentStyle-buttonPlay {
    position: absolute;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
}
.UserScoreComponentStyle-blockRightPanel > div.Common-flexCenterAlignCenter{
display: none;
}
.UserInfoContainerStyle-rankIconContainerClickable:hover,
.UserScoreComponentStyle-blockRightPanel > div.BreadcrumbsComponentStyle-logout:hover,
.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenterColumn:hover,
.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenter:hover {
    background-color: rgba(255, 255, 255, 0);
}
.UserScoreComponentStyle-blockRightPanel > div > div.HeaderCommonStyle-icons:hover{
background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);
}
.MainQuestComponentStyle-cardPlayCommon:hover,
.MainQuestComponentStyle-cardPlay:hover,
.AnnouncementHomeScreenComponentStyle-mainContainer:hover,
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover,
.BattlePassLobbyComponentStyle-menuBattlePass:hover,
.MainScreenComponentStyle-playButtonContainer:hover,
.fastpick:hover,
.FooterComponentStyle-containerMenu:hover,
.PrimaryMenuItemComponentStyle-menuItemContainer:hover {
    animation: 0.5s linear 0s 1 normal none running changeBackground;
}
@keyframes changeBackground {
    0% {
        background-color: rgba(255, 255, 255, 0.1);
    }
    10% {
        background-color: rgb(255, 255, 255, 0.5);
    }
    100% {
        background-color: rgba(255, 255, 255, 0.1);
    }
}
.Common-flexSpaceBetweenAlignStartColumn {
    background: radial-gradient(191.67% 100% at 100% 100%, rgb(191 212 255 / 0%) 0%, rgba(191, 212, 255, 0) 100%);
    border-right: 0px solid rgba(255, 255, 255, 0.25);
}
.SuperMissionComponentStyle-gradientBackground {
    background: radial-gradient(231.6% 141.42% at 0% 100%, rgb(191 212 255 / 0%) 0%, rgba(191, 212, 255, 0) 100%);
}
.SuperMissionComponentStyle-descriptionSuperMission {
    border-right: 0px solid rgba(255, 255, 255, 0.25);
}
.SettingsComponentStyle-scrollingMenu {
    background-color: rgb(255 255 255 / 0%);
}
.ContainersComponentStyle-rightPane,
.ContainersComponentStyle-leftPane {
    background: linear-gradient(90deg, rgb(0 0 0 / 0%) 10%, rgba(0, 0, 0, 0) 100%);
}
.MenuComponentStyle-decorLineMenu {
    background-color: rgb(255 255 255 / 0%);
}
.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+6) {
    border-left: 0em solid rgba(255, 255, 255, 0.15);
}
.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+7) {
    border-left: 0em solid rgba(255, 255, 255, 0.15);
}
.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+6) {
    border-left: 0em solid rgba(255, 255, 255, 0.15);
}
.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+7) {
    border-left: 0em solid rgba(255, 255, 255, 0.15);
}
.BattleTabStatisticComponentStyle-containerInsideResults,
.BattleTabStatisticComponentStyle-containerInsideTeams {
    font-size: max(min(1.4vh, 1vw)* 1, 3px);
}
.BattleTabStatisticComponentStyle-containerInsideResults,
.ModalStyle-rootHover,
.BattleTabStatisticComponentStyle-containerInsideTeams {
    animation: tabani 0.4s forwards;
}
@keyframes tabani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes fadeOut {
0% {opacity: 1;}
100% {opacity: 0;}
}
.BattleInfoComponentStyle-selectBattle {
    display: none;
}
.BattleTabStatisticComponentStyle-gsCell, .BattleTabStatisticComponentStyle-defenceCell, .BattleTabStatisticComponentStyle-scoreCell, .BattleTabStatisticComponentStyle-deviceCell {
    visibility: unset !important;
}
div[data-style="BattleTabStatisticComponentStyle-containerInsideTeams BattleTabStatisticComponentStyle-containerInside Common-flexStartAlignCenterColumn Common-displayFlexColumn Common-displayFlex Common-alignCenter"]{
width:105em!important;
}
.BattleTabStatisticComponentStyle-containerInsideTeams>div:first-child{
justify-content:center;text-align:center;
}
.BattleTabStatisticComponentStyle-containerInsideTeams>div:first-child:hover{
text-align:center;
}
.BattleTabStatisticComponentStyle-containerInsideTeams>div:nth-child(2)>div>div:first-child tbody>tr td:first-child{
min-width:12em;
}
.BattleTabStatisticComponentStyle-containerInsideTeams>div:nth-child(2)>div>div:last-child tbody>tr td:first-child{
min-width:12em;
}
.BattleTabStatisticComponentStyle-resistanceModuleCell{
min-width:10em;visibility:unset!important;width:10em!important;
}
.MainScreenComponentStyle-containerPanel, .MainScreenComponentStyle-containerPanel * {
    border: none;
    box-shadow: none;
}
.BreadcrumbsComponentStyle-headerContainer, .BreadcrumbsComponentStyle-headerContainer * {
    border: none;
    box-shadow: none;
}
.ProBattlesComponentStyle-commonBlockHotkeyV {
    border-right: 0px solid rgba(255, 255, 255, 0.25) !important;
}
.BattleCreateComponentStyle-formNameBattle input[type="text"] {
    border: 0px solid rgb(255 255 255) !important;
}
.InputComponentStyle-defaultStyle {
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px;
}
.GarageCommonStyle-animatedBlurredRightBlock {
    backdrop-filter: blur(0em);
}
.MainQuestComponentStyle-cardPlay:hover,
.SkinCellStyle-widthHeight {
    background: url(https://pages.tankionline.com/images/id/background-pattern.svg) 20% 0% / cover, center bottom no-repeat;
}
.ChatComponentStyle-messagesContainer,
.TankParametersStyle-leftParamsContainer,
.MountedItemsStyle-commonBlockForTurretsHulls,.MountedItemsStyle-commonBlockPaint,
.MountedItemsStyle-commonBlockDrone,
.BattleInfoComponentStyle-commonBlockSelectBattle,
.NewsComponentStyle-newsContainer{
background: url(https://pages.tankionline.com/images/id/background-pattern.svg) 20% 0% / cover, center bottom no-repeat !important;
}
.SearchInputComponentStyle-searchInput,
.LobbyLoaderComponentStyle-container,
#modal-root > div,
.Common-entranceGradient{
background-image: url(https://pages.tankionline.com/images/id/background-pattern.svg) !important;
}
.LobbyLoaderComponentStyle-container{
animation: tabani 0.2s forwards;
}
.FormatsSectionComponentStyle-card,
.ScrollingCardsComponentStyle-scrollCard{
transition: 500ms;
}
#modal-root > div {
    animation: tabani 0.4s forwards;
}
.BattleChatComponentStyle-inputContainerAll,
.BattleChatComponentStyle-inputContainerAllies {
    background-image: url(https://pages.tankionline.com/images/id/background-pattern.svg) !important;
}
.BattleTabStatisticComponentStyle-containerInsideResults, .ModalStyle-rootHover, .BattleTabStatisticComponentStyle-containerInsideTeams {
    background-image: url(https://pages.tankionline.com/images/id/background-pattern.svg) !important;
}
.UserProgressComponentStyle-progressItemCompleted,
.UserProgressComponentStyle-progressItemUncompleted,
.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr, .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr, .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr {
    transition: 500ms;
}
.MainQuestComponentStyle-cardPlayCommon:hover {
    background-color: rgb(0 25 38 / 25%);
    box-shadow: rgb(255 255 255) 0px 0px 0px 0.125em;
}
.MainQuestComponentStyle-cardPlayCommon {
    background-color: rgb(0 25 38 / 15%);
    box-shadow: rgb(255 255 255 / 25%) 0px 0px 0px 0.063em;
    cursor: pointer;
}
.UserProgressComponentStyle-modalWrapper {
    box-shadow: rgb(255 255 255 / 25%) 0px 0px 0px 0.063em;
    border-radius: 15px;
    width: 60%;
}
.UserProgressComponentStyle-itemContainer {
    background-color: rgb(0 25 38 / 50%);
    box-shadow: rgb(255 255 255 / 25%) 0px 0px 0px 0.063em;
    border: 0px solid rgb(255 255 255);
}
.SmallShowcaseItemComponentStyle-container {
transition: 500ms;
    border-radius: 10px;
    box-shadow: rgb(255 255 255 / 25%) 0px 0px 0px 0.063em;
    outline: 0px solid rgba(255, 255, 255, 0.25);
    background: rgb(0 25 38 / 20%);
}
.SmallShowcaseItemComponentStyle-container:hover {
transition: 500ms;
    background: rgb(0 25 38 / 20%)
    box-shadow: rgb(255 255 255 / 25%) 0px 0px 0px 0.2em;
}
.shop-item-component:hover{
transition: 500ms;
    background: rgb(0 25 38 / 20%);
    border: 2px solid rgba(255, 255, 255, 0.17);
}
.shop-item-component {
transition: 500ms;
    background: rgb(0 25 38 / 20%);
    border-radius: 12px!important;
    border: 1px solid rgba(255, 255, 255, 0.17);
}
.LargeShowcaseItemComponentStyle-container,
.MediumShowcaseItemComponentStyle-container {
transition: 500ms;
    box-shadow: rgb(255 255 255 / 25%) 0px 0px 0px 0.063em;
    border-radius: 15px;
}
.ShowcaseItemComponentStyle-header {
    background: rgb(0 0 0 / 0%);
}
.ShopSpecialOfferSectionHeaderStyle-container {
transition: 500ms;
    border-radius: 15px;
}
.ShopCategoryComponentStyle-header {
    color: rgb(255, 188, 9);
}
.ShopItemComponentStyle-headerContainer:hover,
.ShopItemComponentStyle-headerContainer {
    background: rgb(255 255 255 / 0%) !important;
}
.BattlePickComponentStyle-descriptionBattle h2 {
    color: rgb(255, 188, 9);
}
.BattlePassLobbyComponentStyle-descriptionMenuPass > div > span {
    color: rgb(255, 188, 9);
}
.SuccessfulPurchaseComponentStyle-container {
    box-shadow: rgb(255 255 255 / 25%) 0px 0px 0px 0.063em;
    border-radius: 15px;
    background: rgb(0 25 38 / 50%);
}
.HeaderComponentStyle-messageBody {
    color: #bbbbbb;
}
.HeaderComponentStyle-messageTitle {
    color: white;
}
.HeaderComponentStyle-messageContainer {
    backdrop-filter: blur(10px) !important;
    background-color: rgb(0 25 38 / 50%) !important;
    border-radius: 15px !important;
    border: 1px solid rgb(255 255 255 / 55%) !important;
}
`;
const body = document.body || document.getElementsByTagName('body')[0],
    style = document.createElement('style');

style.className = 'css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}



body.appendChild(style);

const appendChild = HTMLElement.prototype.appendChild;

HTMLElement.prototype.appendChild = function(element) {
    element?.classList?.forEach(className => {
        if (className.includes('ksc-'))
            return;

        const appendChildEvent = new CustomEvent(className, {
            bubbles: true,
            detail: element
        });

        document.dispatchEvent(appendChildEvent);
    })

    return appendChild.apply(this, arguments);
}
