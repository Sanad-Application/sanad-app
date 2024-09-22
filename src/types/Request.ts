export type Request = {
  id: number;
  title: string;
  description: string;
  type: 'consultation' | 'case';
  tag: string;
  status: 'pending' | 'accepted' | 'rejected';
  timestamp: string;
  lawyerName: string;
  special: string;
};
