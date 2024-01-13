import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClimaDataComponent } from './components/clima-data/clima-data.component';

const routes: Routes = [
  {
    path: '',
    component: ClimaDataComponent,
  },
];

@NgModule({
  declarations: [ClimaDataComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes)],
})
export class MainModule {}
