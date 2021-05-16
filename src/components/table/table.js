import React from 'react';
import contacts from '../../contacts.json'
import ContactCard from '../contact/ContactCard'


class table extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {
            contactsList: contacts,
            copyContactsList: contacts,
        }
    
    }

    add5RandomContacts = () =>{

        let arrContact = [];

        for(let i = 0; i<5; i++){
            

            let randomNum = Math.floor(Math.random() * this.state.contactsList.length);
            //console.log(randomNum);
            arrContact.push(this.state.contactsList.splice(randomNum,1));

        }
        
        
        console.log(arrContact);
        console.log('-------------------------------------------------')
        console.log(this.state.copyContactsList)
        this.pushCopyArrToState(arrContact);
    }

    //pushCopyArrToState = (arrObj) =>{
        /* this.setState({
            copyContactList: arrObj,
        }) */

        //console.log(this.state.copyContactList);
        //console.log(arrObj);
    //}

    render(){

        //console.log(this.state.arrContacts);
        return(
            <div>
               {    
                    this.add5RandomContacts(),
                    this.state.contactsList.map( contact=>{
                   //console.log(contact);
                        return(
                            <p key={contact.id}>{contact.name}</p>
                        )
                    })
                }
            </div>
        )
    }

}

export default table;