'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formSchema, type FormSchema } from '@/components/EmergencyForm/schema/formSchema'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

import { CountryData } from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from '@/components/ui/PhoneInput'

export default function SelfEvacuationForm() {
  const [country, setCountry] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: { countryCode: '', lineNumber: '' }
    }
  })

  const onSubmitForm = (values: FormSchema) => {
    console.log('Values : ', values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitForm)} className="text-nightBlue font-semibold space-y-2">
        {/* name surname block*/}
        <div className="grid grid-cols-2 gap-2">
          <FormField control={form.control} name="firstName" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="İsim" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="lastName" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Soyisim" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/*Phone Number block*/}
        <FormField name="phoneNumber" render={({ field }) => (
          <FormItem>
            <FormControl>
              <PhoneInput
                onChange={(value: string, country: CountryData) => {
                  const countryCode: string = country.dialCode
                  const lineNumber: string = value.slice(countryCode.length)
                  field.onChange({ countryCode, lineNumber })
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/*number of seats block*/}
        <FormField name="seatingCount" render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="Koltuk Sayısı"
                type="number"
                min={0}
                max={999}
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <hr />
        <span className="font-bold text-white block text-center">Başvurunun Yapıldığı Konum</span>
        {/*application location box*/}



        <Button type="submit">Gönder</Button>
      </form>
    </Form>
  )
}