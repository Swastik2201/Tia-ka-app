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
      aspect: "tall"
    },
    {
      id: "photo-2",
      url: "/images/photo-2.jpg",
      title: "Seaside Adventures",
      caption: "Silly faces, ocean breeze in our hair, and endless laughter. With you, even the simplest walk becomes my absolute favorite memory.",
      aspect: "square"
    },
    {
      id: "photo-3",
      url: "/images/photo-3.jpg",
      title: "Partners In Crime",
      caption: "Our classic mirror moment. The prettiest girl in the world right by my side, making every ordinary second feel extraordinary.",
      aspect: "tall"
    },
    {
      id: "photo-4",
      url: "/images/photo-4.jpg",
      title: "Dressed Up & Celebrating",
      caption: "Looking our absolute best, but more importantly, looking at you in awe. You shine brighter than anything, always.",
      aspect: "tall"
    }
  ],

  letter: {
    greeting: "Dearest Tia,",
    paragraphs: [
      "Honestly, I never thought that we would end up dating anyway, but here we are after a year and to be honest, it has been a heck of a journey with you. I have always thought that you are too pretty for me and which is true of course. I am so grateful that you have come into my life because I feel like I have matured a lot and grown as a person.",
      "I have always felt like a sense of calmness around you and you know I can be myself around you. I don't know if you feel the same way but I hope that I can make you feel that way soon.",
      "I know that I haven't been the best boyfriend and to be honest I have been far from it, but I am learning everyday.",
      "Thank You again for being there for me everytime I wanted to have someone to talk to and Thank You for being my Peace.",
      "I know that we come up with some disagreements but I want to solve them with you than with anyone else and I know that we will."
    ],
    signOff: "Forever & Always Yours,",
    signature: "Swastik ❤️"
  }
};
