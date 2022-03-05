import { React, useState } from 'react'
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa'

import Navbar from '../navbar/Navbar'

import { useSelector } from 'react-redux';


const UserInfo = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState(useSelector(state => state[0])); 


    function loadUserData() {
        if(isLoading) {
            axios.get("http://localhost:8081/user/"+userId)
            .then(response => {
                const info = response.data;

                setUserInfo({
                    userId: info.userId,
                    firstName: info.firstName,
                    lastName: info.lastName,
                    sex: info.sex,
                    dob: info.dob,
                    phoneNum: info.phoneNum,
                    email: info.email
                });
            }).catch(err => console.log(err));

            setIsLoading(false);
        }
    }


    loadUserData();

    return (
        <div>
            <Navbar />

            <div className='d-flex flex-column align-items-center mt-5'>
                <h4>User Information</h4>
                <h1 className='display-1 mt-3 mb-4'><FaUserCircle /></h1>

                <form style={{width: '45%'}}>
                    <div className='form-group d-flex flex-column mt-2 mb-3 align-items-start'>
                        <label for="user-id" className='me-3'>User ID</label>
                        <input type="number" className='form-control' value={userInfo.userId} name="user-id" readOnly />
                    </div>

                    <div className='form-group d-flex flex-column my-3 align-items-start'>
                        <label for="first-name" className='me-3'>First Name</label>
                        <input type="text" className='form-control' value={userInfo.firstName} name="first-name" readOnly />
                    </div>

                    <div className='form-group d-flex flex-column my-3 align-items-start'>
                        <label for="last-name" className='me-3'>Last Name</label>
                        <input type="text" className='form-control' value={userInfo.lastName} name="last-name" readOnly />
                    </div>

                    <div className='form-group d-flex flex-column my-3 align-items-start'>
                        <label for="sex" className='me-3'>Sex</label>
                        <input type="text" className='form-control' value={userInfo.sex} name="sex" readOnly />
                    </div>

                    <div className='form-group d-flex flex-column my-3 align-items-start'>
                        <label for="dob" className='me-3'>Date of Birth</label>
                        <input type="date" className='form-control' value={userInfo.dob} name="dob" readOnly />
                    </div>

                    <div className='form-group d-flex flex-column my-3 align-items-start'>
                        <label for="phone-num" className='me-3'>Phone Number</label>
                        <input type="text" className='form-control' value={userInfo.phoneNum} name="phone-num" readOnly />
                    </div>

                    <div className='form-group d-flex flex-column my-3 align-items-start'>
                        <label for="email" className='me-3'>Email</label>
                        <input type="text" className='form-control' value={userInfo.email} name="email" readOnly />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserInfo