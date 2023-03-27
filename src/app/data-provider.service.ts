import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  // Fake data. In a real app this service would get data from a server API.
  tvShows = [
    {
      id: 0,
      title: 'Rick and Morty',
      description: 'Animated series about Rick and Morty'
    },
    {
      id: 1,
      title: 'Mr. Robot',
      description: 'Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.'
    },
    {
      id: 2,
      title: 'Ted Lasso',
      description: 'American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League football team.'
    }
  ]

  constructor() { }

  getList() {
    return this.tvShows;
  }

  getTvShow(id) {
    return this.tvShows.find((tvShow) => {
      return tvShow.id === id;
    });
  }
}
