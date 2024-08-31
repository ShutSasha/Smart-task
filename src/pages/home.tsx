import * as React from 'react'
import { useGetUsersQuery } from '~/app/services/user'
import { useAppDispatch } from '~/app/store'
import { setUsers } from '~/features/user/user.slice'

export const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { data: users } = useGetUsersQuery()

  React.useEffect(() => {
    if (users) {
      dispatch(setUsers(users))
    }
  }, [users, dispatch])

  return <div>Home</div>
}
