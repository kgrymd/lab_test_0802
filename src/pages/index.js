import Image from 'next/image'
import { Inter } from 'next/font/google'
import NewsSlider from './NewsSlider'; // NewsSliderコンポーネントをインポート


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NewsSlider />
    </div>
  )
}
