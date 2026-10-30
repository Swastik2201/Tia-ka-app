export interface MemoryPhoto {
  id: string;
  url: string;
  title: string;
  caption: string;
  date: string;
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
  anniversaryDate: string;
  startDate: string; // YYYY-MM-DD
  heroGreeting: string;
  heroSubtext: string;
  metrics: MilestoneMetric[];
  photos: MemoryPhoto[];
  letter: {
    greeting: string;
    paragraphs: string[];
    signOff: string;
    signature: string;
    date: string;
  };
}

export const anniversaryData: AnniversaryData = {
  partnerName: "Tia",
  yourName: "Swastik",
  milestoneTitle: "365 Days of Loving You",
  anniversaryDate: "October 30",
  startDate: "2023-10-30",
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
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
      title: "Where It All Began",
      caption: "Our very first coffee date. I remember being so nervous, but the moment you smiled, everything felt like home.",
      date: "October 30, 2023",
      location: "Our Favorite Little Cafe",
      aspect: "wide"
    },
    {
      id: "photo-2",
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
      title: "Golden Hour Strolls",
      caption: "Walking hand in hand as the sun melted into the horizon. Time always seems to pause whenever I am with you.",
      date: "December 14, 2023",
      location: "Sunset Promenade",
      aspect: "tall"
    },
    {
      id: "photo-3",
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
      title: "Pure Joy & Laughter",
      caption: "One of those moments where we couldn't stop giggling at something silly. Your laugh is still my absolute favorite melody.",
      date: "February 14, 2024",
      location: "Valentine's Weekend Getaway",
      aspect: "square"
    },
    {
      id: "photo-4",
      url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=80",
      title: "Cozy Rainy Afternoon",
      caption: "Wrapped in blankets, warm chai in hand, watching raindrops trace the window pane. Perfect simple peace.",
      date: "April 22, 2024",
      location: "Cozy Living Room",
      aspect: "tall"
    },
    {
      id: "photo-5",
      url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
      title: "Underneath the Stars",
      caption: "Looking up at a sky full of stars, knowing the brightest star was right next to me holding my jacket.",
      date: "July 19, 2024",
      location: "Hilltop Overlook",
      aspect: "wide"
    },
    {
      id: "photo-6",
      url: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=80",
      title: "365 Days Later...",
      caption: "A whole year later, and I still fall deeper in love with you each day. Thank you for being my anchor, my muse, and my favorite person.",
      date: "October 30, 2024",
      location: "Right Here, Forever",
      aspect: "square"
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
    signature: "Swastik ❤️",
    date: "October 30, 2024"
  }
};
