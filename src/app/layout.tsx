import './globals.scss'
import type { Metadata } from 'next'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FirebaseApiKey,
  authDomain: process.env.NEXT_PUBLIC_FirebaseAuthDomain,
  projectId: process.env.NEXT_PUBLIC_FirebaseProjectId,
  storageBucket: process.env.NEXT_PUBLIC_FirebaseStorageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FirebaseMessagingSenderId,
  appId: process.env.NEXT_PUBLIC_FirebaseAppId,
  measurementId: process.env.NEXT_PUBLIC_FirebaseMeasurementId
};

const app = initializeApp(firebaseConfig);

export const metadata: Metadata = {
  title: 'CoralMC - Admin Panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
