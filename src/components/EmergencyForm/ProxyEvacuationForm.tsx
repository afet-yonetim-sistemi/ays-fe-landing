'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  formSchema,
  type FormSchema,
} from '@/components/EmergencyForm/schema/formSchema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CountryData } from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from '@/components/ui/PhoneInput'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { FiAlertTriangle } from 'react-icons/fi'
import onSubmitForm from '@/services/formService'
import EvacuationForm from '@/components/EmergencyForm/EvacuationForm'

export default function ProxyEvacuationForm(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false)
  const [step, setStep] = useState<number>(1)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    defaultValues: {
      applicantFirstName: '',
      applicantLastName: '',
      applicantPhoneNumber: { countryCode: '90', lineNumber: '' },
      firstName: '',
      lastName: '',
      seatingCount: 1,
      phoneNumber: { countryCode: '90', lineNumber: '' },
      sourceCity: '',
      sourceDistrict: '',
      address: '',
      targetCity: '',
      targetDistrict: '',
    },
  })

  const applicantCountryCodeError = form.getFieldState(
    'applicantPhoneNumber.countryCode',
    form.formState
  ).error
  const applicantLineNumberError = form.getFieldState(
    'applicantPhoneNumber.lineNumber',
    form.formState
  ).error

  const nextStep = async (): Promise<void> => {
    const isValid = await form.trigger([
      'applicantFirstName',
      'applicantLastName',
      'applicantPhoneNumber',
    ])
    if (isValid) {
      form.clearErrors()
      setStep(2)
    }
  }

  const prevStep = (): void => setStep(1)

  const onSubmit: SubmitHandler<FormSchema> = async (values) => {
    setLoading(true)
    await onSubmitForm(
      {
        ...values,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        applicantFirstName: values.applicantFirstName?.trim(),
        applicantLastName: values.applicantLastName?.trim(),
      },
      () => {
        setStep(1)
        form.reset()
      }
    )
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-nightBlue space-y-2"
      >
        {step === 1 ? (
          <>
            <div className="grid grid-cols-2 gap-2">
              <FormField
                key="applicantFirstName"
                name="applicantFirstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="İsim" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                key="applicantLastName"
                name="applicantLastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Soyisim" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              key="applicantPhoneNumber"
              name="applicantPhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInput
                      value={field.value.countryCode + field.value.lineNumber}
                      onChange={(value: string, country: CountryData) => {
                        const countryCode: string = country.dialCode
                        const lineNumber: string = value.slice(
                          countryCode.length
                        )
                        field.onChange({ countryCode, lineNumber })
                      }}
                    />
                  </FormControl>
                  <div className="text-red-500 font-thin text-sm flex gap-2">
                    <span>{applicantCountryCodeError?.message}</span>
                    <span>{applicantLineNumberError?.message}</span>
                  </div>
                </FormItem>
              )}
            />
            <Alert
              variant="default"
              className="bg-transparent border-orange-500 text-backgorund"
            >
              <FiAlertTriangle className="text-xl !text-orange-500" />
              <AlertTitle className="font-semibold text-orange-500">
                Dikkat
              </AlertTitle>
              <AlertDescription className="w-full text-orange-500 ">
                Formun bu kısmını kendinize ait bilgiler ile doldurarak diğer
                adıma geçin!
              </AlertDescription>
            </Alert>
            <Button
              disabled={loading}
              onClick={nextStep}
              className="!bg-submitBlue float-end text-lg w-full mt-2"
            >
              ileri
            </Button>
          </>
        ) : (
          <>
            <EvacuationForm form={form} />
            <div className="w-full grid grid-cols-2 gap-2">
              <Button
                disabled={loading}
                onClick={prevStep}
                className="!bg-submitBlue text-lg"
              >
                Geri
              </Button>
              <Button
                disabled={loading}
                type="submit"
                className="!bg-submitBlue text-lg"
              >
                Gönder
              </Button>
            </div>
          </>
        )}
      </form>
    </Form>
  )
}
