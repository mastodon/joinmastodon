import { Input } from "@headlessui/react"
import {
  AddressElement,
  PaymentElement,
  useCheckout,
} from "@stripe/react-stripe-js"
import classNames from "classnames"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Button } from "./Button"

interface DonateCheckoutProps {
  onComplete: () => void
  className?: string
}

export function DonateCheckout({ className }: DonateCheckoutProps) {
  const checkout = useCheckout()

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmailError(null)
    setEmail(e.target.value)
  }, [])

  const handleEmailBlur = useCallback(async () => {
    if (!email) {
      return
    }

    const result = await checkout.updateEmail(email)
    if (result.type === "error") {
      setEmailError(result.error.message)
    } else {
      setEmailError(null)
    }
  }, [checkout, email])

  const handleCheckout = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setIsLoading(true)

      const result = await checkout.updateEmail(email)
      if (result.type === "error") {
        setEmailError(result.error.message)
        setMessage(result.error.message)
        setIsLoading(false)
        return
      }

      const confirmResult = await checkout.confirm()

      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (confirmResult.type === "error") {
        setMessage(confirmResult.error.message)
      }

      setIsLoading(false)
    },
    [checkout, email]
  )

  return (
    <form
      className={classNames("dark:text-white", className)}
      onSubmit={handleCheckout}
    >
      <label className="">
        <p className="mb-2">Email</p>
        <Input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="me@example.com"
          className={classNames(
            "w-full p-4 bg-gray-3 rounded-md",
            "placeholder:text-gray-1",
            emailError && "border-error"
          )}
          onBlur={handleEmailBlur}
        />
        {emailError && <p className="text-error text-sm mt-2">{emailError}</p>}
      </label>
      <hr className="my-4 border-t border-gray-3" />
      <h4 className="mb-2 mt-4">Billing Address</h4>
      <AddressElement
        options={{ mode: "billing", autocomplete: { mode: "disabled" } }}
      />
      <hr className="my-4 border-t border-gray-3" />
      <h4 className="mb-2 mt-4">Payment</h4>
      <PaymentElement />
      <Button
        disabled={isLoading}
        dark
        className="mt-4"
        fullWidth
        type="submit"
      >
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          `Pay ${checkout.total.total.amount} now`
        )}
      </Button>
    </form>
  )
}
