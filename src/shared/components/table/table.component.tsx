import * as React from 'react'
import styled from 'styled-components'
import { themeColors } from '~/shared/styles/colors.const'
import { User } from '~/types/user.types'

const StyledTable = styled.table`
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  max-width: 1170px;

  thead tr {
    background-color: ${themeColors.focusing};
    text-align: left;
  }

  th {
    padding: 20px 32px;
  }

  td {
    padding: 15px 32px;
  }

  tbody tr:nth-of-type(even) {
    background-color: ${themeColors.main};
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${themeColors.subMain};
  }

  /* top-left border-radius */
  tr:first-child th:first-child {
    border-top-left-radius: 15px;
  }

  /* top-right border-radius */
  tr:first-child th:last-child {
    border-top-right-radius: 15px;
  }

  /* bottom-left border-radius */
  tr:last-child td:first-child {
    border-bottom-left-radius: 15px;
  }

  /* bottom-right border-radius */
  tr:last-child td:last-child {
    border-bottom-right-radius: 15px;
  }
`

interface TableProps {
  titles: string[]
  users: User[]
}

export const Table: React.FC<TableProps> = ({ titles, users }): JSX.Element => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}
