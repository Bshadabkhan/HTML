let secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let message;

        function guessNumber() {
            let input = document.getElementById("guess").value;
            let number = parseInt(input);

            if (number === secretNumber) {
                attempts++;
                message = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
            } else if (number > secretNumber) {
                attempts++;
                message = "Your guess is too high. Try again.";
            } else {
                attempts++;
                message = "Your guess is too low. Try again.";
            }

            document.getElementById("message").innerText = message;
        }