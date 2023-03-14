import { UsersT } from '../../types/Todos';
import User from './User';

interface UsersProps {
    users: UsersT[]
}

const Users = ({ users }: UsersProps) => {
    return (
        <div className="users">
            {users.map(user => <User key={user.id} user={user} />).splice(0, 9)}
        </div>
    );
}

export default Users;