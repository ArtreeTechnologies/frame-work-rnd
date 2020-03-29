import React from 'react';
import Header from '@components/Header';
import { connect } from 'react-redux';
import { User } from '../../src/store/state/user';
import { fetchUser } from '../../src/store/actions/user';
import { StoreState } from '../../src/store';
import { bindActionCreators, Dispatch } from 'redux';
// import SignupForm from '@components/SignupForm';

interface AppProps {
  users: User[];
  fetchUser: typeof fetchUser;
}

class Signup extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { users } = this.props;
    return (
      <React.Fragment>
        <Header />
        {users.map((user) => (
          <div key={user.id}>{user.username}</div>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ users }: StoreState): { users: User[] } => ({
  users,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUser: bindActionCreators(fetchUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
