function Hello(){

    let name = 'Rafikul';
    let number = 510;
    let fullName=()=>{
        return 'Rafikul Shaikh'
    }
    return <h3> 
        Message no :{number}  Hi I from Kolkata .I am  your freind {fullName()}
    </h3>
}

export default Hello;