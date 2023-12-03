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

    const create_board = () => {

        /*

        Creates the game board
        with 9 spaces.

        */

        let board = new Array(9).fill('');
        let characters = ['X', 'O'];

    }

    const assign_player_character = () => {

        /*

        Randomly assigns the player
        character, either 'X' or 'O'.

        */

        const player_character = characters[Math.floor(Math.random() * characters.length)];

    }

    const assign_computer_character = () => {

        /*

        Assigns the opposite character
        of player character to the computer.

        */

        let player_selection = assign_player_character().player_character;
        player_selection == 'X' ? computer_selection = 'O' : computer_selection = 'X';
    }

    const create_player = (player_name) => {

        /*

        Creates the player.

        */

        let name = player_name;
        let player_character = assign_player_character();
        let player_winning_tally = 0;
        let player_losing_tally = 0;
    }


}