export type User = {
  id: number;
  created_at: string;
  dob: string;
  email: string;
  is_email_verified: boolean;
  firstName: string;
  lastName: string;
  image_url: string;
  role_id: number;
};

export type Lawyer = {
  bio: string;
  location: string;
  hourlyRate: number;
  user: User;
  experienceYears: number;
  avgRate: number;
};
