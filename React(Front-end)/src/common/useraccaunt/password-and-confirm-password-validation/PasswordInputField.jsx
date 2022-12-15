import '../UserAccount.css'

function PasswordInputField({handleValidation, handlePasswordChange, passwordValue, passwordError}){
    return (
        <>
    <div className="">
        <input 
            type="password"
            value={passwordValue} 
            onChange={handlePasswordChange}
            onKeyUp={handleValidation} 
            name="password"
            placeholder="Password"
            className="form-control mt-1" />
        <p className="text-danger">{passwordError}</p>
   </div>
          
        </>
    )
}

export default PasswordInputField;