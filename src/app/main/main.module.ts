import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClimaDataComponent } from './components/clima-data/clima-data.component';

const routes: Routes = [
  {
    path: '',
    component: ClimaDataComponent,
  },
];

@NgModule({
  declarations: [ClimaDataComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class MainModule {}
