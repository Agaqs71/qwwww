import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Official Trump Meme | GetTrumpMemes',
  description: 'Trump Meme Coin - The Official Meme Coin of Trump Supporters',
  openGraph: {
    title: 'The Official Trump Meme | GetTrumpMemes',
    description: 'Trump Meme Coin - The Official Meme Coin of Trump Supporters',
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 