import React, { Fragment } from "react";
import { Button, Container, Image, Grid, Segment,Divider, GridColumn } from "semantic-ui-react";

const Signin = (props) => {
  return (
    <Fragment>       
      <Grid columns={2} stackable textAlign='center' >
        <Grid.Column>
          <h2>If you are a student, please log in with Google</h2>
          <h1><button class="ui google button"> 
            <i class="google icon"></i>
                Google
          </button></h1>
        </Grid.Column>
        <Grid.Column>
          <h2>If you are a company, please log in with Linkedin</h2>
          <h1><button class="ui linkedin button"> 
            <i class="linkedin icon"></i>
                Linkedin
          </button></h1>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Signin;