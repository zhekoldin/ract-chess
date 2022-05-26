import { Board } from "./Board";
import { Colors } from "./colors";
import { Figure } from "./figures/Figures";

export class Cell {
    readonly x: number; // x координата ячейки
    readonly y: number; // y координата ячейки
    readonly color: Colors; // цвет данной ячейки
    figure: Figure | null; // фигура которая стоит на ячейке
    board: Board; // данные по всей остальной доске
    available: boolean; // можно ли перемещаться на данную клетку
    id: number; // для react

    constructor (board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        
        // сохраним входные данные для ячейки
        this.x = x;
        this.y = y;
        this.board = board;
        this.available = false;
        this.id = Math.random();
        this.color = color;
        this.figure = figure;
    }
}