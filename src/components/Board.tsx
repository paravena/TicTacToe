import { SquareValue } from "../models/models";
import styled from "styled-components";
import Square from "./Square";
import {Colors} from "../models/themes";

interface Props {
    squares: SquareValue[];
    size: number;
    onSquareClick: (index: number) => void;
}

const Board = ({size, squares, onSquareClick}: Props) => (
    <Container size={size}>
        {squares.map(((value, index) =>
            <Square key={`square-${index}`} value={value} onClick={() => onSquareClick(index)} />
        ))}
    </Container>
)

const Container = styled.section`
  border: 1rem solid ${Colors.primary};
  background: ${Colors.primary};
  width: 500px;
  height: 500px;
  display: grid;
  grid-template: ${({ size }: Partial<Props>) => `repeat(${size}, 1fr) / repeat(${size}, 1fr)` };
  gap: 1rem;
`;

export default Board;