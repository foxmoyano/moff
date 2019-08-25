import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { SeriesComponent } from './views/series/series.component';
import { SerieComponent } from './views/series/serie.component';

export const routes: Routes = [    
    { path: 'serie', component: SerieComponent },
    { path: 'series', component: SeriesComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
