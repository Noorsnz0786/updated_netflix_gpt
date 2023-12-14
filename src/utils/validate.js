export const CheckValidData = (email,password)=>{

    const isvalidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    const isvalidPassword =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

      if(!isvalidEmail) return "Email id is not Valid";
      if(!isvalidPassword) return "Password is not Valid";

      return null;
}

