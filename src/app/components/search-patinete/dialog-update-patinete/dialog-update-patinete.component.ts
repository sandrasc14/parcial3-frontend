import { Component, OnInit, Inject, ViewChild, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-update-patinete',
  templateUrl: './dialog-update-patinete.component.html',
  styleUrls: ['./dialog-update-patinete.component.scss']
})
export class DialogUpdatePatineteComponent implements OnInit, OnDestroy {
  patinete = {};
  patineteOcupado = true;
  private onDestroy$: Subject<void> = new Subject<void>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogUpdatePatineteComponent>, private dialog: MatDialog) { }

  ngOnInit() {
    if (this.data.patinete) {
      this.patinete = this.data.patinete;
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  locationMarker(event) {
    // console.log(event);
  }

}
