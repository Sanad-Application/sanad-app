// TODO: remove this file when real data is available

import { Lawyer, Tag } from "~types"

export const tags: Tag[] = [
  {
    id: 0,
    label: "الكل",
  },
  {
    id: 1,
    label: "المحامين",
  },
  {
    id: 2,
    label: "المحامين المفضلين",
  },
  {
    id: 3,
    label: "المحامين المتاحين",
  },
  {
    id: 4,
    label: "المحامين المشغولين",
  },
]

export const lawyers: Lawyer[] = [
  {
    bio: "القانون الجنائي",
    hourly_rate: 50,
    user: {
      id: "1",
      created_at: new Date(),
      dob: new Date(),
      email: "a@gmail.com",
      is_email_verified: true,
      first_name: "محمد",
      last_name: "علي",
      image_url: "https://picsum.photos/200",
      role_id: 1,
      location: "القاهرة",
    },
    years_of_experience: 3,
    rating: 4,
  },
  {
    bio: "القانون المدني",
    hourly_rate: 60,
    user: {
      id: "2",
      created_at: new Date(),
      dob: new Date(),
      email: "ss@gmail.com",
      is_email_verified: true,
      first_name: "سعيد",
      last_name: "علي",
      image_url: "https://picsum.photos/200",
      role_id: 1,
      location: "الجيزة",
    },
    years_of_experience: 5,
    rating: 4.5,
  },
  {
    bio: "القانون الجنائي",
    hourly_rate: 70,
    user: {
      id: "3",
      created_at: new Date(),
      dob: new Date(),
      email: "hh@gmail.com",
      is_email_verified: true,
      first_name: "حسن",
      last_name: "علي",
      image_url: "https://picsum.photos/200",
      role_id: 1,
      location: "القاهرة",
    },
    years_of_experience: 5,
    rating: 4.5,
  },
]