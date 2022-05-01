import styles from './MapContact.module.scss';

const MapContact = ({ obj }) => {


  return <div className={styles.container}>
    <p>{obj.key}</p>
    <p>{obj.value}</p>
  </div>
}

export default MapContact;