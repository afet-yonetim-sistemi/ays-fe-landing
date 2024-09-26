'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  formSchema,
  type FormSchema,
} from '@/components/EmergencyForm/schema/formSchema'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'
import onSubmitForm from '@/services/formService'
import EvacuationForm from '@/components/EmergencyForm/EvacuationForm'

export default function SelfEvacuationForm(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

  const onSubmit = async (values: FormSchema): Promise<void> => {
    setLoading(true)
    await onSubmitForm(
      {
        ...values,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
      },
      () => {
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
        <EvacuationForm form={form} />
        <Button
          disabled={loading}
          type="submit"
          className="!bg-submitBlue w-full text-lg"
        >
          {loading ? 'Gönderiliyor...' : 'Gönder'}
        </Button>
      </form>
    </Form>
  )
}
