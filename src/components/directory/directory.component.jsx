import React from "react";

import MenuItem from "../menu-items/menu-item.component";

import "./directory.styles.css";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Mens",
          imageUrl: "images/mens-shoe-hero.jpg",
          id: 1,
          linkUrl: "Men",
        },
        {
          title: "Womens",
          imageUrl: "images/womens-shoe-hero.jpg",
          id: 2,
          linkUrl: "Women",
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
