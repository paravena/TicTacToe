import React, { useCallback, useMemo, useState } from 'react';
import styled from "styled-components";
import Board from './components/Board'
import { SquareValue } from "./models/models";
import calculateWinner from "./helpers/calculateWinner";
import { Colors } from "./models/themes";

interface Props {
    size: number;
}

export const TicTacToe = ({ size }: Props) => {
    const [history, setHistory] = useState<SquareValue[][]>([Array(size * size).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);

    const ticTacToeWinner = useMemo(() => calculateWinner(size), [size]);
    const winner = useMemo(() => ticTacToeWinner(history[stepNumber]), [ticTacToeWinner, history]);
    const x0 = useMemo(() => xIsNext ? "X" : "O", [xIsNext]);

    const onSquareClick = (index: number) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if (winner || squares[index]) return;
        squares[index] = x0;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = useCallback((step: number) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    }, []);

    const renderMoves = useCallback(() =>(
        <List>
            {
                history.map((_step, move) => {
                    const desc = move ? `Go to move #${move}` : "Go to Start";
                    return (
                        <ListItem key={move}>
                            <StepButton onClick={() => jumpTo(move)}>{desc}</StepButton>
                        </ListItem>
                    )
                })
            }
        </List>
    ), [history]);

    return (
        <>
            <Title1>Tic Tac Toe Game</Title1>
            <Board squares={history[stepNumber]} size={size}  onSquareClick={onSquareClick} />
            <Info>
                <Moves>
                    <Title3>History</Title3>
                    {renderMoves()}
                </Moves>
                <Title3>{winner ? "Winner: " + winner : `Next Player: ${x0}`}</Title3>
            </Info>
        </>
    );
}

const Title1 = styled.h1`
  color: ${Colors.primary};
  margin: 2rem 0;
`;

const Title3 = styled.h3`
  margin: 1rem 0;
`

const Moves = styled.div`
`;


const Info = styled.div`
  background: ${Colors.gray};
  color: ${Colors.white};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem 0;
`

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const StepButton = styled.button`
`;

export default TicTacToe;
