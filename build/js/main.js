var playBtn = document.querySelector(".bonus__main-wheel-btn"), main = document.querySelector(".bonus__main"),
    chips = document.querySelectorAll(".bonus__chip"), popupChips = document.querySelectorAll(".bonus__overlay-chip"),
    firstWoman = document.querySelector(".bonus__overlay-firstWoman"),
    secondWoman = document.querySelector(".bonus__overlay-secondWoman"),
    wheel = document.querySelector(".bonus__main-wheel-reel"), overlay = document.querySelector(".bonus__overlay"),
    popupFirst = document.querySelector(".bonus__firstWin"),
    popupFirstBtn = document.querySelector(".bonus__firstWin-btn"),
    popupSecond = document.querySelector(".bonus__secondWin"), overflow = document.querySelector("body"),
    video = document.querySelector(".bonus__main-video-bg"), wrapper = document.querySelector(".bonus");

function videoSource(e, t, o) {
    var r;
    1024 < window.innerWidth && ((r = document.createElement("source")).src = t, r.type = o, video.appendChild(r))
}

window.onload = videoSource(video, "img/video.mp4", "video/mp4");
var triesCounter = 0;

function runFirstRotation() {
    wheel.classList.add("reel-rotation-first"), playBtn.classList.remove("pulse-btn"), playBtn.style.cursor = "default", wrapper.style.pointerEvents = "none", setTimeout(function () {
        doAfterFirstRotation()
    }, 6e3), triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = "rotate(992deg)", wheel.classList.remove("reel-rotation-first"), overlay.classList.add("win-tab"), overlay.classList.add("win-mob"), firstWoman.classList.remove("hide"), displayPopup(popupFirst), wrapper.style.pointerEvents = "auto", overflow.style.overflow = "hidden", setTimeout(function () {
        playBtn.classList.add("pulse-btn"), playBtn.style.cursor = "pointer"
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add("reel-rotation-second"), playBtn.classList.remove("pulse-btn"), playBtn.style.cursor = "default", overflow.style.overflow = "hidden", wrapper.style.pointerEvents = "none", setTimeout(function () {
        doAfterSecondRotation()
    }, 6e3), triesCounter++
}

function doAfterSecondRotation() {
    overlay.classList.add("win-tab"), overlay.classList.add("win-mob"), secondWoman.classList.remove("hide"), displayPopup(popupSecond), wrapper.style.pointerEvents = "auto"
}

function displayPopup(e) {
    overlay.classList.remove("opacity-overlay"), e.classList.remove("hide"), main.classList.add("blur"), chips.forEach(function (e) {
        e.classList.add("blur")
    }), popupChips.forEach(function (e) {
        e.classList.remove("hide")
    })
}

playBtn.addEventListener("click", function () {
    (0 === triesCounter ? runFirstRotation : runSecondRotation)()
}), popupFirstBtn.addEventListener("click", function () {
    main.classList.remove("blur"), firstWoman.classList.add("hide"), chips.forEach(function (e) {
        e.classList.remove("blur")
    }), overlay.classList.add("opacity-overlay"), popupFirst.classList.add("hide"), overflow.style.overflow = "unset", overlay.classList.remove("win-tab"), overlay.classList.remove("win-mob")
}), function () {
    var e, r = new URL(window.location.href),
        a = ["l", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "param1", "param2"];
    r.searchParams.has("redirectUrl") && 4 === (e = new URL(r.searchParams.get("redirectUrl"))).href.match(/\//g).length && e.searchParams.get("l") && localStorage.setItem("redirectUrl", e.href), a.forEach(function (e) {
        r.searchParams.has(e) && localStorage.setItem(e, r.searchParams.get(e))
    }), ["affid", "cpaid"].forEach(function (e) {
        r.searchParams.has(e) && localStorage.setItem(e, r.searchParams.get(e))
    }), window.addEventListener("click", function (e) {
        var t, o = e.target.closest("a");
        "https://tds.favbet.partners" === o.getAttribute("href") && o && (e.preventDefault(), localStorage.getItem("redirectUrl") ? t = new URL(localStorage.getItem("redirectUrl")) : (t = new URL(o.href), affid = localStorage.getItem("affid"), cpaid = localStorage.getItem("cpaid"), affid && cpaid && (t.pathname = "/" + affid + "/" + cpaid)), a.forEach(function (e) {
            r.searchParams.has(e) && t.searchParams.set(e, localStorage.getItem(e))
        }), document.location.href = t)
    })
}();