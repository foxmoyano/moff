import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../../services/serie.service';
import { GenreService } from '../../services/genre.service';
import { EmitterService } from '../../services/emitter.service';
import { Serie } from '../../domain/serie';
import { Genre } from '../../domain/genre';
import { Emitter } from '../../domain/emitter';
import { State } from '../../domain/state';

@Component({    
    templateUrl: './series.component.html',
    providers: []
})

export class SeriesComponent implements OnInit {
      
    series: Serie[];
    cols: any[];

    display: any;

    serieId: any;
    serieName: any;
    serieGenre: any;
    serieEmitter: any;
    serieSeasons: any;
    serieState: any;
    serieFrom: any;
    serieTo: any;
    serieEpisodes: any;
    serieOrigin: any;
    serieCreated: any;
    
    genre: any;
    genres: Genre[];

    emitter: any;
    emitters: Emitter[];
    filteredEmitter: any[];

    state: any;
    states: State[];

    data: any;

    selectedSerie: Serie;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private serieService: SerieService,
                private genreService: GenreService,
                private emitterService: EmitterService) { 
    }

    ngOnInit(): void {
        this.serieService.getSeries().subscribe( series => this.series = series);
        this.cols = [
            { field: 'id', header: 'Nombre' },
            { field: 'name', header: 'Empresa' },
            { field: 'genre.name', header: 'Genero' },
            { field: 'emitter.name', header: 'Canal' }, 
            { field: 'seasons', header: 'Temporada' },
            { field: 'state.description', header: 'Estado' },
            { field: 'from', header: 'Emisión' }
        ];

        this.genreService.getGenres().subscribe( genres => this.genres = genres);
        this.emitterService.getEmitters().subscribe( emitters => this.emitters = emitters);

        this.states = [
            {description: 'En curso', code: 'CURR'},
            {description: 'Terminada', code: 'FIN'}
        ];        
    }

    onRowSelect(event) {
        console.log(this.selectedSerie);
        //despliega la ventana
        this.display = true

        //obtenemos el id
        this.serieId = event.data.id;

        //obtenemos el nombre de la serie
        this.serieName = event.data.name;

       //obtenemos el genero de la serie   
       this.genre = [];
       this.genre = this.genres.find(x => x.id === event.data.genre.id);
       this.serieGenre = this.genre;

       //obtenemos el emisor de la serie   
       this.emitter = [];       
       this.emitter = this.emitters.find(x => x.id === event.data.emitter.id);
       this.serieEmitter = this.emitter;

       //obtenemos las temporadas de la serie
       this.serieSeasons = event.data.seasons;

       //obtenemos el estado de la serie
       this.state = [];
       this.state = this.states.find(x => x.code === event.data.state.code);
       this.serieState = this.state;

       //obtenemos los años de emisión
       this.serieFrom = event.data.from;
       this.serieTo = event.data.to;

       //obtenemos al creador de la serie
       this.serieCreated = event.data.created;

       //obtenemos la cantidad de episodios de la serie
       this.serieEpisodes = event.data.episodes;

       //obtenemos el pais de origen de la serie
       this.serieOrigin = event.data.origin;
    }

    onClosePanel() {
        this.display = false;
    }

    filterEmitter(event) {
        const query = event.query;
        this.emitterService.getEmitters().subscribe(emitters => {
            this.filteredEmitter = this.searchEmitter(query, emitters);            
        });
    }

    searchEmitter(query, emitters: any[]): any[] {
        // in a real application, make a request to a remote url with the query and return filtered results,
        // for demo we filter at client side
        const filtered: any[] = [];
        for (let i = 0; i < emitters.length; i++) {
            const emitter = emitters[i];
            if (emitter.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(emitter);                
            }
        }
        return filtered;
    }

    updateSerie() {
        this.data = [];
        this.data =
            {
                "id" : this.serieId,
                "name": this.serieName,    
                "genre": {
                  "id": this.serieGenre.id
                },
                "emitter": {
                  "id": this.serieEmitter.id
                },
                "seasons" : this.serieSeasons,
                "createDate": new Date(),
                "state" : {
                    "code": this.serieState.code
                },
                "from": this.serieFrom,
                "to": this.serieTo
            };
        
        
        this.series = [];

        //agregamos solo el nuevo contacto
         this.serieService.putSerie(this.data).subscribe(
             serie => this.series.push(serie)
        );

    }

    onShowSerie(event) {
        console.log(event);
    }    

}