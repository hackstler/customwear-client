"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">
        Conviértete en miembro de CustomWear
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Crea tu perfil de miembro de la tienda Customwear y obtén acceso a un
        experiencia de compra mejorada.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nombre"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Apellido"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Correo"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Telefono" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="Contraseña"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Al crear una cuenta, aceptas Customwear&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Política de privacidad
          </LocalizedClientLink>{" "}
          y{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Terminos de uso
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6">Registrarse</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        ¿Ya estas registrado?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Entra
        </button>
        .
      </span>
    </div>
  )
}

export default Register
