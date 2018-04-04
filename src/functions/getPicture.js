import BackOfStands from '../images/4X8 Back Of Stands.jpg'
import AnnouncersStand from '../images/Announcers Stand.jpg'
import AboveSpeakers from '../images/4X8 Boards Above Speakers.jpg'
import Courtyard from '../images/4X8 Courtyard Fence.jpg'
import ArenaBanners from '../images/Arena Banners.jpg'
import BuckingChutes from '../images/Bucking Chutes.jpg'
import ReturnGate from '../images/Return Gate.jpg'
import Stage from '../images/RoadRunner Stage.jpg'

export default title => {
  switch (title) {
    case 'Announcers Stand':
      return AnnouncersStand
    case '4X8 Back Of Stands':
      return BackOfStands
    case '4X8 Boards Above Speakers':
      return AboveSpeakers
    case 'Bucking Chutes':
      return BuckingChutes
    case '4X8 Courtyard Fence':
      return Courtyard
    case 'Arena Banners':
      return ArenaBanners
    case 'Return Gate':
      return ReturnGate
    case 'RoadRunner Stage':
      return Stage
  }
}
