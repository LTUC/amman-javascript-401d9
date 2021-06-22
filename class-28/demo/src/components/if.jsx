const If = (props) => {
    if (props.condition) {
        // if the flag is true, return the modal (If componant children)
        return props.children;
    } else {
        return null;
    }
}
export default If;