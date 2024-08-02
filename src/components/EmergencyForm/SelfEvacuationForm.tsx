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
import { http } from '@/configs/axiosConfig'
import { toast } from '@/components/ui/toast/use-toast'
import { useState } from 'react'

export default function SelfEvacuationForm() {
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      seatingCount: 0,
      phoneNumber: { countryCode: '90', lineNumber: '' },
      sourceCity: '',
      sourceDistrict: '',
      address: '',
      targetCity: '',
      targetDistrict: ''
    }
  })

  const countryCodeError = form.getFieldState('phoneNumber.countryCode', form.formState).error
  const lineNumberError = form.getFieldState('phoneNumber.lineNumber', form.formState).error

  const handleErrors = (err: any) => {
    const errData = err?.response?.data
    if (errData && errData.subErrors) {
      if (errData.subErrors[0]?.field === 'phoneNumber') {
        toast({ variant: 'destructive', title: 'İşlem Başarısız', description: 'Geçerli bir telefon numarası giriniz' })
        return
      }
    }
    toast({ variant: 'destructive', title: 'İşlem Başarısız', description: 'İşlem sırasında bir hata meydana geldi' })
  }

  const onSubmitForm = async (values: FormSchema) => {
    setLoading(true)

    try {
      const { data } = await http.post('emergency-evacuation-application', values)
      if (data.isSuccess) {
        toast({
          variant: 'success',
          title: 'İşlem Başarılı',
          description: 'Başvurunuz kontrol edilmek üzere başarıyla alınmıştır'
        })
        form.reset()
      } else {
        toast({
          variant: 'destructive',
          title: 'İşlem Başarısız',
          description: 'İşlem sırasında bir hata meydana geldi'
        })
      }
    } catch (err) {
      handleErrors(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitForm)} className="text-nightBlue space-y-2">
        {/* name surname block*/}
        <div className="grid grid-cols-2 gap-2">
          <FormField name="firstName" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="İsim" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField name="lastName" render={({ field }) => (
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
                value={field.value.countryCode + field.value.lineNumber}
                onChange={(value: string, country: CountryData) => {
                  const countryCode: string = country.dialCode
                  const lineNumber: string = value.slice(countryCode.length)
                  field.onChange({ countryCode, lineNumber })
                }}
              />
            </FormControl>
            <div className="text-red-500 font-thin text-sm flex gap-2">
              <span>{countryCodeError?.message}</span>
              <span>{lineNumberError?.message}</span>
            </div>
          </FormItem>
        )} />

        {/*number of seats block*/}
        <FormField name="seatingCount" render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="flex items-center justify-between gap-5">
                <Label htmlFor="seatingCount" className="text-background text-nowrap font-semibold">Koltuk
                  Sayısı:</Label>
                <Input
                  id="seatingCount"
                  placeholder="Koltuk Sayısı"
                  type="number"
                  min={0}
                  max={999}
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <hr />
        <span className="font-bold text-white block text-center">Başvurunun Yapıldığı Konum</span>
        {/*application location box*/}
        <div className="grid grid-cols-2 gap-2">
          <FormField name="sourceCity" render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectLocation
                  type="city"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField name="sourceDistrict" render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectLocation
                  type="district"
                  cityValue={form.watch('sourceCity')}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField name="address" render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea {...field} placeholder="Açık adres" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <hr />
        <span className="font-bold text-white block text-center">Tahliye Sağlanacak Konum</span>

        {/*target location box*/}
        <div className="grid grid-cols-2 gap-2">
          <FormField name="targetCity" render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectLocation
                  type="city"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField name="targetDistrict" render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectLocation
                  type="district"
                  cityValue={form.watch('targetCity')}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <Button disabled={loading} type="submit" className="!bg-submitBlue w-full text-lg">
          {loading ? 'Gönderiliyor...' : 'Gönder'}
        </Button>
      </form>
    </Form>
  )
}