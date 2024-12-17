function isNumber(value){
    return !isNaN(value)&& value.trim() !== "";
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomNumber(){
    return Math.floor(1000 + Math.random() * 9000);
}

function generateTags(){
    const input = document.getElementById('numberInput').value;
    const container = document.getElementById('tagsContainer');
    container.innerHTML = '';

    if(!isNumber(input)){
        alert("please input number");
        return;
    }

    const count = parseInt(input, 10);
    const preDefinedTags = [
        'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'article',
        'section', 'header', 'footer', 'aside', 'nav', 'figure',
        'figcaption', 'main', 'button', 'label', 'input'
    ];

    for(let i = 0; i < count; i++){
        const randomTag = preDefinedTags[Math.floor(Math.random() * preDefinedTags.length)];
        const newElement = document.createElement(randomTag);

        newElement.classList.add('random-tag');
        newElement.style.backgroundColor = getRandomColor();
        newElement.textContent = getRandomNumber();

        container.appendChild(newElement);
    }
}