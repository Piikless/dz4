function testStringObject() {
    const stringObject = {
        string: "Hello world. How are you?",

        // ітератор, який ітерується по кожній другій букві
        *lettersIterator() {
            for (let i = 0; i < this.string.length; i += 2) {
                yield this.string[i];
            }
        },

        // ітератор, який ітерується по словах
        *wordsIterator() {
            const words = this.string.split(" ");
            for (let i = 0; i < words.length; i++) {
                yield words[i];
            }
        },

        // ітератор, який ітерується по реченням
        *sentencesIterator() {
            const sentences = this.string.match(/[^.?!]+[.?!]?/g);
            for (let i = 0; i < sentences.length; i++) {
                yield sentences[i].trim();
            }
        },

        // ітератор, який ітерується по голосним
        *vowelsIterator() {
            const vowels = "aeiouAEIOU";
            for (let i = 0; i < this.string.length; i++) {
                if (vowels.includes(this.string[i].toLowerCase())) {
                    yield this.string[i];
                }
            }
        },

        // генератор, який ітерується по всім ітераторам та виводить результат
        *[Symbol.iterator]() {
            yield* this.lettersIterator();
            yield* this.wordsIterator();
            yield* this.sentencesIterator();
            yield* this.vowelsIterator();
        },
    };

    const expected = [
        "H",
        "l",
        "o",
        "w",
        "d",
        "Hello",
        "world.",
        "How",
        "are",
        "you?",
        "Hello world",
        "How are you",
        "e",
        "o",
        "o",
        "a",
        "e",
        "o",
        "u",
    ];
    const result = [];

    for (let item of stringObject) {
        result.push(item);
    }

    console.log(result);
    console.log(expected);

    if (JSON.stringify(result) === JSON.stringify(expected)) {
        console.log("Test passed");
    } else {
        console.log("Test failed");
    }
}
testStringObject();