const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';

const generateRandomStringOfLength = (length) => {
    let random = "";    
    for (let i = 0; i < length; i++) {
        random += lowercaseChars[Math.floor(Math.random() * 25)];
    }
    return random;
}

const running = [];

const decodeString = (el, index) => {
    const original = el.getAttribute('data-original');
    const cycles = 3;
    const previouslyRunning = running[index];
    running[index] = !running[index];
    el.innerText = original;
    
    const decodeChar = (curr, cycle) => {
        if (running[index] === previouslyRunning) {
            return;
        };
        const random = generateRandomStringOfLength(original.length - curr.length);
        setTimeout(() => {
            el.innerText = curr + random;
            if (curr !== original) {
                if (cycle === 0) {
                    decodeChar(curr += original[curr.length], cycles);
                } else {
                    decodeChar(curr, cycle - 1);
                }
            }
        }, 20);
    }
    decodeChar("", cycles);
}

Array.from(document.getElementsByTagName("li")).forEach((el, index) => {
    el.addEventListener("mouseover", () => decodeString(el.getElementsByClassName("decode")[0], index));
})