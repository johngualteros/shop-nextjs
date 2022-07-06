// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Figura Octocat",
      price: 100,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum autem quos repellat, cupiditate consequuntur neque ducimus nulla nam culpa esse eligendi! Quaerat culpa molestias ex ab, in ratione ipsam!
      Sed enim non accusantium aliquid asperiores expedita sequi molestias consequatur sapiente repellendus totam aliquam qui ea molestiae optio et laudantium adipisci dolore eos inventore. Blanditiis quam sunt quasi modi.`,
      image: "http://localhost:3000/img/octocat.jpg",
    },
    {
      id: 2,
      name: "Gorra",
      price: 50,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum autem quos repellat, cupiditate consequuntur neque ducimus nulla nam culpa esse eligendi! Quaerat culpa molestias ex ab, in ratione ipsam!
      Sed enim non accusantium aliquid asperiores expedita sequi molestias consequatur sapiente repellendus totam aliquam qui ea molestiae optio et laudantium adipisci dolore eos inventore. Blanditiis quam sunt quasi modi.`,
      image: "http://localhost:3000/img/gorra.webp",
    },
    {
      id: 3,
      name: "Chamarra",
      price: 200,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum autem quos repellat, cupiditate consequuntur neque ducimus nulla nam culpa esse eligendi! Quaerat culpa molestias ex ab, in ratione ipsam!
      Sed enim non accusantium aliquid asperiores expedita sequi molestias consequatur sapiente repellendus totam aliquam qui ea molestiae optio et laudantium adipisci dolore eos inventore. Blanditiis quam sunt quasi modi.`,
      image: "http://localhost:3000/img/chamarra_git.webp",
    },
    {
      id: 4,
      name: "MacBook",
      price: 475,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum autem quos repellat, cupiditate consequuntur neque ducimus nulla nam culpa esse eligendi! Quaerat culpa molestias ex ab, in ratione ipsam!
      Sed enim non accusantium aliquid asperiores expedita sequi molestias consequatur sapiente repellendus totam aliquam qui ea molestiae optio et laudantium adipisci dolore eos inventore. Blanditiis quam sunt quasi modi.`,
      image: "http://localhost:3000/img/macbook.jpeg",
    },
    {
      id: 5,
      name: "Stickers",
      price: 220,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum autem quos repellat, cupiditate consequuntur neque ducimus nulla nam culpa esse eligendi! Quaerat culpa molestias ex ab, in ratione ipsam!
      Sed enim non accusantium aliquid asperiores expedita sequi molestias consequatur sapiente repellendus totam aliquam qui ea molestiae optio et laudantium adipisci dolore eos inventore. Blanditiis quam sunt quasi modi.`,
      image: "http://localhost:3000/img/stickers.webp",
    },
    {
      id: 6,
      name: "Taza",
      price: 70,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum autem quos repellat, cupiditate consequuntur neque ducimus nulla nam culpa esse eligendi! Quaerat culpa molestias ex ab, in ratione ipsam!
      Sed enim non accusantium aliquid asperiores expedita sequi molestias consequatur sapiente repellendus totam aliquam qui ea molestiae optio et laudantium adipisci dolore eos inventore. Blanditiis quam sunt quasi modi.`,
      image: "http://localhost:3000/img/taza.webp",
    },
  ]);
}
