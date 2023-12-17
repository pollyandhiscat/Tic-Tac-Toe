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

    let participant_name = participant['name'];
    let participant_character = participant['player_character'];
    participant_character === undefined ? participant_character = participant['computer_character'] : participant_character = participant_character;


    // Participant is computer.
    if (participant_name == 'Mr. CPU') {

        let cpu_move = [Math.floor(Math.random() * current_board.length)];
        let cpu_position = current_board[cpu_move];

        while (cpu_position != '') {

            cpu_move = Math.floor(Math.random() * current_board.length);
            cpu_position = current_board[cpu_move];

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
            player_position = current_board[player_move];
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

        (moves == 0 || current_turn == 'computer') ? current_turn = 'player' : current_turn = 'computer';
        return current_turn;

    }

    const check_for_winner = () => {

        /*

        Checks the current board for a winner.
        If no winner is found and the board is
        filled up, the game is considered a tie.

        */

        player_character = player['player_character'];
        computer_character = computer['computer_character'];
        let winner = "";

        const check_for_winner_by_row = () => {


            /*
            
            Checks to see if either player or computer
            has three in a row horizontally. If so, their name
            is returned as the winner.

            */

            winner = "";

            let row_1_array = board.slice(0, 3);
            let row_2_array = board.slice(3, 6);
            let row_3_array = board.slice(6, -1);

            let row_1 = row_1_array.join('');
            let row_2 = row_2_array.join('');
            let row_3 = row_3_array.join('');

            let player_win_row = player_character + player_character + player_character;
            let computer_win_row = computer_character + computer_character + computer_character;

            if (row_1 == player_win_row || row_2 == player_win_row || row_3 == player_win_row) {

                winner = 'player';
                return winner;
            }

            else if (row_1 == computer_win_row || row_2 == computer_win_row || row_3 == computer_win_row) {

                winner = 'computer';
                return winner;
            }

            else {

                return winner;
            }

        }

        const check_for_winner_by_column = () => {

            /*

            Checks to see if either player or computer
            has three in a row vertically.

            */

            winner = "";

            let column_1 = board[0] + board[3] + board[6];
            let column_2 = board[1] + board[4] + board[7];
            let column_3 = board[2] + board[5] + board[8];

            let player_win_column = player_character + player_character + player_character;
            let computer_win_column = computer_character + computer_character + computer_character;

            if (column_1 == player_win_column || column_2 == player_win_column || column_3 == player_win_column) {

                winner = 'player';
                return winner;
            }

            else if (column_1 == computer_win_column || column_2 == computer_win_column || column_3 == computer_win_column) {

                winner = 'computer';
                return winner;
            }

            else {

                return winner;
            }

        }

        [
            x, x, x,
            0, 0, 0,
            x, x, x
        ]

        const check_for_winner_by_diagonal = () => {

            /*

            Checks to see if either player or computer
            has three in a row diagonally. 

            */

            winner = "";

            let diagonal_1 = board[0] + board[4] + board[8];
            let diagonal_2 = board[2] + board[4] + board[6];

            let player_win_diagonal = player_character + player_character + player_character;
            let computer_win_diagonal = computer_character + computer_character + computer_character;

            if (diagonal_1 == player_win_diagonal || diagonal_2 == player_win_diagonal) {

                winner = 'player';
                return winner;
            }

            else if (diagonal_1 == computer_win_diagonal || diagonal_2 == computer_win_diagonal) {

                winner = 'computer';
                return winner;
            }

            else {

                return winner;
            }

        }

        let row_check = check_for_winner_by_row();

        if (row_check != '') {

            return row_check;
        }


        let column_check = check_for_winner_by_row();

        if (column_check != '') {

            return column_check;
        }

        let diagonal_check = check_for_winner_by_diagonal();

        if (diagonal_check != '') {

            return diagonal_check;
        }

        return winner;

    }

    while (game_running == true) {

        current_turn = next_turn();

        if (moves == 10) {

            console.log(board);
            return;
        }

        // The player gets manual control over their move.
        if (current_turn == 'player') {

            make_move(player, board);
            moves += 1;

        }

        // The computer randomly picks an open box for its move.
        else {

            make_move(computer, board);
            moves += 1;
        }

    }

}

let game1 = play_game('piddyadams');
