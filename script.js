const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why do Java developers wear glasses? Because they don't see sharp!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
    "Why was the developer unhappy at their job? They wanted arrays!",
    "Why do Python programmers prefer using snakes? Because they can't find their 'self'!",
    "What is a programmer's favorite hangout place? Foo Bar!",
    "Why did the programmer quit his job? Because he didn't get arrays!",
    "Why do programmers hate nature? It has too many bugs!",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
    "Why did the programmer go broke? Because he used up all his cache!",
    "How do you comfort a JavaScript bug? You console it!",
    "Why do C programmers have it easy? Because they can just 'printf' their problems away!",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings!",
    "What do you call a programmer from Finland? Nerdic!",
    "Why did the developer stay at his computer all night? He was debugging his sleep schedule!",
    "Why do programmers prefer iOS development? Because they can't handle the Androids!",
    "What do you call a programmer who doesn't comment their code? A 'code' criminal!",
    "Why did the programmer get kicked out of school? Because he kept breaking the class!",
    "Why did the web developer walk out of the meeting? Too many 'div's and not enough 'span's!",
    "Why do programmers hate the outdoors? Too many 'bugs'!",
    "Why did the developer bring a ladder to work? Because they wanted to reach new heights in their career!",
    "What do you call a programmer who can’t stop coding? A 'code'pendent!",
    "Why did the programmer prefer dark chocolate? Because it has less 'bit'!",
    "Why did the SQL query break up with the database? It found someone with better 'relations'!",
    "Why do programmers prefer using the keyboard? Because they can't find the 'mouse'!",
    "What do you call a programmer who loves nature? A 'tree' programmer!",
    "Why did the developer go to therapy? He had too many unresolved 'issues'!",
    "Why do programmers like nature? Because it has great 'trees'!",
    "A SQL query walks into a bar and asks, 'Can I join you?'",
    "Debugging: Being the detective in a crime movie where you are also the murderer.",
    "A programmer's favorite place to hang out? The 'byte'-sized café!",
    "Two strings walk into a bar. The bartender says, 'Sorry, we don’t serve your kind here.' They reply, 'But we can concatenate!'",
    "A programmer's life is like a software update: it takes longer than expected and often breaks something.",
    "In a world full of variables, be a constant!",
    "A computer once beat me at chess, but it was no match for me at kickboxing.",
    "I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.",
    "Why did the developer go broke? Because he lost his domain in a bet!",
    "A programmer's favorite music genre? Algo-rhythm!",
    "When I told my computer I needed a break, it froze. Guess it took me literally!",
    "Why did the developer bring a pencil to work? In case they needed to draw some conclusions!",
    "A programmer's favorite snack? Chips and bytes!",
    "I asked my computer for a joke, but it just gave me a syntax error.",
    "Why do programmers prefer dark humor? Because light humor attracts bugs!",
    "A code review is like a family dinner: everyone has an opinion, and no one agrees!",
    "When the programmer got locked out of their house, they just opened a new window.",
    "I tried to write a joke about UDP, but I’m not sure if you’ll get it.",
    "Why did the developer stay calm during the storm? Because they knew how to handle exceptions!",
    "A programmer's favorite exercise? Running a loop!"
];

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

document.getElementById("joke").innerText = getRandomJoke();
