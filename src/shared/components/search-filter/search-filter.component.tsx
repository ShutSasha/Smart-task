import * as React from 'react'
import styled from 'styled-components'
import { themeColors } from '~/shared/styles/colors.const'
import { FONT_WEIGHT } from '~/shared/styles/fonts/font-weight.enum'
import { Flex } from '../flex/flex.component'
import { Input } from '../input/input.component'
import { SIZE_SCALE } from '~/shared/styles/size.enum'
import { useAppDispatch, useAppSelector } from '~/app/store'
import { clearFilters, setFilters } from '~/features/user/user.slice'

const StyledBlockHeader = styled.div`
  background-color: ${themeColors.focusing};
  padding: 20px 136px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-weight: ${FONT_WEIGHT.BOLD};
`

const StyledText = styled.p`
  color: ${themeColors.textPrimary}
  font-weight: ${FONT_WEIGHT.SEMI_BOLD}
`

const StyledBtn = styled.button`
  padding: 9px 32px;
  background-color: ${themeColors.focusing};
  border-radius: 10px;
  color: ${themeColors.textPrimary};
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: ${SIZE_SCALE.REGULAR};
  line-height: ${SIZE_SCALE.LARGE};
  cursor: pointer;
  align-self: center;
`

export const SearchFilter: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.user.filters)

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFilters({ ...filters, [e.target.name]: e.target.value }))
  }

  const handleClearFilters = (): void => {
    dispatch(clearFilters())
  }

  return (
    <Flex $direction='column' $backgroundColor={themeColors.main} $borderRadius='15px'>
      <StyledBlockHeader>Search filter by</StyledBlockHeader>
      <Flex $padding='24px' $direction='column' $gap='24px'>
        <Flex $direction='column' $gap='12px'>
          <StyledText>Name</StyledText>
          <Input
            value={filters.name || ''}
            onChange={handleFilterChange}
            name='name'
            $borderRadius='10px'
            $padding='9px 6px'
            $fontWeight={FONT_WEIGHT.MEDIUM}
          />
        </Flex>
        <Flex $direction='column' $gap='12px'>
          <StyledText>Username</StyledText>
          <Input
            value={filters.username || ''}
            onChange={handleFilterChange}
            name='username'
            $borderRadius='10px'
            $padding='9px 6px'
            $fontWeight={FONT_WEIGHT.MEDIUM}
          />
        </Flex>
        <Flex $direction='column' $gap='12px'>
          <StyledText>Email</StyledText>
          <Input
            value={filters.email || ''}
            onChange={handleFilterChange}
            name='email'
            $borderRadius='10px'
            $padding='9px 6px'
            $fontWeight={FONT_WEIGHT.MEDIUM}
          />
        </Flex>
        <Flex $direction='column' $gap='12px'>
          <StyledText>Phone</StyledText>
          <Input
            value={filters.phone || ''}
            onChange={handleFilterChange}
            name='phone'
            $borderRadius='10px'
            $padding='9px 6px'
            $fontWeight={FONT_WEIGHT.MEDIUM}
          />
        </Flex>
        <StyledText>Just start typing for search some user</StyledText>
        <StyledBtn onClick={handleClearFilters}>Clear Filters</StyledBtn>
      </Flex>
    </Flex>
  )
}
