import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
    selector: 'joke-details',
    templateUrl: './joke-details.component.html',
    styleUrls: ['./joke-details.component.css']
})
export class jokeDetailsComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<jokeDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
        console.log('data', this.data)

    }

    onExit() {
        this.dialogRef.close()
    }
}
