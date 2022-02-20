import styled from "styled-components";
import { Colors } from "../models/themes";
import { SquareValue } from "../models/models";

interface Props {
   value: SquareValue;
   onClick: () => void;
}

const Square = ({ value, onClick }: Props) => (
  <SquareButton onClick={onClick} value={value}>{value}</SquareButton>
);

const SquareButton = styled.div`
   background: ${Colors.gray};
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   font-size: 5rem;
   cursor: pointer;
   outline: none;
   color: ${({ value }: Partial<Props>) => value === 'X' ? Colors.red :  Colors.green}
`;

export default Square;