function Spacer(props) {
    const styles = {
        height: `${props.h}rem`,
        width: `${props.w}rem`,
    };
    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

export default Spacer;