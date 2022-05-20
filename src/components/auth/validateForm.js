
export default function validateForm(input){
    let err = {};
    if (!/^([a-z\d.-_]+)@([a-z\d]+)\.([a-z\d]+)$/.test(input.email)) {
      err.email = "Enter a valid email";
    } else err.email = "";

    if (!/(?=.*[0-9])/.test(input.password)) {
      err.password = "Pass should contain at least one number";
    } else err.password = "";
    return err;
  };
