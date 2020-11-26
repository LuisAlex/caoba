import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import {ImportFileComponent} from './import-file/import-file.component';
import {ExportDataComponent} from './export-data/export-data.component';
import {SettingComponent} from './setting/setting.component';
import {InvoiceComponent} from './invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      urls: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Dashboard'}
      ]
    },
    component: DashboardComponent,
    children: [
      { path: 'setting', component: SettingComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'import', component: ImportFileComponent },
      { path: 'export', component: ExportDataComponent }
      ]
  }
];

@NgModule({
	imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule],
	declarations: [DashboardComponent]
})
export class DashboardModule {}
