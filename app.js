//UbbiDubbi to English translator//
const ubbiDubbiTranslator = (sentence) => {
    const vowels = "aeiou";
    const insert = "ub"
    let result = "";

    for (let char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            result += insert + char;
        } else {
            result += char;
        }
    }
    return result;
};

//English to UbbiDubbi translator
const ubbiDubbiToEnglish = (sentence, ub = "ub") => {
    const vowels = "aeiou";
    let result = "";
    let i = 0;

    while (i < sentence.length) {
        if (
            sentence.slice(i, i + ub.length) === ub &&
            vowels.includes(sentence[i + ub.length])
        ) {
            i += ub.length;
        }
        result += sentence[i];
        i++;
    }

    return result;
};

//Event listener that translates back to English
document.getElementById("translationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const sentence = document.getElementById("englishInput").value;
    const translated = ubbiDubbiTranslator(sentence);

    document.getElementById("label").textContent = `Sentence translates to:`;
    document.getElementById("result").textContent = translated;
    document.getElementById("copyBtn").style.display = "inline-block";
});

document.getElementById("translationForm2").addEventListener("submit", (e) => {
    e.preventDefault();

    const sentence = document.getElementById("ubbiInput").value;
    const translated = ubbiDubbiToEnglish(sentence);

    document.getElementById("label").textContent = `Sentence translates to:`;
    document.getElementById("result").textContent = translated;
    document.getElementById("copyBtn").style.display = "inline-block";
})

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("result").textContent;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.classList.add("copied");
    btn.textContent = "Copied!";

    setTimeout(() => {
      btn.classList.remove("copied");
      btn.textContent = "Copy Text";
    }, 1200);
  });
});

//English to Pig Latin translator
const pigLatin = (word) => {
    const vowels = ["a", "e", "i", "o", "u"];
    const lowerCase = word.toLowerCase();

    if (vowels.includes(lowerCase[0])) {
        return lowerCase + "way";
    }

    let vowelIndex = -1;
    for (let i = 0; i < lowerCase.length; i++) {
        if (vowels.includes(lowerCase[i])) {
            vowelIndex = i;
            break;
        }
    }

    if (vowelIndex === -1) {
        return lowerCase + "ay";
    }

    return lowerCase.slice(vowelIndex) + lowerCase.slice(0, vowelIndex) + "ay";
};

const pigLatinTranslator = (sentence) => {
    return sentence
        .split(" ")
        .map(word => pigLatin(word))
        .join(" ");
};

document.getElementById("translationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const sentence = document.getElementById("translationInput").value;
    const translated = pigLatinTranslator(sentence);

    document.getElementById("label").textContent = `Sentence translates to:`;
    document.getElementById("result").textContent = translated;
    document.getElementById("copyBtn").style.display = "inline-block";
});
