import React, { Component } from 'react';
import UsersData from '../mockup/users.json';

export default class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:UsersData
      };
    };
    
  render() {
    return (
        <div className="users__table">
            <table>
                <thead>
                    <th>
                       id
                    </th>
                    <th>
                       Nom
                    </th>
                    <th>
                       Prénom
                    </th>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.firstname}
                                </td>
                                <td>
                                    {user.lastname}
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>    
        </div>
    );
  }
}
