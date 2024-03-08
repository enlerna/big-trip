const mockEvents = [
  {
    id: '3fe6af1e-2bcb-4cfb-a008-0cd6fe33564f',
    basePrice: 5894,
    dateFrom: '2026-12-22T16:59:34.880Z',
    dateTo: '2026-12-24T02:59:34.880Z',
    destination: '3ac52b04-59f3-4990-8a73-a9a217e0b76e',
    isFavorite: false,
    offers: [
      'a080b50d-11b9-49e5-af1e-c82e791b7d55',
      '99bd9ae7-9d3d-4583-90dd-8d93d0b3bff7',
      '3de0b138-9cb4-48c9-aeb0-5b859a78f920',
      '79bb1446-b2d6-450c-be10-f05c49d5ffea',
      '5b633a6b-4836-40e0-b99a-ac378caa941f',
      'f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3'
    ],
    type: 'ship'
  },
  {
    id: '75bbb089-cd10-4bb1-a627-a2eab62c5041',
    basePrice: 2902,
    dateFrom: '2026-12-24T02:59:34.880Z',
    dateTo: '2026-12-24T22:59:34.880Z',
    destination: '10bc1a51-a317-48f8-bebb-d3e14390a3ce',
    isFavorite: false,
    offers: [],
    type: 'drive'
  },
  {
    id: 'fd25aedc-6935-4c9a-b2a4-08edd6cb6240',
    basePrice: 9764,
    dateFrom: '2026-12-24T22:59:34.880Z',
    dateTo: '2026-12-26T22:59:34.880Z',
    destination: 'afb3e6bd-2761-4e67-80b6-fddcb38612c4',
    isFavorite: false,
    offers: [
      '66b0bedf-39c2-47c6-ab4b-7edb36f1023d'
    ],
    type: 'check-in'
  },
  {
    id: '1dd3c565-3eb7-420a-a558-02328dfe5558',
    basePrice: 8324,
    dateFrom: '2026-12-26T22:59:34.880Z',
    dateTo: '2026-12-28T06:59:34.880Z',
    destination: 'caf17151-2c2b-49e2-b23a-c81eee6b5d0c',
    isFavorite: true,
    offers: [
      '4ac7e525-6f17-4e1b-8759-c8d94f729f77',
      'caf259e0-489a-4880-b47c-6dfc2239f697',
      '39947249-bf57-4936-8acd-3a1225448253'
    ],
    type: 'train'
  },
  {
    id: 'b9d10629-ceb0-4961-9b26-e8473b0c94ac',
    basePrice: 205,
    dateFrom: '2026-12-28T06:59:34.880Z',
    dateTo: '2026-12-29T12:59:34.880Z',
    destination: '10bc1a51-a317-48f8-bebb-d3e14390a3ce',
    isFavorite: true,
    offers: [],
    type: 'restaurant'
  },
  {
    id: '9c5d4f0e-cc29-4132-9672-0f3b59c396f1',
    basePrice: 9685,
    dateFrom: '2026-12-29T12:59:34.880Z',
    dateTo: '2026-12-30T01:59:34.880Z',
    destination: 'caf17151-2c2b-49e2-b23a-c81eee6b5d0c',
    isFavorite: true,
    offers: [
      '5b633a6b-4836-40e0-b99a-ac378caa941f',
      'f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3'
    ],
    type: 'ship'
  },
  {
    id: 'b701cda9-e9af-4888-b57c-3bf83fb2a73c',
    basePrice: 8509,
    dateFrom: '2026-12-30T01:59:34.880Z',
    dateTo: '2026-12-30T07:59:34.880Z',
    destination: '10bc1a51-a317-48f8-bebb-d3e14390a3ce',
    isFavorite: true,
    offers: [],
    type: 'drive'
  },
  {
    id: '27c3dd9e-b641-43ee-9ac2-24835a59b120',
    basePrice: 5734,
    dateFrom: '2026-12-30T07:59:34.880Z',
    dateTo: '2026-12-31T19:59:34.880Z',
    destination: 'afb3e6bd-2761-4e67-80b6-fddcb38612c4',
    isFavorite: false,
    offers: [
      '97a1dff0-7ea7-4483-92a6-923caf42c374'
    ],
    type: 'bus'
  },
  {
    id: '9736272d-8595-4e36-90ae-d06edf51ee12',
    basePrice: 8591,
    dateFrom: '2026-12-31T19:59:34.880Z',
    dateTo: '2027-01-02T18:59:34.880Z',
    destination: 'caf17151-2c2b-49e2-b23a-c81eee6b5d0c',
    isFavorite: false,
    offers: [
      '39947249-bf57-4936-8acd-3a1225448253'
    ],
    type: 'train'
  },
  {
    id: 'f613f10c-91b5-48e8-b720-bbeb3de76f8d',
    basePrice: 7508,
    dateFrom: '2027-01-02T18:59:34.880Z',
    dateTo: '2027-01-03T00:59:34.880Z',
    destination: '10bc1a51-a317-48f8-bebb-d3e14390a3ce',
    isFavorite: false,
    offers: [
      'd86da2b9-3b26-4264-918e-e90f71a22ed7',
      'bc68a804-f4ad-4fcd-a34c-c4bf628ce359',
      '66b0bedf-39c2-47c6-ab4b-7edb36f1023d'
    ],
    type: 'check-in'
  },
  {
    id: 'cc2afbbd-006d-4cc8-b6e6-e4850711b044',
    basePrice: 2352,
    dateFrom: '2027-01-03T00:59:34.880Z',
    dateTo: '2027-01-03T16:59:34.880Z',
    destination: '3ac52b04-59f3-4990-8a73-a9a217e0b76e',
    isFavorite: true,
    offers: [
      '18fd7961-ab32-40e8-b744-5e8bf06c3e55',
      '09fe2b6c-7bed-4c01-afd5-dc2b3faee2c1',
      'dd5cea00-9b44-40e4-8205-52996c29a312',
      'e2b5e314-1cd8-4925-989b-d03d272f2715'
    ],
    type: 'taxi'
  },
  {
    id: '52a616f3-da7b-4513-93a5-be7afd241f11',
    basePrice: 4565,
    dateFrom: '2027-01-03T16:59:34.880Z',
    dateTo: '2027-01-04T17:59:34.880Z',
    destination: '4ac538ec-fc25-423b-a1f4-93ba609c1973',
    isFavorite: true,
    offers: [
      'f484fb2c-698d-452f-b3ba-927c7cb4d296',
      '4524d1c9-c50c-4b99-916c-63d1cae90a81'
    ],
    type: 'restaurant'
  },
  {
    id: '9ad5022d-fb6d-4dd6-a6ee-dc3673feade5',
    basePrice: 2959,
    dateFrom: '2027-01-04T17:59:34.880Z',
    dateTo: '2027-01-06T09:59:34.880Z',
    destination: '3ac52b04-59f3-4990-8a73-a9a217e0b76e',
    isFavorite: false,
    offers: [
      'ca25e1c1-0fda-4849-8c0f-2677c85adbf7',
      '2ea76e51-c913-4dbb-8c4e-8e4bb6ccabc5',
      '22c80725-7918-419d-aefb-3469d3c942cc',
      'f2f462fb-6807-4da4-ba0c-0e2610506703'
    ],
    type: 'flight'
  },
  {
    id: '699c22c0-7c64-4381-bc89-254ea2c20b8d',
    basePrice: 4042,
    dateFrom: '2027-01-06T09:59:34.880Z',
    dateTo: '2027-01-07T13:59:34.880Z',
    destination: 'caf17151-2c2b-49e2-b23a-c81eee6b5d0c',
    isFavorite: false,
    offers: [],
    type: 'bus'
  },
  {
    id: 'ae9fe729-8a26-4d33-a01f-0e1912f8567f',
    basePrice: 4347,
    dateFrom: '2027-01-07T13:59:34.880Z',
    dateTo: '2027-01-08T01:59:34.880Z',
    destination: '10bc1a51-a317-48f8-bebb-d3e14390a3ce',
    isFavorite: false,
    offers: [],
    type: 'bus'
  },
  {
    id: '981823c7-c8ae-40e6-8d3d-5b110747f8b3',
    basePrice: 5968,
    dateFrom: '2027-01-08T01:59:34.880Z',
    dateTo: '2027-01-09T22:59:34.880Z',
    destination: 'afb3e6bd-2761-4e67-80b6-fddcb38612c4',
    isFavorite: false,
    offers: [
      '69cc466e-5b05-4f95-ad0f-ee767c88c88c',
      '99b757da-6c43-4f33-9044-cb9100135b45',
      'd86da2b9-3b26-4264-918e-e90f71a22ed7',
      'bc68a804-f4ad-4fcd-a34c-c4bf628ce359',
      '66b0bedf-39c2-47c6-ab4b-7edb36f1023d'
    ],
    type: 'check-in'
  },
  {
    id: '8fe7bf66-1cc3-4edd-b9de-0cc13ea5e7c2',
    basePrice: 737,
    dateFrom: '2027-01-09T22:59:34.880Z',
    dateTo: '2027-01-10T11:59:34.880Z',
    destination: '4ac538ec-fc25-423b-a1f4-93ba609c1973',
    isFavorite: false,
    offers: [],
    type: 'check-in'
  },
  {
    id: '667cde56-5d70-44f0-addc-38ce0555879c',
    basePrice: 8006,
    dateFrom: '2027-01-10T11:59:34.880Z',
    dateTo: '2027-01-11T23:59:34.880Z',
    destination: '10bc1a51-a317-48f8-bebb-d3e14390a3ce',
    isFavorite: true,
    offers: [
      'f484fb2c-698d-452f-b3ba-927c7cb4d296',
      '4524d1c9-c50c-4b99-916c-63d1cae90a81'
    ],
    type: 'restaurant'
  },
  {
    id: '099916ac-4f14-443f-b874-98476d3b8147',
    basePrice: 2178,
    dateFrom: '2027-01-11T23:59:34.880Z',
    dateTo: '2027-01-12T15:59:34.880Z',
    destination: 'caf17151-2c2b-49e2-b23a-c81eee6b5d0c',
    isFavorite: true,
    offers: [
      '5784c2ef-3c83-4c04-ad8e-29d4215b2fae',
      'eebef189-2e28-4d74-b3a7-9fb28e499d8d'
    ],
    type: 'drive'
  },
  {
    id: '12b3f2a4-9c3e-4767-8e58-42303dff9075',
    basePrice: 763,
    dateFrom: '2027-01-12T15:59:34.880Z',
    dateTo: '2027-01-13T17:59:34.880Z',
    destination: '10bc1a51-a317-48f8-bebb-d3e14390a3ce',
    isFavorite: false,
    offers: [
      'ca25e1c1-0fda-4849-8c0f-2677c85adbf7',
      '2ea76e51-c913-4dbb-8c4e-8e4bb6ccabc5',
      '22c80725-7918-419d-aefb-3469d3c942cc',
      'f2f462fb-6807-4da4-ba0c-0e2610506703'
    ],
    type: 'flight'
  },
  {
    id: '061ea383-3725-4d88-90a1-bead8b798260',
    basePrice: 8801,
    dateFrom: '2027-01-13T17:59:34.880Z',
    dateTo: '2027-01-14T04:59:34.880Z',
    destination: 'afb3e6bd-2761-4e67-80b6-fddcb38612c4',
    isFavorite: true,
    offers: [
      '39947249-bf57-4936-8acd-3a1225448253'
    ],
    type: 'train'
  },
  {
    id: '9a62b562-2c91-437c-9ea5-9db1fe4e990a',
    basePrice: 2238,
    dateFrom: '2027-01-14T04:59:34.880Z',
    dateTo: '2027-01-15T12:59:34.880Z',
    destination: '3ac52b04-59f3-4990-8a73-a9a217e0b76e',
    isFavorite: true,
    offers: [
      '97a1dff0-7ea7-4483-92a6-923caf42c374'
    ],
    type: 'bus'
  },
  {
    id: '206a93db-db39-4e43-9b89-488af1f61077',
    basePrice: 3213,
    dateFrom: '2027-01-15T12:59:34.880Z',
    dateTo: '2027-01-16T21:59:34.880Z',
    destination: 'afb3e6bd-2761-4e67-80b6-fddcb38612c4',
    isFavorite: false,
    offers: [
      'f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3'
    ],
    type: 'ship'
  },
  {
    id: '6836a98e-b0e2-4584-b1c2-a4fef68ae710',
    basePrice: 2579,
    dateFrom: '2027-01-16T21:59:34.880Z',
    dateTo: '2027-01-17T14:59:34.880Z',
    destination: 'afb3e6bd-2761-4e67-80b6-fddcb38612c4',
    isFavorite: false,
    offers: [
      '2ea76e51-c913-4dbb-8c4e-8e4bb6ccabc5',
      '22c80725-7918-419d-aefb-3469d3c942cc',
      'f2f462fb-6807-4da4-ba0c-0e2610506703'
    ],
    type: 'flight'
  },
  {
    id: '4104b3c1-abb4-47af-bca4-eea917367b2a',
    basePrice: 58,
    dateFrom: '2027-01-17T14:59:34.880Z',
    dateTo: '2027-01-18T19:59:34.880Z',
    destination: '3ac52b04-59f3-4990-8a73-a9a217e0b76e',
    isFavorite: true,
    offers: [
      '79bb1446-b2d6-450c-be10-f05c49d5ffea',
      '5b633a6b-4836-40e0-b99a-ac378caa941f',
      'f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3'
    ],
    type: 'ship'
  }
];

