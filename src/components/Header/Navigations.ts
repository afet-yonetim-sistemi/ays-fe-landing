import { AiOutlineHome } from 'react-icons/ai'
import { IconType } from 'react-icons'

interface INavigation {
  title: string,
  pathName: string
  Icon: IconType
}

const Navigations: INavigation[] = [
  {
    title: 'home', pathName: '/', Icon: AiOutlineHome
  }
]

export default Navigations