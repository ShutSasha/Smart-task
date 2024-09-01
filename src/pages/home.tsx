import * as React from 'react'
import { useGetUsersQuery } from '~/app/services/user'
import { useAppDispatch, useAppSelector } from '~/app/store'
import { setUsers } from '~/features/user/user.slice'
import { Flex } from '~/shared/components/flex/flex.component'
import { SearchFilter } from '~/shared/components/search-filter/search-filter.component'
import { Table } from '~/shared/components/table/table.component'
import { AppLayout } from '~/shared/layouts/app.layout'
import { SIZE_SCALE } from '~/shared/styles/size.enum'

export const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { data: users } = useGetUsersQuery()
  const filteredUsers = useAppSelector((state) => state.user.filteredUsers)

  React.useEffect(() => {
    if (users) {
      dispatch(setUsers(users))
    }
  }, [users, dispatch])

  return (
    <AppLayout>
      <Flex $justify='center' $align='center' $height='100vh'>
        <Flex $gap={SIZE_SCALE.EXTRA_LARGE}>
          {filteredUsers.length > 0 ? (
            <Table titles={['Name', 'Username', 'Email', 'Phone']} users={filteredUsers} />
          ) : (
            <p style={{ alignSelf: 'center' }}>Users by this prompt doesn't exist</p>
          )}
          <SearchFilter />
        </Flex>
      </Flex>
    </AppLayout>
  )
}
