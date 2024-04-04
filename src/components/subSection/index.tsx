import React, { ReactNode } from 'react'
import {
  SubSectionContainer,
  SubSectionContent,
  SubSectionTitle,
} from './styles/subSection'
import { IconType } from 'react-icons'

interface IProps {
  SubSectionIcon: IconType
  subSectionTitle: string
  children: ReactNode
}

const SubSection = ({ SubSectionIcon, subSectionTitle, children }: IProps) => {
  return (
    <SubSectionContainer>
      <SubSectionTitle>
        <SubSectionIcon />
        <h3>{subSectionTitle}</h3>
      </SubSectionTitle>
      <SubSectionContent>{children}</SubSectionContent>
    </SubSectionContainer>
  )
}

export default SubSection
