import LoginContext from "./context/auth";
import Acl from './components/acl';
import Login from './components/login';


const EditButton = (props) => {
  return (
    <Acl capability="update">
      <button>Edit</button>
    </Acl>
  )
}

const DeleteButton = (props) => {
  return (
    <Acl capability="delete">
      <button>Delete</button>
    </Acl>
  )
}

function App() {
  return (
    <LoginContext>
      <Login />
      <EditButton />
      <DeleteButton />
    </LoginContext>
  );
}

export default App;