import {http, HttpResponse} from 'msw'

export const handlers = [
  http.get('http://localhost:3100/tests', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Prototype of the new map',
        type: 'CLASSIC',
        status: 'PAUSED',
        siteId: 2,
      },
      {
        id: 2,
        name: 'Dark theme test',
        type: 'MVT',
        status: 'DRAFT',
        siteId: 3,
      },
      {
        id: 3,
        name: 'New Year\'s Sale',
        type: 'MVT',
        status: 'STOPPED',
        siteId: 1
      },
      {
        id: 4,
        name: 'Order basket redesing',
        type: 'CLASSIC',
        status: 'ONLINE',
        siteId: 1
      },
    ])
  }),

  http.get('http://localhost:3100/sites', () => {
    return HttpResponse.json([
      {id: 1, url: 'https://site1.com'},
      {id: 2, url: 'https://site2.com'},
      {id: 3, url: 'https://site3.com'},
    ])
  }),
]