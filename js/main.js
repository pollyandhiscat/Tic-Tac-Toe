function create_game(player_name = 'Player') {

    /*

    Starts a tic tac toe game.
    Unless specified otherwise, the player name
    is simply: 'player'.

    */

    let characters = ['X', 'O'];

    const game_board = (function () {

        /*

        Creates and returns the game board
        with 9 spaces.

        */

        let board = new Array(9).fill('');
        return board;

    })();

    const player_character = (function () {

        /*

        Randomly assigns the player
        character, either 'X' or 'O'.

        */

        return characters[Math.floor(Math.random() * characters.length)];

    })();

    const computer_character = (function () {

        /*

        Assigns the opposite character
        of player character to the computer.

        */

        player_character == 'X' ? computer_selection = 'O' : computer_selection = 'X';
        return computer_selection;

    })();

    const player = (function () {

        /*

        Creates the player.

        */

        let name = player_name;
        let player_winning_tally = 0;
        let player_losing_tally = 0;

        return { name, player_character, player_winning_tally, player_losing_tally };

    })();

    const computer = (function () {

        /*

        Creates the computer.

        */

        let name = 'Mr. CPU';
        let computer_winning_tally = 0;
        let computer_losing_tally = 0;

        return { name, computer_character, computer_winning_tally, computer_losing_tally };

    })();


    return { game_board, player, computer };

}


function make_move(participant, current_board) {

    /*

    Takes the player or computer object
    and makes a move for them. If the player
    is making a move, manual entry of the move
    is given to the player. Otherwise the computer's
    move will be a randomly selected square. Moves are
    made on the supplied game board.

    */

    participant = participant['name'];
    participant_character = participant['character'];


    // Participant is computer.
    if (participant == 'Mr. CPU') {

        let cpu_move = characters[Math.floor(Math.random() * current_board.length)];
        let cpu_position = current_board[cpu_move];

        while (cpu_position != '') {

            cpu_move = characters[Math.floor(Math.random() * current_board.length)]

        }

        // Fill in the computer move on the board.
        current_board[cpu_move] = participant_character;
        // May need to return the board here.

    }


    // Participant is player.
    else {

        let player_move = prompt(`Make your move. Here is the current board: ${current_board}`);
        let player_position = current_board[player_move];

        while (player_position != '') {

            player_move = prompt(`That space is taken. Choose another. Here is the current board: ${current_board}`);
        }

        // Fill in the player move on the board.
        current_board[player_move] = participant_character;

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
    let moves = 0;

    const next_turn = () => {

        /*

        Determines who has the next turn.

        */

        moves == 0 || current_turn == 'computer' ? 'player' : 'computer';
        return current_turn;

    }

    while (game_running == true) {

        current_turn = next_turn();


        // The player gets manual control over their move.
        if (current_turn == 'player') {

            make_move(player, board);

        }

        // The computer randomly picks an open box for its move.
        else {

            make_move(computer, board);
        }

    }


}

let game1 = play_game('piddyadams');
