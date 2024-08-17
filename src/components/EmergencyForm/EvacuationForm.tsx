'use client'

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import PhoneInput from '@/components/ui/PhoneInput'
import { CountryData } from 'react-phone-input-2'
import { Label } from '@/components/ui/label'
import SelectLocation from '@/components/SelectLocation'
import { Textarea } from '@/components/ui/textarea'

export default function EvacuationForm({ form }: { form: any }) {
  const countryCodeError = form.getFieldState('phoneNumber.countryCode', form.formState).error
  const lineNumberError = form.getFieldState('phoneNumber.lineNumber', form.formState).error

  return (
    <>
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
                  onWheel={(e: any) => e.target.blur()}
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value ? Number(e.target.value) : ''
                    if (typeof value === 'number') {
                      if (value <= 999 && value > -1) {
                        field.onChange(value)
                      }
                    } else {
                      field.onChange(value)
                    }
                  }} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
        }
        />

        <hr />
        <span className="font-bold text-white block text-center">Başvurunun Yapıldığı Konum</span>
        {/*application location box*/
        }
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

        {/*target location box*/
        }
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
    </>
  )
}