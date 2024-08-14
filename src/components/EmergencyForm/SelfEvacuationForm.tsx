'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formSchema, type FormSchema } from '@/components/EmergencyForm/schema/formSchema'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { CountryData } from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from '@/components/ui/PhoneInput'
import SelectLocation from '@/components/SelectLocation'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import onSubmitForm from '@/services/formService'
import EvacuationForm from '@/components/EmergencyForm/EvacuationForm'

export default function SelfEvacuationForm() {
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
      targetDistrict: ''
    }
  })

  const onSubmit = async (values: FormSchema) => {
    setLoading(true)
    await onSubmitForm(values, () => {
      form.reset()
    })
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="text-nightBlue space-y-2">
        <EvacuationForm form={form} />
        <Button disabled={loading} type="submit" className="!bg-submitBlue w-full text-lg">
          {loading ? 'Gönderiliyor...' : 'Gönder'}
        </Button>
      </form>
    </Form>
  )
}