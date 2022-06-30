import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import {Task } from './task'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const tasks = [
      { id: 112, name: 'Dr. Nice' },
      { id: 113, name: 'Bombasto' },
      { id: 114, name: 'Celeritas' },
      { id: 115, name: 'Magneta' },
      { id: 116, name: 'RubberMan' },
      { id: 117, name: 'Dynama' },
      { id: 118, name: 'Dr. IQ' },
      { id: 119, name: 'Magma' },
      { id: 210, name: 'Tornado' }
    ];
    const users = [
      { id: 2, name: 'Dr. Nice' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr. IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];
    return {heroes,tasks,users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[], tasks: Task[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    return tasks.length > 0? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
