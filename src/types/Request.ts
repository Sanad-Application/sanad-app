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
  userId: number;
  userName: string;
};

export type RequestData = {
  type: 'consultation' | 'case';
  title: string;
  description?: string;
  tagId: number;
  attachment: string | null;
  keywords?: string[];
};
