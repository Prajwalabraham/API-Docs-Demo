export interface Event {
    type: string;
    uid: number;
    name: string;
    tagline: string;
    schedule: Date;
    description: string;
    files: {
      image: string;
    };
    moderator: string;
    category: string;
    sub_category: string;
    rigor_rank: number;
    attendees: number[];
  }