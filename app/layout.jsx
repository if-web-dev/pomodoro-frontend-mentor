import "./globals.css";
import { Kumbh_Sans } from "next/font/google";


const Kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: "400",
})


export const metadata = {
  title: "Frontend Mentor | Pomodoro app",
  description: "Frontend Mentor | Pomodoro app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`antialiased h-full bg-[#1E213F] ${Kumbh.className} text-[#D7E0FF]`}>
        {children}
      </body>
    </html>
  );
}