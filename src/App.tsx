import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

function App() {
  const [ship, setShip] = React.useState("yamato");
  const selectHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShip(event.target.value);
  };
  const [name, setName] = React.useState("");
  const textHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };
  const [checked, setChecked] = React.useState(false);
  const checkHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const [result, setResult] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const send = () => {
    if (checked) {
      setResult(true);
      setAlert(false);
    } else {
      setResult(false);
      setAlert(true);
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Paper elevation={3} sx={{ width: 400, p: 1, m: 1 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid xs={12} sx={{ textAlign: "center" }}>
            <h1>フォーム</h1>
          </Grid>
          {alert && (
            <Grid xs={12} sx={{ pb: 4 }}>
              <Alert severity="error">
                チェックボックスにチェックを入れてください。
              </Alert>
            </Grid>
          )}
          <Grid xs={12}>
            <FormControlUnstyled>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Grid xs={5}>
                  <div style={{ textAlign: "right" }}>セレクト</div>
                </Grid>
                <Grid xs={7}>
                  <select
                    id="demo-simple-select"
                    value={ship}
                    onChange={selectHandleChange}
                    style={{
                      width: "100%",
                      height: "56px",
                      padding: "6px",
                      fontSize: "1em",
                    }}
                  >
                    <option value="yamato">大和</option>
                    <option value="shigure">時雨</option>
                    <option value="yukikaze">雪風</option>
                  </select>
                </Grid>
                <Grid xs={5}>
                  <div style={{ textAlign: "right" }}>テキストフィールド</div>
                </Grid>
                <Grid xs={7}>
                  <TextField
                    id="demo-simple-text"
                    value={name}
                    onChange={textHandleChange}
                    placeholder="文字を入力"
                    fullWidth
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="checkbox"
                        checked={checked}
                        onChange={checkHandleChange}
                      />
                    }
                    label="チェックボックス"
                    sx={{ justifyContent: "center" }}
                  />
                </Grid>
                <Grid xs={12} display="grid" justifyContent="right">
                  <Button id="decision" variant="contained" onClick={send}>
                    決定
                  </Button>
                </Grid>
              </Grid>
            </FormControlUnstyled>
          </Grid>
        </Grid>
        {result && (
          <Grid
            xs={12}
            alignItems="center"
            justifyContent="center"
            display="grid"
          >
            <table border={1}>
              <thead>
                <tr>
                  <th>key</th>
                  <th>value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>セレクト</td>
                  <td>{ship}</td>
                </tr>
                <tr>
                  <td>テキストフィールド</td>
                  <td>{name}</td>
                </tr>
              </tbody>
            </table>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
}

export default App;
