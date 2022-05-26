import { Cell } from "./Cell";
import { Colors } from "./colors";

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        
        // сформируем строку для ячеек
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];

            // сформируем каждую ячейку
            for (let j = 0; j < 8; j++) {

                // закрасим ячейки в шахматном порядке
                if ((i+j)%2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null));
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null));
                }
            }

           this.cells.push(row); 
        }
    }
}