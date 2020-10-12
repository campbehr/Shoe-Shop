import React from "react";

import MenuItem from "../menu-items/menu-item.component";

import "./directory.styles.css";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Mens Sneakers",
          imageUrl: "images/mens-sneakers/mens-shoe-hero.jpg",
          id: 1,
          linkUrl: "mens-sneakers",
        },
        {
          title: "Womens Sneakers",
          imageUrl: "images/womens-sneakers/womens-shoe-hero.jpg",
          id: 2,
          linkUrl: "womens-sneakers",
        },
        {
          title: "Mens Leather",
          imageUrl: "images/mens-leather/mens-leather-hero.jpg",
          id: 3,
          linkUrl: "mens-leather",
        },
        {
          title: "Womens Leather",
          imageUrl: "images/womens-leather/womens-leather-hero.jpg",
          id: 4,
          linkUrl: "womens-leather",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
