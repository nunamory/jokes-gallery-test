import { Component } from '@angular/core';
import data from '../../jokes-data/jokes-json.json';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { jokeDetailsComponent } from '../../components/joke-details.component'
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
    constructor(private dialog: MatDialog) {}

    displayedColumns: string[] = ['category', 'type', 'setup'];
    dataSource = data.data;

    getRandomJoke(jokes: string | any[]) {
        let randomIndex = Math.floor((Math.random() * jokes.length));
        return jokes[randomIndex];
    }

    openModal(row: any) {
        const suggestedArr = [];
        for (let i = 0; suggestedArr.length < 5; i++) {
            const suggestedJokes = this.getRandomJoke(data.data);
            if(suggestedJokes.type == row.type) {
                suggestedArr.push(suggestedJokes);
            }
        }
        this.dialog.open(jokeDetailsComponent, {
            width: '1000px',
            height: '500px',
            data: {
                row,
                suggestedArr,
            }
        });
    }
}
