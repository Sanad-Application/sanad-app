export interface User {
  id: string;
  code: number;
  code_expired_at: Date;
  created_at: Date;
  dob: Date;
  email: string;
  is_email_verified: boolean;
  first_name: string;
  last_name: string;
  image_url: string;
  role_id: number;
};

export interface Lawyer extends User {
  bio: string;
  hourly_rate: number;
}