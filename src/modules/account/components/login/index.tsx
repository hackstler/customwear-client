import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">Bienvenido</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
      Inicia sesión para acceder a una experiencia de compra mejorada.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Correo"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <ErrorMessage error={message} />
        <SubmitButton className="w-full mt-6 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800">Entrar</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        No estas registrado?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          Unete a nosotros
        </button>
        .
      </span>
    </div>
  )
}

export default Login
