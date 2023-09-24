import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		title: 'Previsão do Tempo',
		loadChildren: () => import('./main/main.module').then(m => m.MainModule)
	},	
	{ 	path: '**', 
		redirectTo: "home" 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
