import React from "react";
import { TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
const Login = () => {
    return (
        <div>
            {" "}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f8f4f3",
                    minHeight: "100vh",

                    margin: "0px",
                    padding: "0px",
                }}
            >
                <div
                    style={{
                        borderStyle: "double",
                        borderRadius: "5px",
                        minWidth: "60vw",
                        backgroundColor: "white",
                    }}
                >
                    <form>
                        <Box
                            display="flex"
                            flexDirection={"column"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            borderRadius={2}
                        >
                            <h2>Login</h2>

                            <TextField
                                margin="normal"
                                id="email"
                                placeholder="Email"
                                autoComplete="email"
                                name="email"
                                // value={details.email}
                                // error={errors.email}
                                // helperText={errors.email && "Email is required."}
                                // onChange={changeHandler}
                                // autoFocus
                                sx={{ width: "50%", minHeight: "20px" }}
                            />

                            <TextField
                                margin="normal"
                                id="password"
                                placeholder="Password"
                                type="password"
                                name="password"
                                // value={details.password}
                                // error={errors.password}
                                // helperText={errors.password && "Password is required."}
                                // onChange={changeHandler}
                                autoComplete="password"
                                sx={{ width: "50%", minHeight: "20px" }}
                            />

                            <Button
                                sx={{
                                    marginTop: 1,
                                    marginBottom: 2,
                                    width: "50%",
                                    height: "50px",
                                }}
                                style={{
                                    borderRadius: 3,
                                    backgroundColor: "black",
                                    padding: "10px 10px",
                                    fontSize: "20px",
                                }}
                                variant="contained"
                                type="submit"
                            >
                                Login
                            </Button>
                        </Box>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
