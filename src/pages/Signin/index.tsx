import { EyeIcon } from "../../assets/icons";
import LOGO from "../../assets/imgs/nohalt-logo.svg";
import { ButtonComponent } from "../../components/Button";
import { TextInput } from "../../components/Input";

export function Signin() {
  return (
    <div
      className="w-[100%] h-[100%] min-h-screen p-0 m-0 flex items-center justify-center"
      style={{
        background: "radial-gradient(circle, #393836 0%, #030303 100%)",
      }}
    >
      <div className="h-[550px] w-[550px] flex flex-col items-center gap-8">
        <section>
          <img src={LOGO} alt="NoHalt Logo" />
        </section>
        <section className="w-[100%] bg-gray/8 min-h-[350px] rounded-[2px] flex flex-col items-center gap-10 py-[45px] px-10">
          <span className="text-[22px] text-white font-bold">
            Bem vindo de volta!
          </span>
          <div className="w-[320px] flex flex-col items-center gap-6">
            <TextInput
              className="w-full"
              label="E-mail"
              placeholder="exemple@exemple.com"
            />
            <TextInput
              className="w-full"
              label="Senha"
              placeholder="********"
              type="password"
              endIcon={<EyeIcon />}
            />
            <ButtonComponent>Entrar</ButtonComponent>
          </div>
        </section>
        <span className="text-white text-sm">
          Não tem uma conta?{" "}
          <a href="/signup" className="text-blue-50 underline ml-2">
            Cadastre-se
          </a>
        </span>
      </div>
    </div>
  );
}
