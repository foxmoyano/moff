import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { CodeHighlighterModule } from 'primeng/primeng';

import { AppRoutes } from './app.routes';

//imports primeng
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//imports services
import { MessageService } from 'primeng/api';
import { SerieService } from './services/serie.service';
import { GenreService } from './services/genre.service';
import { EmitterService } from './services/emitter.service';

import { AppComponent } from './app.component';
import { SeriesComponent } from './views/series/series.component';
import { SerieComponent } from './views/series/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,

    PanelModule,
    TooltipModule,
    SidebarModule,
    ScrollPanelModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    TabViewModule,
    FileUploadModule,
    CodeHighlighterModule,

    HttpClientModule,
    AppRoutes,
    BrowserAnimationsModule
  ],
  providers: [SerieService, GenreService, EmitterService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
