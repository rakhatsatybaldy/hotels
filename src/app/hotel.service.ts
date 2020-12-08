export class HotelService {
  private hotels = [
    {name: 'Almaty Hotel' , location: 'Almaty' , stars: 3  , image : 'https://cf.bstatic.com/images/hotel/max1024x768/271/271215687.jpg' , description: 'This hotel is very cheaper than others. Book now!'},
    {name: 'Rixos Khadisha', location: 'Shymkent' , stars: 5 , image: 'https://cf.bstatic.com/images/hotel/max1024x768/387/38760953.jpg' , description: 'The most important hotel in Kazakhstan. Book now!'},
    {name: 'Rixos Almaty' , location: 'Almaty' , stars: 5 , image: 'https://cf.bstatic.com/images/hotel/max1024x768/271/271215495.jpg' , description: 'Can you live beautiful? Welcome, bro!'},
    {name: 'Astana Hotel' , location: 'Astana' , stars: 4 , image: 'https://cf.bstatic.com/images/hotel/max1024x768/396/39600737.jpg' , description: 'Astana, not Nur-Sultan. Welcome!'},
    {name: 'El Piero' , location: 'Rome' , stars: 5 , image: 'https://cf.bstatic.com/images/hotel/max1024x768/410/41004555.jpg' , description: 'Oh! This is Rome. I was there. This is awesome'},
    {name: 'Luxury Ankara' , location: 'Turkey', stars : 5 , image: 'https://cf.bstatic.com/images/hotel/max1024x768/410/41004583.jpg' , description: 'We wait you. Every day there are free alcohol and night club tickets for week!'},
    {name: 'El Piero' , location: 'Rome' , stars: 5 , image: 'https://cf.bstatic.com/images/hotel/max1024x768/410/41004558.jpg' , description: 'Oh! This is Rome. I was there. This is awesome'},
    {name: 'Luxury Ankara' , location: 'Turkey', stars : 5 , image: 'https://cf.bstatic.com/images/hotel/max1024x768/410/41004547.jpg' , description: 'We wait you. Every day there are free alcohol and night club tickets for week!'}
  ];

  constructor() { }

  public getAll(){
    return this.hotels;
  }

  size=8;


  setSize(size){
    this.size=size;
  }
}
