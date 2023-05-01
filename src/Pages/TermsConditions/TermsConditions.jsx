import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="container text-center mt-5">
      <h3 className="text-center">Terms & Condition</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sed quam ea aut atque
        eligendi? Voluptate nulla, temporibus placeat ducimus quibusdam dicta in unde ab nam
        sapiente magni voluptas cupiditate omnis consequuntur architecto dolorem eius vitae, vel
        nihil autem dignissimos, labore nisi. Tempore quos commodi illum obcaecati saepe?
        Aspernatur, quibusdam.
      </p>
      <Button variant="dark" className="w-25">
        <Link to="/login/register" className="text-decoration-none text-white">
          Register
        </Link>
      </Button>
    </div>
  );
};

export default TermsConditions;
