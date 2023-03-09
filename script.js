const quotes = [
    "You're a wizard, Harry",
    "I am your father",
    "One small step for man. One giant leap for mankind",
    "Use the force",
    "Do not pity the dead, Harry. Pity the living, and, above all those who live without love",
    "There is nothing to fear but fear itself",
    "I'll be back",
    "You're gonna need a bigger boat",
    "Here's looking at you, kid",
    "A martini. Shaken, not stirred",
    "That'll do, pig. That'll do.",
    "Where we're going we don't need roads",
    "To infinity and beyond!",
    "Are you not entertained?",
    "THIS. IS. SPARTA.",
    "Why so serious?",
    "I love lamp",
    "Stop trying to make fetch happen",
    "Jagshemash!",
    "Not quite my tempo",
    "I drink your milkshake",
    "With great power comes great responsibility",
    "May the odds be ever in your favour",
    "There's a snake in my boot"
]

const authors = [
    "Albus Dumbledore",
    "Luke Skywalker",
    "Yoda",
    "Jesus",
    "Jon Snow",
    "Mother Theresa",
    "Albert Einstein",
    "Homer Simpson",
    "Karl Marx",
    "Socrates",
    "Oprah Winfrey",
    "Leonardo Da Vinci",
    "Voldemort",
    "Darth Vader"
]

const qualifiers = [
    "probably",
    "so I've heard",
    "it's been said",
    "maybe",
    "perhaps",
    "possibly",
    "rumour has it",
]

const randomNum = arr => Math.floor(Math.random() * arr.length)

const quoteGen = () => {
    const quote = quotes[randomNum(quotes)]
    const author = authors[randomNum(authors)]
    const qualifier = qualifiers[randomNum(qualifiers)]

    return `"${quote}" - ${author}, ${qualifier}`
}

console.log(quoteGen())