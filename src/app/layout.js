import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
// https://nextjs.org/docs/app/getting-started/images-and-fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins ({
  weight:["400","600","700"],
  subsets:["latin"]
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  title: {
    default: "Learning Next JS",
    template: "%s | Learning Next Js" // %s : placeholder string
  },
  keywords: ['Next.js', 'React', 'JavaScript', 'Learning','Playground'],
  description: "Trying to learn  Next Js as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
        <Navbar />
        <main className="h-screen h-max-[600px] place-content-center ">
          {children} 
        </main>
       
        <footer className="text-center bg-slate-600">
          Awesome Next Js Project
        </footer>
      </body>
    </html>
  );
}
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata