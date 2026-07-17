export interface NavLink {
  path: string
  name: string
}

export const navLinks: NavLink[] = [
  {
    path: "/",
    name: "Inicio",
  },
  {
    path: "/heroes",
    name: "Héroes",
  },
  {
    path: "/treasures",
    name: "Tesoros",
  },
  {
    path: "/faq",
    name: "FAQ",
  },
  {
    path: "/quienes-somos",
    name: "Quiénes somos",
  },
]
