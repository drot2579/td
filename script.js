const vaka = {
    asili: null,
    temiz: null,
    kucukturOn: null,
    kucukturBes: null,
};

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


/* animations */

const fade = {
    out: {
        frames: [{ display: "none", opacity: 0 }],
        timing: { duration: 0, fill: "forwards" },
        animate(...targets) {
            return targets.forEach((target) => {
                target.animate(this.frames, this.timing)
            });
        }
    },
    in: {
        frames: [{ display: "flex", opacity: 1 }],
        timing: { duration: 1000, fill: "forwards",delay:1000 },
        animate(...targets) {
            return targets.forEach((target) => {
                target.animate(this.frames, this.timing)
            });
        }
    }
};
const mainElements = document.querySelectorAll("main>*")



/* Reset button */
btnEl.yeni.addEventListener("click", () => {
    vaka.asili = vaka.temiz = vaka.kucukturBes = vaka.kucukturOn = null;
    mainElements.forEach((el) => {
        fade.out.animate(el)
    })
    fade.in.animate(quesDiv.asili);
});
/* Asili button function */
quesDiv.asili.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        vaka.asili = e.target.value;
        fade.out.animate(quesDiv.asili);
        fade.in.animate(quesDiv.temiz);
    });
});
/* Temiz button function */
quesDiv.temiz.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        vaka.temiz = e.target.value;
        fade.out.animate(quesDiv.temiz);
        if (vaka.asili && vaka.temiz) { fade.in.animate(quesDiv.kucukturOn); }
        if (vaka.asili && !vaka.temiz) { fade.in.animate(quesDiv.kucukturBes); }
        if (!vaka.asili && vaka.temiz) { fade.in.animate(resDiv.td, btnEl.yeni); }
        if (!vaka.asili && !vaka.temiz) { fade.in.animate(resDiv.tig, btnEl.yeni); }

    });
});

/* KucukturOn button function */
quesDiv.kucukturOn.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        vaka.kucukturOn = e.target.value;
        fade.out.animate(quesDiv.kucukturOn);
        if (vaka.kucukturOn) {
            fade.in.animate(resDiv.ok, btnEl.yeni);
        }
        if (!vaka.kucukturOn) {
            fade.in.animate(resDiv.td, btnEl.yeni);
        }
    });
});
/* KucukturBes button function */
quesDiv.kucukturBes.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        vaka.kucukturBes = e.target.value;
        fade.out.animate(quesDiv.kucukturBes);
        if (vaka.kucukturBes) {
            fade.in.animate(resDiv.ok, btnEl.yeni);
        }
        if (!vaka.kucukturBes) {
            fade.in.animate(resDiv.td, btnEl.yeni);
        }
    });
});


/*      START     */
// fast fadeout for all divs at the start, then slow fade
mainElements.forEach((el) => {
    fade.out.animate(el)
})
fade.out.timing.duration = 1000
fade.in.animate(quesDiv.asili);
















































