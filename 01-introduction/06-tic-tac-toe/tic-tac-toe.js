(function( window, document, undefined ) {
	var
		N = 3,
		X = 'X',
		O = 'O',
		CELL_COUNT = N * N,
		players = [ X, O ],
		moveCount = 0,
		field = [
			[
				undefined, undefined, undefined
			],
			[
				undefined, undefined, undefined
			],
			[
				undefined, undefined, undefined
			]
		],
		currentPlayer = X;

	function isCellEmpty (cell) {
		return !cell.innerHTML.trim().length;
	}

	function colorCell (row, col) {
		[].forEach.call(
			document.querySelectorAll('.js-row-' + row + '.js-col-' + col),
			function (cell) {
				cell.classList.add('cell-winner');
			}
		);
	}

	function colorRow (row) {
		for (var i = 0; i < N; i++) {
			colorCell(row, i);
		}
	}

	function colorCol (col) {
		for (var i = 0; i < N; i++) {
			colorCell(i, col);
		}
	}

	function colorForwardDiagonal () {
		for (var i = 0; i < N; i++) {
			colorCell(i, i);
		}
	}

	function colorBackwardDiagonal () {
		for (var i = 0; i < N; i++) {
			colorCell(i, N - 1 - i);
		}
	}

	function checkWinner (row, col) {
		var i;

		for (i = 0; i < N; i++) {
			if (field[row][i] !== currentPlayer) {
				break;
			}

			if (i === N - 1) {
				colorRow(row);
				return true;
			}
		}

		for (i = 0; i < N; i++) {
			if (field[i][col] !== currentPlayer) {
				break;
			}

			if (i === N - 1) {
				colorCol(col);
				return true;
			}
		}

		if ( row === col ) {
			for (i = 0; i < N; i++) {
				if (field[i][i] !== currentPlayer) {
					break;
				}

				if (i === N - 1) {
					colorForwardDiagonal();
					return true;
				}
			}
		}

		if ( +row === N - 1 - col ) {
			for (i = 0; i < N; i++) {
				if (field[i][N - i - 1] !== currentPlayer) {
					break;
				}

				if (i === N - 1) {
					colorBackwardDiagonal();
					return true;
				}
			}
		}

		return false;
	}

	function fillCell (cell) {
		cell.innerHTML = currentPlayer;
		field[cell.dataset.row][cell.dataset.col] = currentPlayer;
	}

	function nextPlayer () {
		currentPlayer = currentPlayer === X ? O : X;
		document.querySelectorAll('.js-player-turn')[0].innerHTML = currentPlayer;
	}

	function checkDraw () {
		return moveCount === CELL_COUNT;
	}

	function announceResult (isDraw) {
		var resultOutput = document.querySelectorAll('.js-winner')[0],
			resultText = isDraw ? 'Draw' : 'Winner is ' + currentPlayer,
			fieldElement = document.querySelectorAll('.js-field')[0];

		resultOutput.innerHTML += resultText;
		resultOutput.classList.remove('hidden');

		fieldElement.removeEventListener( 'click', handleClick, true );
		fieldElement.classList.remove('table-hover');
	}

	function playerPlay (cell) {
		moveCount++;
		fillCell(cell);
		if (checkWinner(cell.dataset.row, cell.dataset.col)) {
			announceResult();
		} else if (checkDraw()) {
			announceResult(true);
		} else {
			nextPlayer();
		}
	}

	function playerClicked ( cell ) {
		if (isCellEmpty(cell)) {
			playerPlay(cell);
		}
	}

	function handleClick ( event ) {
		if ( event.target.tagName.toLowerCase() === 'td' ) {
			playerClicked( event.target );
		}
	}

	document.querySelectorAll('.js-field')[0].addEventListener(
		'click',
		handleClick,
		true
	);
}(window, window.document));
