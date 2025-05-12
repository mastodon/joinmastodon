import { Input } from "@headlessui/react"
import {
  AddressElement,
  PaymentElement,
  useCheckout,
} from "@stripe/react-stripe-js"
import classNames from "classnames"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"

import LoadingIcon from "../public/icons/loading.svg?inline"

import { Button } from "./Button"

interface DonateCheckoutProps {
  onComplete: () => void
  className?: string
}

export function DonateCheckout({ className }: DonateCheckoutProps) {
  const checkout = useCheckout()

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(null)
    setEmail(e.target.value)
  }, [])

  const handleEmailBlur = useCallback(async () => {
    if (!email) {
      return
    }

    const result = await checkout.updateEmail(email)
    if (result.type === "error") {
      setMessage(result.error.message)
    } else {
      setMessage(null)
    }
  }, [checkout, email])

  const handleCheckout = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setIsLoading(true)

      const result = await checkout.updateEmail(email)
      if (result.type === "error") {
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
    },
    [checkout, email]
  )

  return (
    <form
      className={classNames("dark:text-white", className)}
      onSubmit={handleCheckout}
    >
      <div className="flex max-sm:flex-col gap-4">
        <div className="w-full">
          <label>
            <p className="mb-2">Email</p>
            <Input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="me@example.com"
              className={classNames(
                "w-full p-4 bg-gray-3 rounded-md",
                "placeholder:text-gray-1"
              )}
              onBlur={handleEmailBlur}
            />
          </label>
          <hr className="my-4 border-t border-gray-3" />
          <h4 className="mb-2 mt-4">Billing Address</h4>
          <AddressElement options={{ mode: "billing" }} />
        </div>

        <div className="w-full">
          <h4 className="mb-2">Payment</h4>
          <PaymentElement className="" />
        </div>
      </div>

      <div className="mt-4">
        {message && <p className="text-error text-b3 mb-2">{message}</p>}
        <Button
          disabled={isLoading}
          dark
          className={classNames(
            "flex gap-2 items-center justify-center",
            isLoading && "text-gray-2"
          )}
          fullWidth
          type="submit"
        >
          {isLoading ? (
            <>
              <LoadingIcon className="motion-safe:animate-spin size-5" />
              <span>Submitting&hellip;</span>
            </>
          ) : (
            `Pay ${checkout.total.total.amount} now`
          )}
        </Button>
      </div>
    </form>
  )
}
