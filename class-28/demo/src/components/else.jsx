const Else = (props) => {
    if (props.condition) {
        return null;
    } else {
        //the children in the app component, is the <p></p>
        return props.children;
    }
}
export default Else;