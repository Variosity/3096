//Example Scripture Data
const scriptureData = [
    {
        title: "Creation",
        text: "In the beginning, there was the void, and from the void, the Universe was born..."
    },
    {
        title: "The First Orbit",
        text: "The first orbit marks the establishment of the lunisolar calendar..."
    }
];

//Load Scripture into the Section
export function loadScripture() {
    const container = 
document.getElementById('scripture-content');
    scriptureData.forEach((scripture) => {
    const div =
document.createElement('div');
    div.classList.add('scripture-entry');

    const title =
document.createElement('h3');
    title.innerText = scripture.text;

    const text =
document.createElement('p');
    text.innerText = scripture.text;

    div.appendChild(title);
    div.appendChild(text);
    container.appendChild(div);
    });
}