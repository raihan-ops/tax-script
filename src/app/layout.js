import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Shared/Navbar";
import styles from "./page.module.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tax Script',
  description: 'Generated by next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <div className={styles.container}>
          {children}
      </div>
      </body>
    </html>
  )
}