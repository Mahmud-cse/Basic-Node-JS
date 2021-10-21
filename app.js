// Code from client side

const [users, setUsers] = useState([]);
const nameRef = useRef('');
const emailRef = useRef('');

useEffect(() => {
  fetch('http://localhost:5000/users')
    .then((res) => res.json())
    .then(data => setUsers(data));
})

const handleAddUser = e => {
  e.preventDefault();
  const name = nameRef.current.value;
  const email = emailRef.current.value;

  const newUser = { name: name, email: email };

  // send data to server
  fetch('http://localhost:5000/users', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // const addedUser = data;
      // const newUser = [...users, addedUser];
      // setUsers(newUsers);
    })
  nameRef.current.value = '';
  emailRef.current.value = '';
}