import MainSection from '../../components/mainSection'
import OptionCard from '../../components/optionCard'
import SubSection from '../../components/subSection'
import { SubSections } from '../../components/subSection/styles/subSection'
import {
  IconAdd,
  IconBook,
  IconList,
  IconNumList,
  IconUsers,
} from '../../common/icons'

const Management = () => {
  return (
    <>
      <MainSection Icon={IconUsers} header="Gestão">
        <SubSections>
          <SubSection SubSectionIcon={IconBook} subSectionTitle="Livros">
            <OptionCard
              cardTitle="Adicionar"
              CardIcon={IconAdd}
              cardLink="books/create"
            />
            <OptionCard
              cardTitle="Listar"
              CardIcon={IconNumList}
              cardLink="/"
            />
          </SubSection>
          <SubSection SubSectionIcon={IconUsers} subSectionTitle="Usuários">
            <OptionCard cardTitle="Adicionar" CardIcon={IconAdd} cardLink="/" />
            <OptionCard
              cardTitle="Listar"
              CardIcon={IconNumList}
              cardLink="/"
            />
          </SubSection>
          <SubSection SubSectionIcon={IconList} subSectionTitle="Gêneros">
            <OptionCard
              cardTitle="Adicionar"
              CardIcon={IconAdd}
              cardLink="genres/create"
            />
            <OptionCard
              cardTitle="Listar"
              CardIcon={IconNumList}
              cardLink="/"
            />
          </SubSection>
          <SubSection SubSectionIcon={IconUsers} subSectionTitle="Autores">
            <OptionCard
              cardTitle="Adicionar"
              CardIcon={IconAdd}
              cardLink="authors/create"
            />
            <OptionCard
              cardTitle="Listar"
              CardIcon={IconNumList}
              cardLink="/"
            />
          </SubSection>
        </SubSections>
      </MainSection>
    </>
  )
}

export default Management
