const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const vname = document.getElementById('vname')
const address = document.getElementById('address')
const desc = document.getElementById('desc')
const space = document.getElementById('space')
const phn = document.getElementById('phn')
const part = document.getElementById('part')
const capacity = document.getElementById('Capacity')
const pno = document.getElementById('pno')
const bp = document.getElementById('bp')


function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateform(){
    
    var nameErr = true;
    var lnameErr = true;
    var emailErr = true;
    var vnameErr = true;
    var addErr = true;
    var descErr = true;
    var mobileErr = true;
    var capErr  = true;
    var pnoErr = true;
    var bpErr = true;
    var spaceErr = true;
    var partErr = true;


    if(fname.value == "") {
        printError("nameErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname.value) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }


    if(lname.value == "") {
        printError("lnameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname.value) === false) {
            printError("lnameErr", "Please enter a valid name");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
        }
    }

    if(email.value == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email.value) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    if(vname.value == "") {
        printError("vnameErr", "Please enter your Venue name");
    }
    
    if(address.value == "") {
        printError("addErr", "Please enter venue address");
    }

    if(desc.value == "") {
        printError("descErr", "Please enter a description");
    }
    
    if(space.value == "") {
        printError("spaceErr", "Please select a valid option");
    }
    
    if(phn.value == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(phn.value) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if(part.value == "") {
        printError("partErr", "Please select a valid option");
    }

    if(capacity.value == "") {
        printError("capErr", "Please enter the capacity of your place");
    } else {
        var regex = /^((200)|(1[0-9]{2})|([1-9][0-9]{1})|([4-9]))$/;
        if(regex.test(capacity.value) === false) {
            printError("capErr", "Please enter capacity between 4-200");
        } else{
            printError("capErr", "");
            capErr = false;
        }
    }

    if(pno.value == "") {
        printError("pnoErr", "Please enter your PAN Card Number for verification and record purposes");
    } else {
        var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
        if(regex.test(pno.value) === false) {
            printError("pnoErr", "Please enter a valid PAN Card Number for verification and record purposes");
        } else{
            printError("pnoErr", "");
            pnoErr = false;
        }
    }

    if(bp.value == "") {
        printError("bpErr", "Please enter a suitable price for booking  purposes");
    } 

    
    if(nameErr || lnameErr || emailErr || vnameErr || addErr || descErr || mobileErr || capErr || pnoErr || bpErr || spaceErr || partErr == true) {
        return false;
     }

    else{
        alert('Successful');
    }
}