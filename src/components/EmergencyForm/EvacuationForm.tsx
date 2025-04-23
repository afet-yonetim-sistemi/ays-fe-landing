'use client'

import SelectLocation from '@/components/SelectLocation'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PhoneInput from '@/components/ui/PhoneInput'
import { Textarea } from '@/components/ui/textarea'
import { UseFormReturn } from 'react-hook-form'
import { CountryData } from 'react-phone-input-2'
import { NumericInput } from '@/components/NumericInput'

interface EvacuationFormSchema {
  firstName: string
  lastName: string
  phoneNumber: {
    countryCode: string
    lineNumber: string
  }
  seatingCount: number
  sourceCity: string
  sourceDistrict: string
  address: string
  targetCity: string
  targetDistrict: string
}

interface EvacuationFormProps {
  form: UseFormReturn<EvacuationFormSchema>
}

const EvacuationForm: React.FC<EvacuationFormProps> = ({ form }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <FormField
          name="firstName"
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
          name="lastName"
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
        name="phoneNumber"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormControl>
              <PhoneInput
                value={
                  (field.value?.countryCode || '') +
                  (field.value?.lineNumber || '')
                }
                onChange={(value: string, country: CountryData) => {
                  const countryCode = country.dialCode
                  const lineNumber = value.slice(countryCode.length)
                  field.onChange({ countryCode, lineNumber })
                }}
              />
            </FormControl>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        name="seatingCount"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="flex items-center justify-between gap-5">
                <Label
                  htmlFor="seatingCount"
                  className="text-background text-nowrap font-semibold"
                >
                  Koltuk Sayısı:
                </Label>
                <NumericInput
                  id={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  onBlur={field.onBlur}
                  maxLength={3}
                  placeholder="Koltuk Sayısı"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <hr />
      <span className="font-bold text-white block text-center">
        Başvurunun Yapıldığı Konum
      </span>
      <div className="grid grid-cols-2 gap-2">
        <FormField
          name="sourceCity"
          render={({ field }) => (
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
          )}
        />
        <FormField
          name="sourceDistrict"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectLocation
                  type="district"
                  cityValue={form.watch('sourceCity')}
                  value={field.value}
                  onChange={field.onChange}
                  disabledOptions={
                    form.watch('sourceCity') === form.watch('targetCity')
                      ? [form.watch('targetDistrict')]
                      : []
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea {...field} placeholder="Açık adres" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <hr />
      <span className="font-bold text-white block text-center">
        Tahliye Sağlanacak Konum
      </span>
      <div className="grid grid-cols-2 gap-2">
        <FormField
          name="targetCity"
          render={({ field }) => (
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
          )}
        />
        <FormField
          name="targetDistrict"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectLocation
                  type="district"
                  cityValue={form.watch('targetCity')}
                  value={field.value}
                  onChange={field.onChange}
                  disabledOptions={
                    form.watch('sourceCity') === form.watch('targetCity')
                      ? [form.watch('sourceDistrict')]
                      : []
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}

export default EvacuationForm
