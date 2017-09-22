import { Injectable } from '@angular/core';

@Injectable()
export class AppDeckService {

  constructor() { }

  getApps () {
    return [
      {
        appName: 'app1',
        appDescription: 'APP1 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app2',
        appDescription: 'APP2 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app3',
        appDescription: 'APP3 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app4',
        appDescription: 'APP4 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app5',
        appDescription: 'APP5 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app6',
        appDescription: 'APP6 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app7',
        appDescription: 'APP7 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app8',
        appDescription: 'APP8 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app9',
        appDescription: 'APP9 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app10',
        appDescription: 'APP10 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app11',
        appDescription: 'APP11 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      },
      {
        appName: 'app12',
        appDescription: 'APP12 This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    ]
  }
}
