import React, {useState} from "react";
import {connect} from "react-redux";
import {getListUser, addGetListUser, deletGetListUser, editGetListUser} from "./Action"
import {selectListUSer, selectIsLoading} from './Selectors'
const Todolist  = (props) => {
    const {handleGetListUser, 
        handleAddGetListUser, 
        handleDeleteGetListUser, 
        handleEditListUser,
        listUser,
        isLoading
        } = props;
    const [listUserTodo, setListUserTodo] = useState('');
    const [phoneUserTodo, setPhoneUserTodo] = useState('');
    const [emailUserTodo, setEmailUserTodo] = useState('');
    const [addressUserTodo, setAddressUserTodo] = useState('')
    const [newEditListUser, setNewEditListUser] = useState({})
    const [searchUserTodo, setSearchUserTodo] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const handleOnclickGetListUser = () => {
        handleGetListUser()
    }
    const handleOnchangeInputUserName = (event) => {
        const value = event.target.value
        setListUserTodo(value)
    }
    const handleOnchangeInputNumberPhone = (event) => {
        const value = event.target.value
        setPhoneUserTodo(value)
    }
    const handleOnchangeInputEmail = (event) => {
        const value = event.target.value
        setEmailUserTodo(value)
    }
    const handleOnchangeInputAdress = (event) => {
        const value = event.target.value;
        setAddressUserTodo(value)
    }

    // Add user name
    const handleOnclickAddUser = () => {
        if(listUserTodo && phoneUserTodo && emailUserTodo && addressUserTodo){
            handleAddGetListUser({
                name: listUserTodo,
                phone: phoneUserTodo,
                email: emailUserTodo,
                address: addressUserTodo
            })
        }
        setListUserTodo('')
        setPhoneUserTodo('')
        setEmailUserTodo('')
        setAddressUserTodo('')
    }

    const handleOnclickDeleteUser = (id) => {
        handleDeleteGetListUser(id)
    }

    const handleOnclickEditUSer = (item) => {
        console.log("Item User = ", item)
        const {name, phone, email, address} = item
        setListUserTodo(name);
        setPhoneUserTodo(phone);
        setEmailUserTodo(email);
        setAddressUserTodo(address)
        setNewEditListUser(item)
    }
    
    const handleOnclickEditUser = () => {
        const newListUser = {
            ...newEditListUser,
            name: listUserTodo,
            phone: phoneUserTodo,
            email: emailUserTodo,
            address: addressUserTodo,
        }
        handleEditListUser(newListUser)
        setListUserTodo('')
        setPhoneUserTodo('')
        setEmailUserTodo('')
        setAddressUserTodo('')
    }

    const handleOnchangeInputSearchUser = (event) => {
        const value = event.target.value;
        setSearchUserTodo(value)
        const newValue = value.toLowerCase();
        const dataFilter = listUser.filter(item => item.name.toLowerCase().includes(newValue));
        setSearchResult(dataFilter) 
    }
    const data = searchUserTodo ? searchResult : listUser
    
    return(
        <>
            <input type="text" 
                name="searchUserTodo" 
                value={searchUserTodo} 
                autoComplete="off" 
                onChange={(event)=>handleOnchangeInputSearchUser(event)} 
                placeholder="search"/>
            <h2>Todolist</h2>
            <h2>User Name: {listUserTodo}</h2>
            <h2>Phone: {phoneUserTodo}</h2>
            <h2>Email: {emailUserTodo}</h2>
            <h2>Address: {addressUserTodo}</h2>
            <input 
                type="text" 
                name="listUserTodo" 
                value={listUserTodo}
                autoComplete="off" 
                onChange={(event)=>handleOnchangeInputUserName(event)} 
                placeholder="addUserName"/>
            <input 
                type="number" 
                name="phoneUserTodo" 
                value={phoneUserTodo}
                autoComplete="off" 
                onChange={(event)=>handleOnchangeInputNumberPhone(event)} 
                placeholder="phone"/>  
            <input 
                type="email" 
                name="emailUserTodo" 
                value={emailUserTodo}
                autoComplete="off" 
                onChange={(event)=>handleOnchangeInputEmail(event)} 
                placeholder="email"/>
            <input 
                type="text" 
                name="addressUserTodo" 
                value={addressUserTodo}
                autoComplete="off" 
                onChange={(event)=>handleOnchangeInputAdress(event)} 
                placeholder="address"/> 
            <button onClick={handleOnclickAddUser}>Add User</button>
            <button onClick={handleOnclickEditUser}>Edit User</button>
            <button onClick={handleOnclickGetListUser}>Get List User</button>
            {
                isLoading ? (<h2>Loading...</h2>) :
                (
                    <table border='1' cellPadding='10' cellSpacing='0' style={{margin: '1rem auto'}}>
                        <thead>
                            <th>Stt</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </thead>
                        {
                            data.map((item, array, index) => {
                                return(
                                    <tbody>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button onClick={()=>handleOnclickEditUSer(item)}>Edit</button>
                                                <button onClick={()=>handleOnclickDeleteUser(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                )
            }
        </>
    )
}
const mapStateToProps = state => {
    return{
        listUser: selectListUSer(state),
        isLoading: selectIsLoading(state)
    }
}
const mapDispatchToProps = dispatch => {
    return{
        handleGetListUser: () => dispatch(getListUser()),
        handleAddGetListUser: (data) => dispatch(addGetListUser(data)),
        handleDeleteGetListUser: (data) => dispatch(deletGetListUser(data)),
        handleEditListUser: (data) => dispatch(editGetListUser(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);