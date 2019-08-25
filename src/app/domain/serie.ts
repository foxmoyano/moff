import { Genre } from "./genre";
import { Emitter } from "./emitter";
import { State } from "./state";

export interface Serie {   
    id: any;
    name: any;
    createDate: any;
    genre: Genre;
    emition: Emitter;
    seasons: any;
    state: State;
    from: any;
    to: any;
    episodes: any;
    created: any;
    origin: any;
}