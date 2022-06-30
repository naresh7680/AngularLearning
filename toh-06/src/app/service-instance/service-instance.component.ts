import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService2 } from '../hero2.service';

@Component({
  selector: 'app-service-instance',
  templateUrl: './service-instance.component.html',
  styleUrls: ['./service-instance.component.css'],
  providers: [HeroService2]
})
export class ServiceInstanceComponent implements OnInit {

  heroes : Hero[] = [];
  constructor(private heroService : HeroService2) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // get user detailes
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  // add user detailes
  add1(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // delete user detailes
  delete1(hero: Hero): void {
    this.heroes = this.heroes.filter(u => u !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
