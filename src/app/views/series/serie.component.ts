import { Component, OnInit }  from '@angular/core';
import { SerieService } from '../../services/serie.service';
import { GenreService } from '../../services/genre.service';
import { EmitterService } from '../../services/emitter.service';
import { MessageService } from 'primeng/api';
import { Serie } from '../../domain/serie';
import { Genre } from '../../domain/genre';
import { State } from '../../domain/state';

@Component({
    templateUrl: './serie.component.html',
    providers: []
})

export class SerieComponent implements OnInit {
    genres: Genre[];

    cols: any[];

    filteredEmitter: any[];

    data: any;

    series: Serie[];

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

    states: State[];

    uploadedFiles: any[] = [];

    constructor(private serieService: SerieService,
                private genreService: GenreService,
                private emitterService: EmitterService,
                private messageService: MessageService) {
    }

    ngOnInit(): void {

        this.cols = [
            { field: 'id', header: 'Nombre' },
            { field: 'name', header: 'Empresa' },
            { field: 'genre.name', header: 'Genero' },
            { field: 'emition', header: 'Emision' }
        ];

        this.genreService.getGenres().subscribe( genres => this.genres = genres);

        this.states = [
            {description: 'En curso', code: 'CURR'},
            {description: 'Terminada', code: 'FIN'}
        ];

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

    addSerie() {
        this.data = [];
        this.data =
            {
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
                "to": this.serieTo,
                "episodes": this.serieEpisodes,
                "origin": this.serieOrigin,
                "created": this.serieCreated
            };


        this.series = [];

        //agregamos solo el nuevo contacto
         this.serieService.postSerie(this.data).subscribe(
             serie => this.series.push(serie)
        );
    }

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

}
