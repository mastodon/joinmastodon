import { PaymentElement, useCheckout } from "@stripe/react-stripe-js"
import classNames from "classnames"
import Link from "next/link"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { FormattedMessage } from "react-intl"

import LoadingIcon from "../../public/icons/loading.svg?inline"
import ArrowLeftIcon from "../../public/ui/arrow-left.svg?inline"

import { Button } from "../Button"
import { Input } from "../Input"

interface DonateCheckoutProps {
  backUrl?: string
  className?: string
  onComplete: () => void
}

export function DonateCheckout({
  className,
  backUrl,
  onComplete,
}: DonateCheckoutProps) {
  const checkout = useCheckout()

  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null)
    setEmail(e.target.value)
  }, [])

  const handleEmailBlur = useCallback(async () => {
    if (!email) {
      return
    }

    const result = await checkout.updateEmail(email)
    if (result.type === "error") {
      setErrorMessage(result.error.message)
    } else {
      setErrorMessage(null)
    }
  }, [checkout, email])

  const handleCheckout = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setIsLoading(true)

      const result = await checkout.updateEmail(email)
      if (result.type === "error") {
        setErrorMessage(result.error.message)
        setIsLoading(false)
        return
      }

      const confirmResult = await checkout.confirm({
        redirect: "if_required", // Only redirect if required
      })

      if (confirmResult.type === "error") {
        setErrorMessage(confirmResult.error.message)
        setIsLoading(false)
      } else {
        onComplete()
      }
    },
    [checkout, email, onComplete]
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
      <div className="flex flex-col gap-4">
        <label className="w-full">
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
            onBlur={handleEmailBlur}
            disabled={isLoading}
            fullWidth
          />
        </label>

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
        {errorMessage && (
          <p className="text-error text-b3 mb-2">{errorMessage}</p>
        )}
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
                defaultMessage="Submitting…"
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
