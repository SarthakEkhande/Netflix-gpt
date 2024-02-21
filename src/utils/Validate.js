
export const cheakvaliddata=(name,email,password)=>{

    const isnamevalid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const isemailvalid=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isnamevalid) return "Name is Not Valid"

    if(!isemailvalid) return "Email Id Not Valid";
    
    if(!ispasswordvalid) return "Password is Not Valid";

    if(isemailvalid && ispasswordvalid) return "Good match"

    return null

}