let asili;
let temiz;
let kucukturOn;
let kucukturBes;

const watch = {
    asili,
    temiz,
    kucukturOn,
    kucukturBes,
};


// document.body.classList.

/* element references */
const quesDiv = {
    asili: document.querySelector(".asili"),
    temiz: document.querySelector(".temiz"),
    kucukturBes: document.querySelector(".kucukturBes"),
    kucukturOn: document.querySelector(".kucukturOn"),
};

const resDiv = {
    ok: document.querySelector(".ok"),
    td: document.querySelector(".td"),
    tig: document.querySelector(".tig"),
};

const btnEl = {
    yeni: document.querySelector(".yeni"),
};

/* hide-show functions */
const hide = (...els) => {els.forEach((el) => {el.classList.add("hide");});};
const show = (...els) => {els.forEach((el) => {el.classList.remove("hide");});};


/* Reset button */
btnEl.yeni.addEventListener("click", (e) => {
    asili = temiz = kucukturBes = kucukturOn = null;
    hide(...document.querySelectorAll("main>*"))
    show(quesDiv.asili)
});
/* Asili button function */
quesDiv.asili.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        asili = e.target.value;
        hide(quesDiv.asili);
        show(quesDiv.temiz);
    });
});

/* Temiz button function */
quesDiv.temiz.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        temiz = e.target.value;
        hide(quesDiv.temiz);
        if (asili && temiz) { show(quesDiv.kucukturOn); }
        if (asili && !temiz) { show(quesDiv.kucukturBes); }
        if (!asili && temiz) { show(resDiv.td, btnEl.yeni); }
        if (!asili && !temiz) { show(resDiv.tig, btnEl.yeni); }
        
    });
});

/* KucukturOn button function */
quesDiv.kucukturOn.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        kucukturOn = e.target.value;
        hide(quesDiv.kucukturOn);
        if (kucukturOn) {
            show(resDiv.ok, btnEl.yeni);
        }
        if (!kucukturOn) {
            show(resDiv.td, btnEl.yeni);
        }
    });
});
/* KucukturBes button function */
quesDiv.kucukturBes.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        kucukturBes = e.target.value;
        hide(quesDiv.kucukturBes);
        if (kucukturBes) {
            show(resDiv.ok, btnEl.yeni);
        }
        if (!kucukturBes) {
            show(resDiv.td, btnEl.yeni);
        }
    });
})
























































