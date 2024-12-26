import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  });

  return formatter.format(price);
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// TODO: update this
export function constructMetadata({
  title = "",
  description = "",
  image = "/",
  icons = "/favicon.ico",
} = {}) {
  return {
    title,
    description,
    icons,
    openGraph: {
      title,
      description,
      siteName: "",
      url: "https://www.example.com",
      type: "website",
      images: [{ url: image }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@hairunhuang",
    },
    metadataBase: new URL('https://example.xyz')
  };
}