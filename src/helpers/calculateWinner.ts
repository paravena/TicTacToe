import { SquareValue } from "../models/models";

/*
3x3
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
 */

const calculateWinner = (size: number) => (squares: SquareValue[]): SquareValue => {
    const lines = [];
    // add horizontal lines
    for (let i = 0; i < size; i++) {
        lines.push(Array(size).fill(null).map((_v, index) => (i * size) + index));
    }

    // add vertical lines
    for (let i = 0; i < size; i++) {
        lines.push(Array(size).fill(null).map((_v, index) => (index * size) + i));
    }

    // add diagonal 1
    const d1 = [];
    for (let i = 0; i < size; i++) {
        d1.push((i * size) + i);
    }
    lines.push(d1);

    // add diagonal 2
    const d2 = [];
    for (let i = 0; i < size; i++) {
        d2.push((i * size) + size - i - 1);
    }
    lines.push(d2);

    for (let i = 0; i < lines.length; i++) {
        const firstIndex = lines[i][0];
        const first = squares[firstIndex];
        let result = true;
        for (let j = 1; j < lines[i].length; j++) {
            result = result && (first === squares[lines[i][j]]);
            if (!result) break;
        }
        if (result) return  first;
    }
    return null;
}

export default calculateWinner;