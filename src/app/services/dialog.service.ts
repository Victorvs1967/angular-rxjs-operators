import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialog = inject(MatDialog);

  private static instanse: DialogService | null = null;

  constructor() {
    DialogService.instanse = this;
  }

  public static getInstance() {
    return DialogService.instanse;
  }

  openDialog<T>(data: any, component: ComponentType<T>, width: string = '600px') {
    return this.dialog.open(component, {
      width: width,
      data: data,
      disableClose: true,
    })
    .afterClosed();
  }
}
