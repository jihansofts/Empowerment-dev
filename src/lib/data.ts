interface ImageData {
  url: string;
  type: string;
}

interface Story {
  category: string;
  image: ImageData[];
}

const stories: Story[] = [
  {
    category: "Romania",
    image: [
      {
        url: "/images/romania1.jpg",
        type: "image/jpeg",
      },
      {
        url: "/images/romania2.jpg",
        type: "image/jpeg",
      },
    ],
  },
  {
    category: "Serbia",
    image: [
      {
        url: "/images/serbia1.jpg",
        type: "image/jpeg",
      },
      {
        url: "/images/serbia2.jpg",
        type: "image/jpeg",
      },
    ],
  },
  {
    category: "Croatia",
    image: [
      {
        url: "/images/croatia1.jpg",
        type: "image/jpeg",
      },
      {
        url: "/images/croatia2.jpg",
        type: "image/jpeg",
      },
    ],
  },
  {
    category: "Bosnia",
    image: [
      {
        url: "/images/bosnia1.jpg",
        type: "image/jpeg",
      },
      {
        url: "/images/bosnia2.jpg",
        type: "image/jpeg",
      },
    ],
  },
  {
    category: "Malta",
    image: [
      {
        url: "/images/malta1.jpg",
        type: "image/jpeg",
      },
      {
        url: "/images/malta2.jpg",
        type: "image/jpeg",
      },
    ],
  },
];

export default stories;
