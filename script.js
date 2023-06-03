const jokes = [
    "Why don't eggs tell jokes? Because they might crack Up!",
    "Why don't skeletons fights each other? They don't have the guts!", 
    "I'm reading a book about anti-gravity. It's impossible to  put down!",
    "WHy did the tomato turn red? Because it saw the salad dressing!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "A Quick Brown Fox Jumps Over a Lazy Dog",
    
];
    // Function to generate a Random Joke
    function generateJoke(){
        const jokeElement = document.getElementById('joke-text');
        // joke-text bhayeko thau ma DOM manipulation lagayera  values haru insert gareko 
        const randomIndex = Math.floor(Math.random()*jokes.length);
        // Here we use the random value from the given input 
        console.log(randomIndex);
        jokeElement.innerHTML = jokes[randomIndex];
        // here we display the value using the innerHTML 
        
    }