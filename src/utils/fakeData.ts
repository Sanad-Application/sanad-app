// TODO: remove this file when real data is available

import {Lawyer, Tag, Request} from '~types';

export const tags: Tag[] = [
  {
    id: 0,
    label: 'الكل',
  },
  {
    id: 1,
    label: 'المحامين',
  },
  {
    id: 2,
    label: 'المحامين المفضلين',
  },
  {
    id: 3,
    label: 'المحامين المتاحين',
  },
  {
    id: 4,
    label: 'المحامين المشغولين',
  },
];

export const lawyers: Lawyer[] = [
  {
    bio: 'القانون الجنائي',
    hourly_rate: 50,
    user: {
      id: '1',
      created_at: new Date(),
      dob: new Date(),
      email: 'a@gmail.com',
      is_email_verified: true,
      first_name: 'محمد',
      last_name: 'علي',
      image_url: 'https://picsum.photos/200',
      role_id: 1,
      location: 'القاهرة',
    },
    years_of_experience: 3,
    rating: 4,
  },
  {
    bio: 'القانون المدني',
    hourly_rate: 60,
    user: {
      id: '2',
      created_at: new Date(),
      dob: new Date(),
      email: 'ss@gmail.com',
      is_email_verified: true,
      first_name: 'سعيد',
      last_name: 'علي',
      image_url: 'https://picsum.photos/200',
      role_id: 1,
      location: 'الجيزة',
    },
    years_of_experience: 5,
    rating: 4.5,
  },
  {
    bio: 'القانون الجنائي',
    hourly_rate: 70,
    user: {
      id: '3',
      created_at: new Date(),
      dob: new Date(),
      email: 'hh@gmail.com',
      is_email_verified: true,
      first_name: 'حسن',
      last_name: 'علي',
      image_url: 'https://picsum.photos/200',
      role_id: 1,
      location: 'القاهرة',
    },
    years_of_experience: 5,
    rating: 4.5,
  },
];

export const requests: Request[] = [
  {
    id: 1,
    type: 'consultation',
    status: 'pending',
    timestamp: '2021-09-01T00:00:00.000Z',
    tag: 'القانون الجنائي',
    lawyerName: 'محمد علي',
    special: 'القانون الجنائي',
  },
  {
    id: 2,
    type: 'case',
    status: 'accepted',
    timestamp: '2021-09-01T00:00:00.000Z',
    tag: 'القانون المدني',
    lawyerName: 'سعيد علي',
    special: 'القانون المدني',
  },
  {
    id: 3,
    type: 'consultation',
    status: 'rejected',
    timestamp: '2021-09-01T00:00:00.000Z',
    tag: 'القانون الجنائي',
    lawyerName: 'حسن علي',
    special: 'القانون الجنائي',
  },
];
