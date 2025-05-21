import { Input } from "@headlessui/react"
import {
  AddressElement,
  PaymentElement,
  useCheckout,
} from "@stripe/react-stripe-js"
import classNames from "classnames"
import Link from "next/link"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { FormattedMessage } from "react-intl"

import LoadingIcon from "../public/icons/loading.svg?inline"
import ArrowLeftIcon from "../public/ui/arrow-left.svg?inline"

import { Button } from "./Button"

interface DonateCheckoutProps {
  onComplete: () => void
  className?: string
  backUrl?: string
}

export function DonateCheckout({ className, backUrl }: DonateCheckoutProps) {
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
        setIsLoading(false)
      }
    },
    [checkout, email]
  )

  return (
    <form
      className={classNames("dark:text-white", className)}
      onSubmit={handleCheckout}
    >
      <header className="mb-4">
        <h3 className="text-b1">
          {checkout.recurring ? (
            <FormattedMessage
              id="donate_widget.checkout.header.recurring"
              defaultMessage="You are donating {total} every {frequency}"
              values={{
                total: checkout.total.total.amount,
                frequency: checkout.recurring.interval,
              }}
            />
          ) : (
            <FormattedMessage
              id="donate_widget.checkout.header.one_time"
              defaultMessage="You are donating {total} once"
              values={{
                total: checkout.total.total.amount,
              }}
            />
          )}
        </h3>
        {backUrl && (
          <Link
            href={backUrl}
            className="text-gray-1 text-b3 mt-2 flex gap-1 items-center"
          >
            <ArrowLeftIcon className="size-4" />
            <FormattedMessage
              id="donate_widget.checkout.header.back"
              defaultMessage="Edit your donation"
            />
          </Link>
        )}
      </header>
      <hr className="my-4 border-t border-gray-2" />
      <div className="flex max-sm:flex-col gap-4">
        <div className="w-full">
          <label>
            <FormattedMessage
              id="donate_widget.checkout.email"
              defaultMessage="Email"
            >
              {(text) => <p className="mb-2">{text}</p>}
            </FormattedMessage>
            <Input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="me@example.com"
              className={classNames(
                "w-full p-4 bg-gray-2 rounded-md placeholder:text-gray-1"
              )}
              onBlur={handleEmailBlur}
            />
          </label>
          {/* <hr className="my-4 border-t border-gray-3" />
          <h4 className="mb-2 mt-4">Billing Address</h4>
          <AddressElement options={{ mode: "billing" }} /> */}
        </div>

        <div className="w-full">
          <h4 className="mb-2">
            <FormattedMessage
              id="donate_widget.checkout.payment"
              defaultMessage="Payment"
            />
          </h4>
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
              <FormattedMessage
                id="donate_widget.checkout.submitting"
                defaultMessage="Submitting&hellip;"
              />
            </>
          ) : (
            <FormattedMessage
              id="donate_widget.checkout.pay_button"
              defaultMessage="Pay {total} now"
              values={{
                total: checkout.total.total.amount,
              }}
            />
          )}
        </Button>
      </div>
    </form>
  )
}
