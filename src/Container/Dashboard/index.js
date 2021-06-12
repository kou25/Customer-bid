import React from 'react'
import Table from '../../Components/Table'
const data = [
    { firstName: "Kylynn", 
    avatarUrl: "https://prod_membership_avatars.s3.amazonaws.com/avatar-file-d84b533b09f34ab6908345833dc21773.jpg", 
    email: "test@tes.com", 
    phone: "9876543210" },
    { firstName: "Kylynn", 
    avatarUrl: "https://prod_membership_avatars.s3.amazonaws.com/avatar-file-d84b533b09f34ab6908345833dc21773.jpg", 
    email: "test@tes.com", 
    phone: "9876543210" },
  ];
export default function Dashboard() {
    return (
        <div className="container">
           <Table data={data} />
        </div>
    )
}
