import { IconError, IconInfo, IconWarning } from '../../common/icons'
import {
  AlertContainer,
  AlertContent,
  AlertIconContainer,
} from './styles/alert'
import { alertTypes } from './types'

interface IProps {
  msg: string
  type?: alertTypes
}

const Alert = ({ msg, type = 'DEFAULT' }: IProps) => {
  const handleIcons = (type: alertTypes) => {
    const icons = {
      INFO: <IconInfo />,
      WARNING: <IconWarning />,
      ERROR: <IconError />,
      DEFAULT: <IconInfo />,
    }

    return icons[type]
  }

  return (
    <AlertContainer>
      <AlertIconContainer type={type}>{handleIcons(type)}</AlertIconContainer>
      <AlertContent>
        <span>{msg}</span>
      </AlertContent>
    </AlertContainer>
  )
}

export default Alert
