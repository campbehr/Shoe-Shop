const INITIAL_STATE = {
  sections: [
    {
      title: "Mens Sneakers",
      imageUrl:
        "https://i.ibb.co/WPbMgqG/xavier-teo-Sx-AXph-IPWeg-unsplash-1.jpg",
      id: 1,
      linkUrl: "shop/mens_sneakers",
    },
    {
      title: "Womens Sneakers",
      imageUrl: "https://i.ibb.co/2qpy7vV/ryan-plomp-jvo-Z-Aux9aw-unsplash.jpg",
      id: 2,
      linkUrl: "shop/womens_sneakers",
    },
    {
      title: "Mens Leather",
      imageUrl:
        "https://i.ibb.co/pnj6ySc/jonathan-brinkhorst-M1-R0a-HIBAVY-unsplash.jpg",
      id: 3,
      linkUrl: "shop/mens_leather",
    },
    {
      title: "Womens Leather",
      imageUrl:
        "https://i.ibb.co/qj9n22d/tom-sodoge-3v-Ad-YH9-Ff-G0-unsplash.jpg",
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
