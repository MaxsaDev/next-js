import { FC } from 'react';
import H from "../H/H";
import { contactType } from '../../types';

type contactInfoProps = {
    contact: contactType,
}


const ContactInfo:FC<contactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <H tag='h3' text='Empty contact'/>
  }

  return (
    <>
      <H tag='h3' text={name.toUpperCase()}/>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>

    </>
  );
};

export default ContactInfo;