import React from "react";
import { Link } from "react-router-dom";

function AccountButton(){
    return(
        <Link to = "account" className="text-white bg-purple-700 border-l rounded p-2 h-10 mx-2">
            Account
        </Link>
    )
}

export default AccountButton;