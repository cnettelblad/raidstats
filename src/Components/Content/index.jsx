import styles from './styles.module.scss'

const Content = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default Content