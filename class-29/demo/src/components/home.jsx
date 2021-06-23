export default (props) => {
    console.log(props);
    console.log(props.match.params.id);
    return (
        <strong>Welcome Home :D</strong>
    )
}