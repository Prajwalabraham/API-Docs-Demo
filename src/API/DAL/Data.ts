const events = [
    {
      type: 'event',
      uid: 18,
      name: 'Event 1',
      tagline: 'Join us for an exciting event!',
      schedule: new Date('2023-05-10T10:00:00Z'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      files: {
        image: 'event1.jpg',
      },
      moderator: 'John Doe',
      category: 'Conference',
      sub_category: 'Technology',
      rigor_rank: 4,
      attendees: [21, 35, 42],
    },
    {
      type: 'event',
      uid: 19,
      name: 'Event 2',
      tagline: 'Discover new insights and trends.',
      schedule: new Date('2023-05-15T14:30:00Z'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      files: {
        image: 'event2.jpg',
      },
      moderator: 'Jane Smith',
      category: 'Webinar',
      sub_category: 'Marketing',
      rigor_rank: 3,
      attendees: [15, 28, 39],
    },
    {
        type: 'latest',
        uid: 20,
        name: 'Event 3',
        tagline: 'Discover new things',
        schedule: new Date('2023-05-20T10:00:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        files: {
            image: 'event3.jpg'
        },
        moderator: 'John Doe',
        category: 'Conference',
        sub_category: 'Technology',
        rigor_rank: 4,
        attendees: [21, 35, 42],
    },
    { 
        type: 'latest',
        uid: 21,
        name: 'Event 4',
        tagline: 'Discover new things',
        schedule: new Date('2023-05-25T10:00:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        files: {
            image: 'event4.jpg'
        },
        moderator: 'Prajwal',
        category: 'Conference',
        sub_category: 'Technology',
        rigor_rank: 4,
        attendees: [21, 35, 42],

    },
    {
        type: 'event',
        uid: 22,
        name: 'Event 5',
        tagline: 'Unlock the secrets of successful entrepreneurship.',
        schedule: new Date('2023-05-25T16:00:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        files: {
          image: 'event21.jpg',
        },
        moderator: 'Emily Davis',
        category: 'Workshop',
        sub_category: 'Business',
        rigor_rank: 2,
        attendees: [18, 24, 37],
      },
      {
        type: 'event',
        uid: 23,
        name: 'Event 5',
        tagline: 'Experience the future of technology.',
        schedule: new Date('2023-05-20T09:00:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        files: {
          image: 'event3.jpg',
        },
        moderator: 'Robert Johnson',
        category: 'Conference',
        sub_category: 'Technology',
        rigor_rank: 5,
        attendees: [12, 33, 47],
      }
  ];
  
  export { events };
  