const SHOP_DATA = {
  mens_sneakers: {
    id: 1,
    title: "Mens Sneakers",
    routeName: "mens_sneakers",
    items: [
      {
        id: 1,
        name: "Nike Air TM",
        imageUrl:
          "https://i.ibb.co/jh3y7P4/andres-jasso-u4un-Ys-XQHn-E-unsplash.jpg",
        price: 165,
        alt: "Black low top nike air with light gray nike swoosh",
        author: "Photo by whereslugo on Unsplash",
      },
      {
        id: 2,
        name: "Adidas Yeezy White/Black",
        imageUrl:
          "https://i.ibb.co/dt8LtQ9/daniel-chen-EM-a3a-MGypw-unsplash.jpg",
        price: 220,
        alt: "Black adidas yeezys with white writing on side",
        author: "Photo by Daniel Chen on Unsplash",
      },
      {
        id: 3,
        name: "Adidas Yeezy Neon",
        imageUrl:
          "https://i.ibb.co/sJHXDsT/diego-jaramillo-b-Jl-Zg69x5lg-unsplash.jpg",
        price: 200,
        alt: "Neon green adidas yeezys",
        author: "Photo by Diego Jaramillo on Unsplash",
      },
      {
        id: 4,
        name: "Adidas PW Tennis",
        imageUrl:
          "https://i.ibb.co/NrYskDk/matthew-hamilton-3-Cf-NHc-YVDYQ-unsplash-1.jpg",
        price: 180,
        alt: "Red adidas pw tennis shoes",
        author: "Photo by Matthew Hamilton on Unsplash",
      },
      {
        id: 5,
        name: "Reebok Pink Hightops",
        imageUrl:
          "https://i.ibb.co/r34yhNV/nicholas-bui-t-DWQJZ0-USow-unsplash.jpg",
        price: 130,
        alt: "Pink reebok hightops, no decal",
        author: "Photo by Nicholas Bui on Unsplash",
      },
      {
        id: 6,
        name: "Nike Air Hightops Patrol",
        imageUrl:
          "https://i.ibb.co/6YV3Lr6/whereslugo-ad047ky-PBh8-unsplash.jpg",
        price: 260,
        alt: "White Nike hightops patrol sneakers",
        author: "Photo by Whereslugo on Unsplash",
      },
    ],
  },
  womens_sneakers: {
    id: 2,
    title: "Womens Sneakers",
    routeName: "womens_sneakers",
    items: [
      {
        id: 7,
        name: "Adidas Yeezy Pink",
        imageUrl:
          "https://i.ibb.co/fxKVh1q/erik-mclean-Byj-Iz-Fupc-Ho-unsplash.jpg",
        price: 200,
        alt: "Pink womens adidas yeezys",
        author: "Photo by Erik Mclean on Unsplash",
      },
      {
        id: 8,
        name: "New Balance Encap",
        imageUrl:
          "https://i.ibb.co/s90gXPJ/linda-xu-f-UEP0djb1h-A-unsplash.jpg",
        price: 125,
        alt: "White new balance encaps with neon orange decal",
        author: "Photo by Linda Xu on Unsplash",
      },
      {
        id: 9,
        name: "Nike Air Max 90",
        imageUrl:
          "https://i.ibb.co/2KwDs1D/malvestida-magazine-DMl5g-G0y-WWY-unsplash.jpg",
        price: 130,
        alt: "White nike air max with blue and pink details",
        author: "Photo by Mavestida Magazine on Unsplash",
      },
      {
        id: 10,
        name: "Nike Air Classic",
        imageUrl:
          "https://i.ibb.co/j85fY3j/nathan-jongerius-dbi-ZRVk-RQk-unsplash.jpg",
        price: 110,
        alt: "White nike air classics with foil detail",
        author: "Photo by Nathan Jongerius on Unsplash",
      },
      {
        id: 11,
        name: "Nike Air Jordan",
        imageUrl: "https://i.ibb.co/z8wg0dz/pat-kwon-EJTjetc8t-Ps-unsplash.jpg",
        price: 170,
        alt: "White, black and red hightops with red toe",
        author: "Photo by Pat Kwon on Unsplash",
      },
      {
        id: 12,
        name: "Nike Air Max Gold",
        imageUrl:
          "https://i.ibb.co/k0pR4Sr/pauline-figuet-ph59-Y9k-IHo-M-unsplash.jpg",
        price: 200,
        alt: "Gold low top nikes with two tone pink and gold swoosh",
        author: "Photo by Pauline Figuet on Unsplash",
      },
    ],
  },
  mens_leather: {
    id: 3,
    title: "Mens Leather",
    routeName: "mens_leather",
    items: [
      {
        id: 13,
        name: "Suede Penny Loafers",
        imageUrl:
          "https://i.ibb.co/3z7QMBk/alex-hudson-Cpip61-Lp28-Q-unsplash.jpg",
        price: 90,
        alt: "Tan suede penny loafers",
        author: "Photo by Alex Hudson on Unsplash",
      },
      {
        id: 14,
        name: "Leather Dockers",
        imageUrl:
          "https://i.ibb.co/nCn6Ft9/alexander-andrews-Ofv-V-jkgrf-Q-unsplash.jpg",
        price: 110,
        alt: "Dark brown leather boat shoes/dockers",
        author: "Photo by Alexander Andrews on Unsplash",
      },
      {
        id: 15,
        name: "Ivory Toe Capps",
        imageUrl:
          "https://i.ibb.co/QfjVDyh/erik-jan-leusink-Ojr-DJf-BE-Yg-unsplash.jpg",
        price: 250,
        alt: "Ivory leather toe capp shoes",
        author: "Photo by Erik Jan on Unsplash",
      },
      {
        id: 16,
        name: "Leather Loafers",
        imageUrl:
          "https://i.ibb.co/yQVNsv6/gabe-pierce-e-Ttb-Rqk-KBE8-unsplash.jpg",
        price: 80,
        alt: "Dark brown leather loafers with foot bridge tassel",
        author: "Photo by Gabe Pierce on Unsplash",
      },
      {
        id: 17,
        name: "The Standard",
        imageUrl:
          "https://i.ibb.co/pnj6ySc/jonathan-brinkhorst-M1-R0a-HIBAVY-unsplash.jpg",
        price: 130,
        alt: "Dark leather ankle support boots with zipper on side",
        author: "Photo by Nicholas Bui on Unsplash",
      },
      {
        id: 18,
        name: "Tan Oxford Smooth Toe",
        imageUrl:
          "https://i.ibb.co/FYkR5pF/shelbey-miller-HIQd4db8-Kr8-unsplash.jpg",
        price: 100,
        alt: "Tan smooth toed oxfords",
        author: "Photo by Shelbey Miller on Unsplash",
      },
    ],
  },
  womens_leather: {
    id: 4,
    title: "Womens Leather",
    routeName: "womens_leather",
    items: [
      {
        id: 19,
        name: "Duck Boots",
        imageUrl:
          "https://i.ibb.co/C5JR7DJ/emma-dau-e-MMxokm-BSik-unsplash.jpg",
        price: 125,
        alt: "Navy Blue rubber bottom duck boots",
        author: "Photo by Emma Dau on Unsplash",
      },
      {
        id: 20,
        name: "Leather Standards",
        imageUrl:
          "https://i.ibb.co/K2ftr5w/freestocks-RUfnl-BA-9-Iw-unsplash.jpg",
        price: 95,
        alt: "Cream color zip up standard work boots",
        author: "Photo by freestock on Unsplash",
      },
      {
        id: 21,
        name: "Yellow Combat",
        imageUrl:
          "https://i.ibb.co/C0qHw8q/noah-buscher-H6-HNYGsye-KQ-unsplash.jpg",
        price: 150,
        alt: "School bus yellow rubber combat boots",
        author: "Photo by Noah Buscher on Unsplash",
      },
      {
        id: 22,
        name: "Timberlands",
        imageUrl:
          "https://i.ibb.co/qj9n22d/tom-sodoge-3v-Ad-YH9-Ff-G0-unsplash.jpg",
        price: 130,
        alt: "Classic tan timberland hihgtops",
        author: "Photo by freestock on Unsplash",
      },
    ],
  },
  // socks: {
  //   id: 5,
  //   title: "Socks",
  //   routeName: "socks",
  //   items: [
  //     {
  //       id: 1,
  //       name: "Kee High",
  //       imageUrl: "images/womens-sneakers/socks-knee-high.jpg",
  //       price: 10,
  //       alt: "Knee high white socks",
  //       author: "Photo by Alev Takil on Unsplash",
  //     },
  //     {
  //       id: 2,
  //       name: "Solid Yellow",
  //       imageUrl: "images/womens-sneakers/socks-solid-yellow.jpg",
  //       price: 8,
  //       alt: "Bright yellow dress socks",
  //       author: "Photo by Jaizer Capangpangan on Unsplash",
  //     },
  //     {
  //       id: 3,
  //       name: "Kno Socks",
  //       imageUrl: "images/womens-sneakers/socks-kno-socks.jpg",
  //       price: 5,
  //       alt: "Socks for the when you don't won't to wear any",
  //       author: "Photo by Jan Romero on Unsplash",
  //     },
  //     {
  //       id: 4,
  //       name: "Crown",
  //       imageUrl: "images/womens-sneakers/sock-crown.jpg",
  //       price: 15,
  //       alt: "Socks with a crown emblem at the top",
  //       author: "Photo by Rodney Gainous on Unsplash",
  //     },
  //   ],
  // },
};

export default SHOP_DATA;
