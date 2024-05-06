import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Entrar
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sair
      </Button>
    </>
  );
};

export default Login;