const mockDestinations = [
  {
    id: '3ac52b04-59f3-4990-8a73-a9a217e0b76e',
    description: 'Amsterdam - with an embankment of a mighty river as a centre of attraction',
    name: 'Amsterdam',
    pictures: []
  },
  {
    id: 'caf17151-2c2b-49e2-b23a-c81eee6b5d0c',
    description: 'Kopenhagen - with crowded streets',
    name: 'Kopenhagen',
    pictures: []
  },
  {
    id: 'afb3e6bd-2761-4e67-80b6-fddcb38612c4',
    description: 'Rome - full of of cozy canteens where you can try the best coffee in the Middle East',
    name: 'Rome',
    pictures: [
      {
        src: 'https://20.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Rome for those who value comfort and coziness'
      }
    ]
  },
  {
    id: '4ac538ec-fc25-423b-a1f4-93ba609c1973',
    description: 'Chamonix - in a middle of Europe',
    name: 'Chamonix',
    pictures: [
      {
        src: 'https://20.objects.htmlacademy.pro/static/destinations/14.jpg',
        description: 'Chamonix middle-eastern paradise'
      },
      {
        src: 'https://20.objects.htmlacademy.pro/static/destinations/11.jpg',
        description: 'Chamonix a true asian pearl'
      }
    ]
  },
  {
    id: '10bc1a51-a317-48f8-bebb-d3e14390a3ce',
    description: 'Venice - for those who value comfort and coziness',
    name: 'Venice',
    pictures: [
      {
        src: 'https://20.objects.htmlacademy.pro/static/destinations/6.jpg',
        description: 'Venice middle-eastern paradise'
      }
    ]
  }
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '623646ff-2638-400e-9b2e-5f50c50e8524',
        title: 'Upgrade to a business class',
        price: 53
      },
      {
        id: '18fd7961-ab32-40e8-b744-5e8bf06c3e55',
        title: 'Choose the radio station',
        price: 171
      },
      {
        id: '09fe2b6c-7bed-4c01-afd5-dc2b3faee2c1',
        title: 'Choose temperature',
        price: 84
      },
      {
        id: 'dd5cea00-9b44-40e4-8205-52996c29a312',
        title: 'Drive quickly, I\'m in a hurry',
        price: 53
      },
      {
        id: 'e2b5e314-1cd8-4925-989b-d03d272f2715',
        title: 'Drive slowly',
        price: 60
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '9621886c-1cbd-4633-b481-46ed93117d0f',
        title: 'Infotainment system',
        price: 31
      },
      {
        id: 'eb1e4a96-62a2-4832-8e01-0c912718632a',
        title: 'Order meal',
        price: 53
      },
      {
        id: '97a1dff0-7ea7-4483-92a6-923caf42c374',
        title: 'Choose seats',
        price: 100
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: '4ac7e525-6f17-4e1b-8759-c8d94f729f77',
        title: 'Book a taxi at the arrival point',
        price: 76
      },
      {
        id: 'caf259e0-489a-4880-b47c-6dfc2239f697',
        title: 'Order a breakfast',
        price: 108
      },
      {
        id: '39947249-bf57-4936-8acd-3a1225448253',
        title: 'Wake up at a certain time',
        price: 179
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '93a26061-8f0b-4d57-b928-835580a95a30',
        title: 'Choose meal',
        price: 173
      },
      {
        id: '233e61f2-8984-42f2-913b-7868531ab2ad',
        title: 'Choose seats',
        price: 75
      },
      {
        id: 'ca25e1c1-0fda-4849-8c0f-2677c85adbf7',
        title: 'Upgrade to comfort class',
        price: 82
      },
      {
        id: '2ea76e51-c913-4dbb-8c4e-8e4bb6ccabc5',
        title: 'Upgrade to business class',
        price: 74
      },
      {
        id: '22c80725-7918-419d-aefb-3469d3c942cc',
        title: 'Add luggage',
        price: 187
      },
      {
        id: 'f2f462fb-6807-4da4-ba0c-0e2610506703',
        title: 'Business lounge',
        price: 151
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '69cc466e-5b05-4f95-ad0f-ee767c88c88c',
        title: 'Choose the time of check-in',
        price: 102
      },
      {
        id: '99b757da-6c43-4f33-9044-cb9100135b45',
        title: 'Choose the time of check-out',
        price: 146
      },
      {
        id: 'd86da2b9-3b26-4264-918e-e90f71a22ed7',
        title: 'Add breakfast',
        price: 134
      },
      {
        id: 'bc68a804-f4ad-4fcd-a34c-c4bf628ce359',
        title: 'Laundry',
        price: 82
      },
      {
        id: '66b0bedf-39c2-47c6-ab4b-7edb36f1023d',
        title: 'Order a meal from the restaurant',
        price: 54
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'a080b50d-11b9-49e5-af1e-c82e791b7d55',
        title: 'Choose meal',
        price: 37
      },
      {
        id: '99bd9ae7-9d3d-4583-90dd-8d93d0b3bff7',
        title: 'Choose seats',
        price: 126
      },
      {
        id: '3de0b138-9cb4-48c9-aeb0-5b859a78f920',
        title: 'Upgrade to comfort class',
        price: 96
      },
      {
        id: '79bb1446-b2d6-450c-be10-f05c49d5ffea',
        title: 'Upgrade to business class',
        price: 160
      },
      {
        id: '5b633a6b-4836-40e0-b99a-ac378caa941f',
        title: 'Add luggage',
        price: 127
      },
      {
        id: 'f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3',
        title: 'Business lounge',
        price: 60
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '5784c2ef-3c83-4c04-ad8e-29d4215b2fae',
        title: 'With automatic transmission',
        price: 77
      },
      {
        id: 'eebef189-2e28-4d74-b3a7-9fb28e499d8d',
        title: 'With air conditioning',
        price: 103
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'f484fb2c-698d-452f-b3ba-927c7cb4d296',
        title: 'Choose live music',
        price: 171
      },
      {
        id: '4524d1c9-c50c-4b99-916c-63d1cae90a81',
        title: 'Choose VIP area',
        price: 57
      }
    ]
  }
];

export { mockEvents, mockDestinations, mockOffers };
