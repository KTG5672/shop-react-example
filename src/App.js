import React from "react";
import "./App.css";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";
import {signout} from "./service/ApiService"; // signout 추가

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // navigationBar 추가
    var navigationBar = (
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h6">Shop</Typography>
            </Grid>
            <Grid class="float-right">
              <Button color="inherit" onClick={signout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    /* 선택한 content 렌더링 */
    return <div className="App">{navigationBar}</div>;
  }
}

export default App;