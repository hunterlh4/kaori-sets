import type { RouteObject } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "@/components/layout"
import { Home } from "@/pages/home"
import { Search } from "@/pages/search"
import { Heroes } from "@/pages/heroes"
import { Treasures } from "@/pages/treasures"
import { About } from "@/pages/about"
import { FAQ } from "@/pages/faq"
import { QuienesSomos } from "@/pages/quienes-somos"
import { ProductDetail } from "@/pages/product-detail"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "heroes",
        element: <Heroes />,
      },
      {
        path: "treasures",
        element: <Treasures />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "quienes-somos",
        element: <QuienesSomos />,
      },
      {
        path: "item/:slug",
        element: <ProductDetail />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
