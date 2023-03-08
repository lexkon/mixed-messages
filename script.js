const quotes = [
    "You're a wizard, Harry",
    "I am your father",
    "One small step for man. One giant leap for mankind",
    "Use the force",
    "Do not pity the dead. Pity the living, and, above all those who live without love",
    "Courage is found in unlikely places",
    "Art is never finished, only abandoned",
    "Peace comes from within. Do not seek it without",
    "There was never a good war, or a bad peace",
    "There is nothing to fear but fear itself",
    "You're only as good as your last haircut",
    "I'll be back",
    "You're gonna need a bigger boat",
    "Here's looking at you, kid",
    "A martini. Shaken, not stirred",
    "That'll do, pig. That'll do.",
    "Where we're going we don't need roads",
    "To infinity and beyond!"
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
    "Leonardo Da Vinci"
]

const qualifiers = [
    "probably",
    "so I've heard",
    "it's been said",
    "maybe",
    "perhaps",
    "possibly"
]

const randomNum = arr => Math.floor(Math.random() * arr.length)

const quoteGen = () => {
    const quote = quotes[randomNum(quotes)]
    const author = authors[randomNum(authors)]
    const qualifier = qualifiers[randomNum(qualifiers)]

    return `"${quote}" - ${author}, ${qualifier}`
}

console.log(quoteGen())