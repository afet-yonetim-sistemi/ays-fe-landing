import { z } from 'zod'

const noSpecialCharAndLengthSchema = (
  minLength: number,
  maxLength: number
): z.ZodString =>
  z
    .string()
    .min(minLength, {
      message: `Minimum ${minLength} karakter uzunluğunda olmalıdır`,
    })
    .max(maxLength, {
      message: `Maksimum ${maxLength} karakter uzunluğunda olabilir`,
    })
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, { message: 'Özel karakter içeremez' })

const phoneNumberSchema = z.object({
  countryCode: z
    .string()
    .min(1, { message: 'Bir ülke kodu seçilmeli' })
    .regex(/^\d+$/, { message: 'Ülke kodu sadece rakamlardan oluşmalıdır' }),
  lineNumber: z
    .string()
    .min(10, { message: 'Lütfen geçerli bir telefon numarası girin' })
    .max(10, { message: 'Lütfen geçerli bir telefon numarası girin' })
    .regex(/^\d+$/, {
      message: 'Telefon numarası sadece rakamlardan oluşmalıdır',
    }),
})

const formSchema = z.object({
  applicantFirstName: noSpecialCharAndLengthSchema(2, 100).optional(),
  applicantLastName: noSpecialCharAndLengthSchema(2, 100).optional(),
  applicantPhoneNumber: phoneNumberSchema.optional(),
  firstName: noSpecialCharAndLengthSchema(2, 100),
  lastName: noSpecialCharAndLengthSchema(2, 100),
  phoneNumber: phoneNumberSchema,
  sourceCity: noSpecialCharAndLengthSchema(1, 100),
  sourceDistrict: noSpecialCharAndLengthSchema(1, 100),
  address: z
    .string()
    .min(20, { message: 'Minimum 20 karakter uzunluğunda olmalıdır' })
    .max(250, { message: 'Maksimum 250 karakter uzunluğunda olabilir' }),
  seatingCount: z
    .number({ message: 'Koltuk sayısı belirtmelisin' })
    .positive({ message: 'Pozitif bir sayı olmalıdır' })
    .max(999, { message: 'Maksimum 3 haneli bir sayı olmalıdır' }),
  targetCity: noSpecialCharAndLengthSchema(1, 100),
  targetDistrict: noSpecialCharAndLengthSchema(1, 100),
})

export { formSchema }
export type FormSchema = z.infer<typeof formSchema>
