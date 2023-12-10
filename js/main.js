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

        Creates the computer.

        */

        let name = 'Mr. CPU';
        let computer_winning_tally = 0;
        let computer_losing_tally = 0;

        return {name, computer_character, computer_winning_tally, computer_losing_tally};

    })();


    return {game_board, player, computer};

}


function make_move(participant) {

    /*

    Takes the player or computer object
    and makes a move for them. If the player
    is making a move, manual entry of the move
    is given to the player. Otherwise the computer's
    move will be a randomly selected square.

    */

    participant = participant['name'];

    // Participant is computer.
    if (participant == 'Mr. CPU') {

        let cpu_move = characters[Math.floor(Math.random() * game_board.length)]



    }


    // Participant is player.
    else {


    }


}

function play_game(player_name) {

    let game = create_game(player_name);
    let player = game['player'];
    let computer = game['computer'];
    let board = game['game_board'];
    let game_running = true;
    let turns = ['player', 'computer'];
    let current_turn = turns[0];

    const next_turn = () => {

        /*

        Determines who has the next turn.

        */

        current_turn == 'player' ? 'computer' : 'player';
        return current_turn;

    }

    while (game_running == true) {





    }


}

let game1 = create_game('piddyadams');
console.log(game1);
console.log('');
