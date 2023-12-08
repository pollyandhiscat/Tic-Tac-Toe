// game object
    // board object
    // player object
        // player character
        // player move
        // player winning tally
        // player losing tally


function create_game(player_name='Player') {

    /*

    Starts a tic tac toe game.
    Unless specified otherwise, the player name
    is simply: 'player'.

    */

    let characters = ['X', 'O'];

    const game_board = (function() {

        /*

        Creates and returns the game board
        with 9 spaces.

        */

        let board = new Array(9).fill('');
        return board;

    })();

    const player_character = (function() {

        /*

        Randomly assigns the player
        character, either 'X' or 'O'.

        */

        return characters[Math.floor(Math.random() * characters.length)];

    })();

    const computer_character = (function() {

        /*

        Assigns the opposite character
        of player character to the computer.

        */

        player_character == 'X' ? computer_selection = 'O' : computer_selection = 'X';
        return computer_selection;

    })();

    const player = (function() {

        /*

        Creates the player.

        */

        let name = player_name;
        let player_winning_tally = 0;
        let player_losing_tally = 0;

        return {name, player_character, player_winning_tally, player_losing_tally};

    })();

    const computer = (function() {

        /*

        Creates the player.

        */

        let name = 'Mr. CPU';
        let computer_winning_tally = 0;
        let computer_losing_tally = 0;

        return {name, computer_character, computer_winning_tally, computer_losing_tally};

    })();


    return {game_board, player, computer};

}