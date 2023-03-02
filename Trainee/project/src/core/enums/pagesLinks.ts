enum PagesLinks {
  Home = "/",
  Products = "/products",
  About = "/about",
  Contacts = "/contacts",
}

export const routes = [
  {
    path: PagesLinks.Home,
    exact: true,
  },
  {
    path: PagesLinks.About,
    exact: true,
  },
  {
    path: PagesLinks.Products,
    exact: true,
    routes: [
      {
        path: "/products/:id",
        exact: true,
      },
    ],
  },
  {
    path: PagesLinks.Contacts,
    exact: true,
  },
];

export default PagesLinks;
