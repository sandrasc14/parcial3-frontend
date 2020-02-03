import { MatDialog } from '@angular/material';
import { Patinete } from './../../models/patinete.model';
import { PatineteService } from './../../services/patinete.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaestroService } from 'src/app/services/maestro-service.service';
import { Parking } from 'src/app/models/parking.model';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { DialogUpdatePatineteComponent } from './dialog-update-patinete/dialog-update-patinete.component';

@Component({
  selector: 'app-search-patinete',
  templateUrl: './search-patinete.component.html',
  styleUrls: ['./search-patinete.component.css']
})
export class SearchPatineteComponent implements OnInit, OnDestroy {
  form: FormGroup;
  displayedColumns: string[] = ['identificador', 'estado', 'coordenadas', 'acciones'];
  private ngUnsubscribe: Subject<boolean> = new Subject();
  dataSource: Patinete[] = [];
  locations: any[] = [];
  stateList = ['Desocupado', 'Ocupado'];

  constructor(
    private fb: FormBuilder,
    private patineteService: PatineteService,
    public maestroService: MaestroService,
    private dialog: MatDialog
  ) {
    this.form = this.fb.group({
      identificador: [],
      estado: []
    });
  }

  ngOnInit() {
    this.listarPatinetes();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.unsubscribe();
  }

  listarPatinetes() {
    this.dataSource = [];
    this.maestroService.busy = this.patineteService.getPatinetes().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        response => {
          console.log(response);
          if (response) {
            this.dataSource = response.map(value => {
              value.lat = value.latitud;
              value.lng = value.longitud;
              return value;
            });
          }
        }
      );
  }

  openDialogMap(event) {
    console.log(event);
    this.dialog.open(DialogUpdatePatineteComponent, {
      data: { patinete: event}, width: '500px', disableClose: true
    });
  }

}
