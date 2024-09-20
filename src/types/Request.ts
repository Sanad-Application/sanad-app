export type Request = {
  id: number;
  type: 'consultation' | 'case';
  status: 'pending' | 'accepted' | 'rejected';
  timestamp: string;
  tag: string;
  lawyerName: string;
  special: string;
};
