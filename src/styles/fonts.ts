import {
  Noto_Sans_Anatolian_Hieroglyphs as Nato,
  Montserrat,
} from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'

// define your variable fonts
const nato: NextFont = Nato({ subsets: ['latin'], weight: ['400'] })
const montserrat: NextFont = Montserrat({ subsets: ['latin'] })

export { nato, montserrat }
