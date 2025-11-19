const notes = [
    {
        text: "наш первый день вместе 🩷",
        img: "images/11-oct.jpg"
    },
    {
        text: "гуляли, ели что-то вкусное, много смеялись",
        img: "" // нет фото — и это нормально!
    },
    {
        text: "ты спал у меня на плече всю дорогу 🫶",
        img: "images/day3.jpg"
    }
];

// автоматическое создание стикеров

const container = document.getElementById("notes-container");

notes.forEach((note, i) => {
    const div = document.createElement("div");
    div.className = `sticky-note note-${(i % 6) + 1}`;
    div.textContent = note.text.slice(0, 40) + (note.text.length > 40 ? "…" : "");

    div.onclick = () => openPopup(note.text, note.img);

    container.appendChild(div);
});

// popup
function openPopup(text, imageSrc) {
    const popup = document.getElementById("popup");
    const img = document.getElementById("popup-img");
    const p = document.getElementById("popup-text");

    p.textContent = text;

    if (!imageSrc || imageSrc.trim() === "") {
        img.style.display = "none";
    } else {
        img.style.display = "block";
        img.src = imageSrc;
    }

    popup.style.display = "flex";
}

document.querySelector(".close").onclick = () => {
    document.getElementById("popup").style.display = "none";

};
