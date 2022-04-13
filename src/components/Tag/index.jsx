import styles from './tag.module.css'

function Tag({label}) {
    return (
        <div className={styles.tag}>{ label }</div>
    )
}

Tag.defaultProps = {
    label: "Default Label"
}

export default Tag;