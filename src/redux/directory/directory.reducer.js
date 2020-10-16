const INITIAL_STATE = {
  sections: [
    {
      title: "Mens Sneakers",
      imageUrl: "images/mens-sneakers/mens-shoe-hero.jpg",
      id: 1,
      linkUrl: "shop/mens_sneakers",
    },
    {
      title: "Womens Sneakers",
      imageUrl: "images/womens-sneakers/womens-shoe-hero.jpg",
      id: 2,
      linkUrl: "shop/womens_sneakers",
    },
    {
      title: "Mens Leather",
      imageUrl: "images/mens-leather/mens-leather-hero.jpg",
      id: 3,
      linkUrl: "shop/mens_leather",
    },
    {
      title: "Womens Leather",
      imageUrl: "images/womens-leather/womens-leather-hero.jpg",
      id: 4,
      linkUrl: "shop/womens_leather",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
