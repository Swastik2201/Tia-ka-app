export interface MemoryPhoto {
  id: string;
  url: string;
  title: string;
  caption: string;
  date?: string;
  location?: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface MilestoneMetric {
  label: string;
  value: string;
  iconName: string;
  subtext?: string;
}

export interface AnniversaryData {
  partnerName: string;
  yourName: string;
  milestoneTitle: string;
  anniversaryDate?: string;
  startDate?: string;
  heroGreeting: string;
  heroSubtext: string;
  metrics: MilestoneMetric[];
  photos: MemoryPhoto[];
  letter: {
    greeting: string;
    paragraphs: string[];
    signOff: string;
    signature: string;
    date?: string;
  };
}

export const anniversaryData: AnniversaryData = {
  partnerName: "Tia",
  yourName: "Swastik",
  milestoneTitle: "365 Days of Loving You",
  heroGreeting: "Happy 1st Anniversary, My Love ❤️",
  heroSubtext: "Every single second of this past year with you has been my favorite adventure. Here is to 365 days of smiles, late night talks, inside jokes, and endless warmth.",
  
  metrics: [
    {
      label: "Days Together",
      value: "365",
      iconName: "CalendarHeart",
      subtext: "1 Beautiful Year"
    },
    {
      label: "Hours of Magic",
      value: "8,760",
      iconName: "Clock",
      subtext: "Cherished every one"
    },
    {
      label: "Smiles & Giggles",
      value: "Countless",
      iconName: "Sparkles",
      subtext: "You light up my world"
    },
    {
      label: "Love Ahead",
      value: "Infinity",
      iconName: "Infinity",
      subtext: "Just getting started"
    }
  ],

  photos: [
    {
      id: "photo-1",
      url: "/images/photo-1.jpg",
      title: "The Warmest Hugs",
      caption: "Tucked away together, smiling without a care in the world. Being with you always feels like the safest, happiest place.",
      location: "In Our Little Bubble",
      aspect: "tall"
    },
    {
      id: "photo-2",
      url: "/images/photo-2.jpg",
      title: "Seaside Adventures",
      caption: "Silly faces, ocean breeze in our hair, and endless laughter. With you, even the simplest walk becomes my absolute favorite memory.",
      location: "By The Water",
      aspect: "square"
    },
    {
      id: "photo-3",
      url: "/images/photo-3.jpg",
      title: "Partners In Crime",
      caption: "Our classic mirror moment. The prettiest girl in the world right by my side, making every ordinary second feel extraordinary.",
      location: "Moments Before Heading Out",
      aspect: "tall"
    },
    {
      id: "photo-4",
      url: "/images/photo-4.jpg",
      title: "Dressed Up & Celebrating",
      caption: "Looking our absolute best, but more importantly, looking at you in awe. You shine brighter than anything, always.",
      location: "Together & Celebrating",
      aspect: "tall"
    }
  ],

  letter: {
    greeting: "Dearest Tia,",
    paragraphs: [
      "Can you believe it has already been a whole year? 365 days ago, our paths crossed in a way that forever changed the melody of my life. From our very first conversations to our spontaneous late-night adventures, every single chapter we've written together has been nothing short of magical.",
      "Thank you for being my constant source of warmth and sunshine. Your kindness, your infectious laugh, the gentle way you understand me without a single word, and the gentle comfort of your hand in mine—these are the gifts I cherish every single day.",
      "Life with you is softer, brighter, and filled with so much color. Through every quiet morning, every busy afternoon, and every starry night, loving you has been the easiest and most beautiful choice I have ever made.",
      "Here is to our first 365 days of endless memories, and to all the unwritten adventures waiting for us in the years to come. I promise to keep making you smile, to stand beside you in all seasons, and to love you even more tomorrow than I do today."
    ],
    signOff: "Forever & Always Yours,",
    signature: "Swastik ❤️"
  }
};
