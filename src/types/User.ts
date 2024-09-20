export type User = {
  id: string;
  created_at: string;
  dob: string;
  email: string;
  is_email_verified: boolean;
  first_name: string;
  last_name: string;
  image_url: string;
  role_id: number;
  location: string;
};

export type Lawyer = {
  bio: string;
  hourly_rate: number;
  user: User;
  years_of_experience: number;
  rating: number;
};
